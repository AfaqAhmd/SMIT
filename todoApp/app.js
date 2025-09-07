
    function addTodo() {
      let todoText = document.getElementById('text').value.trim();
      if (todoText === "") {
        alert("Please enter a todo!");
        return;
      }

      let ul = document.getElementById('result');
      let li = document.createElement('li');

      let span = document.createElement('span');
      span.textContent = todoText;

      let actions = document.createElement('div');
      actions.className = 'actions';

      // Edit button
      let editBtn = document.createElement('button');
      editBtn.textContent = "Edit";
      editBtn.onclick = () => {
        let newText = prompt("Update your todo:", span.textContent);
        if (newText !== null && newText.trim() !== "") {
          span.textContent = newText;
        }
      };

      // Delete button
      let delBtn = document.createElement('button');
      delBtn.textContent = "Delete";
      delBtn.onclick = () => {
        ul.removeChild(li);
      };

      actions.append(editBtn, delBtn);
      li.append(span, actions);
      ul.appendChild(li);

      // Clear input
      document.getElementById('text').value = "";
    }
  