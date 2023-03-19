window.addEventListener('load', () => {									//Adding Events When File Just Opens.
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {							//Adding Events When Clicked on Submit.
		e.preventDefault();												//Preventing an Website from Refreshing a page.

		const task = input.value;

		const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);							//Adding a New Entry when new To-Do is submitted.

		const task_input_el = document.createElement('input');			//Creating New elemnt for new input of Task.
		task_input_el.classList.add('text');							//Adding the Class to the inputted entry so that the new entry will get styles of that class.
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('div');  
		task_actions_el.classList.add('actions');						//Creating new element and adding new class to it.
		
		const task_edit_el = document.createElement('button');          //Creating The Edit Button and giving it styles assigned with "edit" class
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';							//Creating The delete Button and giving it styles assigned with "delete" class

		task_actions_el.appendChild(task_edit_el);						//Implementing the EDIT and DELETE buttons.
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';

		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";						//While one clicks on Edit button, the button will change to "Save"
				task_input_el.removeAttribute("readonly");				//On clicking "Edit", the content can be changed as READONLY tag is removed.
				task_input_el.focus();									//Gives focus to the element.
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);										//Adding Event to Delete button to remove the entry when clicked upon the Delete button.
		});
	});
});
