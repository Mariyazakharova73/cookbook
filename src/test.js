// function PopupEdit({ isOpen, onClose, handleEditCard }) {
//   const {
//     register,
//     formState: { errors, isValid },
//     handleSubmit,
//     getValues,
//     setValue,
//     watch,
//     reset
//   } = useForm({ mode: 'onBlur' });

//   const selectedCard = useSelector((state) => state.cards.selectedCard);
//   const [inputValues, setInputValues] = React.useState({});

//   const handleChange = (evt) => {
//     const { name, value } = evt.target;
//     setInputValues({ ...inputValues, [name]: value });
//   };

//   React.useEffect(() => {
//     reset()
//     setInputValues(selectedCard);
//     setValue('title', selectedCard.title);
//     setValue('url', selectedCard.url);
//     setValue('type', selectedCard.type);
//     setValue('ingredients', selectedCard.ingredients);
//     setValue('description', selectedCard.description);
//   }, [isOpen]);

//   function onSubmit() {
//     handleEditCard(inputValues);
//     onClose();
//   }

//   return (
//     <div className="popup__content">
//       <button className="popup__close" type="button" onClick={onClose} />
//       <div className="popup__form-content">
//         <h2 className="popup__form-heading">Редактировать рецепт</h2>
//         <form className="popup__form form" onSubmit={handleSubmit(onSubmit)} noValidate>
//           <input
//             {...register('title', {
//               required: 'Поле обязательно для заполения',
//               minLength: {
//                 value: 5,
//                 message: 'Минимум 5 символов',
//               },
//             })}
//             name="title"
//             className="popup__form-input"
//             onChange={handleChange}
//             type="text"
//             placeholder="Название блюда"
//           />
//           <span className="popup__form-err">{errors?.title?.message}</span>
//           <input
//             {...register('url', {
//               required: 'Поле обязательно для заполения',
//               minLength: {
//                 value: 5,
//                 message: 'Минимум 5 символов',
//               },
//               pattern: {
//                 value: linkChecking,
//                 message: 'Введите ссылку',
//               },
//             })}
//             name="url"
//             className="popup__form-input"
//             onChange={handleChange}
//             type="url"
//             placeholder="Ссылка на фото"
//           />
//           <span className="popup__form-err">{errors?.url?.message}</span>
//           <input
//             {...register('type', {
//               required: 'Поле обязательно для заполения',
//               minLength: {
//                 value: 5,
//                 message: 'Неверное значение',
//               },
//               maxLength: {
//                 value: 6,
//                 message: 'Неверное значение',
//               },
//             })}
//             name="type"
//             className="popup__form-input"
//             onChange={handleChange}
//             type="text"
//             placeholder="Сложность (сложно/легко)"
//           />
//           <span className="popup__form-err">{errors?.type?.message}</span>
//           <textarea
//             {...register('ingredients', {
//               required: 'Поле обязательно для заполения',
//               minLength: {
//                 value: 10,
//                 message: 'Минимум 10 символов',
//               },
//             })}
//             name="ingredients"
//             className="popup__form-textarea"
//             onChange={handleChange}
//             type="text"
//             placeholder="Список ингредиентов"
//           />
//           <span className="popup__form-err">{errors?.ingredients?.message} </span>
//           <textarea
//             {...register('description', {
//               required: 'Поле обязательно для заполения',
//               minLength: {
//                 value: 10,
//                 message: 'Минимум 10 символов',
//               },
//             })}
//             name="description"
//             className="popup__form-textarea"
//             onChange={handleChange}
//             type="text"
//             placeholder="Порядок приготовления"
//           />
//           <span className="popup__form-err">{errors?.description?.message} </span>
//           <button disabled={!isValid} className="popup__form-button" type="submit">
//             Сохранить
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// function Popup({ onClose, handleChange, inputValues, titleText, onSubmit, }) {
//   const {
//     register,
//     formState: { errors, isValid },
//     handleSubmit,
//     getValues,
//     setValue,
//     watch
//   } = useForm({ mode: 'onBlur' });

//   return (
//     <div className="popup__content">
//       <button className="popup__close" type="button" onClick={onClose} />
//       <div className="popup__form-content">
//         <h2 className="popup__form-heading">{titleText}</h2>
//         <form className="popup__form form" onSubmit={handleSubmit(onSubmit)} noValidate>
//           <input
//             {...register('title', {
//               required: 'Поле обязательно для заполения',
//               minLength: {
//                 value: 5,
//                 message: 'Минимум 5 символов',
//               },
//             })}
//             name="title"
//             className="popup__form-input"
//             onChange={handleChange}
//             value={inputValues.title || ''}
//             type="text"
//             placeholder="Название блюда"
//           />
//           <span className="popup__form-err">{errors?.title?.message}</span>
//           <input
//             {...register('url', {
//               required: 'Поле обязательно для заполения',
//               minLength: {
//                 value: 5,
//                 message: 'Минимум 5 символов',
//               },
//               pattern: {
//                 value: linkChecking,
//                 message: 'Введите ссылку',
//               },
//             })}
//             name="url"
//             className="popup__form-input"
//             onChange={handleChange}
//             value={inputValues.url || ''}
//             type="url"
//             placeholder="Ссылка на фото"
//           />
//           <span className="popup__form-err">{errors?.url?.message}</span>
//           <input
//             {...register('type', {
//               required: 'Поле обязательно для заполения',
//               minLength: {
//                 value: 5,
//                 message: 'Неверное значение',
//               },
//               maxLength: {
//                 value: 6,
//                 message: 'Неверное значение',
//               },
//             })}
//             name="type"
//             className="popup__form-input"
//             onChange={handleChange}
//             value={inputValues.type || ''}
//             type="text"
//             placeholder="Сложность (сложно/легко)"
//           />
//           <span className="popup__form-err">{errors?.type?.message}</span>
//           <textarea
//             {...register('ingredients', {
//               required: 'Поле обязательно для заполения',
//               minLength: {
//                 value: 10,
//                 message: 'Минимум 10 символов',
//               },
//             })}
//             name="ingredients"
//             className="popup__form-textarea"
//             onChange={handleChange}
//             value={inputValues.ingredients}
//             type="text"
//             placeholder="Список ингредиентов"
//           />
//           <span className="popup__form-err">{errors?.ingredients?.message} </span>
//           <textarea
//             {...register('description', {
//               required: 'Поле обязательно для заполения',
//               minLength: {
//                 value:10,
//                 message: 'Минимум 10 символов',
//               },
//             })}
//             name="description"
//             className="popup__form-textarea"
//             onChange={handleChange}
//             value={inputValues.description || ''}
//             type="text"
//             placeholder="Порядок приготовления"
//           />
//           <span className="popup__form-err">{errors?.description?.message} </span>
//           <button  disabled={!isValid} className="popup__form-button" type="submit">
//             Сохранить
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }