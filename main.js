document.addEventListener("DOMContentLoaded", () => {
  const addTodo = () => {
    let localItems = JSON.parse(localStorage.getItem("애플리케이션2"));
    if (localItems === null) {
      taskList = [];
    } else {
      taskList = localItems;
    }
    taskList.push(input.value);
    localStorage.setItem("애플리케이션2", JSON.stringify(taskList));
    if (input.value !== "") {
      const div = document.createElement("div");
      document.body.appendChild(div);

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.id = "checkbox";

      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          div.style.textDecoration = "line-through";
        } else {
          div.style.textDecoration = "";
        }
      });
      div.appendChild(checkbox);

      let toDos = [];
      const toDoInput = document.querySelector("div");

      const span = document.createElement("span");
      span.textContent = input.value;
      input.value = "";
      div.appendChild(span);

      const today = new Date();

      const p = document.createElement("h6");
      p.textContent = today.getHours() + ":" + today.getMinutes();
      input.value = "";
      div.appendChild(p);

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "제거하기";
      deleteButton.addEventListener("click", () => {
        div.parentNode.removeChild(div);
        // localStorage.clear();
        // 저장된 녀석을 모두 제거
      });
      div.appendChild(deleteButton);
    }
  };

  const title = document.createElement("div");
  document.body.appendChild(title);
  title.id = "testID";

  const h1 = document.createElement("h1");
  h1.textContent = "할 일 목록";

  title.appendChild(h1);

  const form = document.createElement("div");
  document.body.appendChild(form);

  const input = document.createElement("input");

  input.addEventListener("keyup", (event) => {
    input.addEventListener("keyup", () => {
      // 입력 양식 내부의 값을 저장
    });
    if (event.keyCode === 13) {
      addTodo();
    }
  });
  form.appendChild(input);

  const addButton = document.createElement("button");
  addButton.textContent = "추가하기";
  form.appendChild(addButton);

  addButton.addEventListener("click", () => {
    if (input.value !== "") {
      addTodo();
    }
  });
  const load = () => {
    const data = localStorage.getItem("애플리케이션");
    if (data !== null) {
      return JSON.parse(data);
    } else {
      return {
        message: "",
        id: "",
      };
    }
  };
  const save = (data) => {
    localStorage.setItem("애플리케이션", JSON.stringify(data));
  };

  const data = load();
  input.value = data.message;

  input.addEventListener("keyup", () => {
    data.message = input.value;

    save(data);
  });
});

// json
// 키는 문자열만!
// 문자열은 반드시 큰따옴표!
// 이외에도 데이터는 숫자, 문자열, 불만 저장할 수 있다.
// 컨테이너 데이터는 객체, 배열만 사용할 수 있다 등이 있습니다.
// 함수를 저장하거나 할 수는 없습니다.
