

export default class Validation {

	static creatPostForm(form) {
		let isValid = true;
		const formArr = Array.from(form);
		for (let i = 0; i < formArr.length - 1; i++) {
			const fieldValue = formArr[i].value;
			formArr[i].classList.remove('error')
			if (fieldValue === '' || fieldValue === ' ') {
				formArr[i].classList.add('error')
				isValid = false;
			}


		}
		const showErrorMessage = (parent, msg) => {

		}
		const clearErrorMessages = (formToClear) => {

			const formArr = Array.from(formToClear);
			for (let i = 0; i < formArr.length - 1; i++) {
				const field = formArr[i];
				field.classList.remove('error')
			}
			formToClear.reset();
		}
		return isValid;
	}
}