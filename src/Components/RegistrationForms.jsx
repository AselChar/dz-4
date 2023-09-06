import React, {useState} from 'react';
import "./RegistrationForms.css"
const RegistrationForms = () => {
    const [formData, setFormData] = useState({
        fullName:"",
        phoneNumber:"",
        email:"",
    })

    function handleChange(e){
        const {name, value} = e.target
        setFormData({
            ...formData, [name]: value
        })
    }

    const [submit, setSubmit] = useState(null)

    function  handleSubmit (e) {
        e.preventDefault()
        setSubmit(formData)

    }
    return (
        <div>
            <h2>Регистрация пользователей</h2>
            <form onSubmit={handleSubmit} className="registration-form">
                <div className="form-group">
                    <label htmlFor="fullName"></label>
                    <input type="text" value={formData.fullName} onChange={handleChange} name="fullName"/></div>
                <div className="form-group">
                    <label htmlFor="phoneNumber"></label>
                    <input type="tel" value={formData.phoneNumber} onChange={handleChange} name="phoneNumber"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email"></label>
                    <input type="email" value={formData.email} onChange={handleChange} name="email"/>
                </div>
                <button type="submit">Отправить</button>
            </form>
            <div className="preview-data">
                <h3>Просмотр данных:</h3> {
                submit && (
                    <>
                        <p>ФИО: {submit.fullName}</p>
                        <p>Номер телефона: {submit.phoneNumber}</p>
                        <p>Email: {submit.email}</p>
                    </>

                )
            }
            </div>
        </div>
    );
};

export default RegistrationForms;