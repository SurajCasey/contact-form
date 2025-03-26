import React, { useState } from 'react'
import Toast from './components/Toast'
import Radio from './components/Radio'
import Checkbox from './components/checkbox'
import Textfield from './components/Textfield'
import Submit from './components/Submit'

const ContactUs = () => {

  //State for form fields
  const [formData, setFormData] =  useState({
    firstName: '',
    lastName: '',
    email: '',
    queryType: '',
    message: '',
    consent: false,
  });

  //State for errors
  const[errors, setErrors] = useState({});
  const [showToast, setShowToast] = useState(false);

  //Handle input changes
  const handleChange = (e) => {
    const {name, value, type, checked} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    //clear error when user starts typing/checking
    if(errors[name]) {
      setErrors((prev) => ({...prev, [name]: ''}));
    }
  }

  //Validate form
  const validateForm = () => {
    const newErrors = {};
    if(!formData.firstName) newErrors.firstName = 'This field is required'
    if (!formData.lastName) newErrors.lastName = 'This field is required'
    if (!formData.email.trim()){
      newErrors.email = 'This field is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email ='Please enter a valid email address';
    }
    if (!formData.queryType) newErrors.queryType = 'Please select a query type';
    if (!formData.message.trim()) newErrors.message = 'This field is required';
    if (!formData.consent) newErrors.consent = 'To submit this form, please consent to being contacted';
    return newErrors;
  };

  //Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if(Object.keys(validationErrors).length > 0){
      setErrors(validationErrors);
    }else{
      setErrors({});
      setShowToast(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        queryType: '',
        message: '',
        consent: false,
      });
      //scroll to the top of the screen
      window.scrollTo({top:0, behavior: 'smooth'});
      setTimeout(() => setShowToast(false), 4000);
  }
  }


  return (
    <div 
      className=' bg-green200 px-4 py-8  md:py-[128px] md:px-[39px] flex flex-col items-center'
    >
      <div 
        className='bg-white rounded-2xl p-6 flex flex-col gap-8 lg:w-[736px]'
      >
        <header
          className='font-bold text-[32px] tracking-[-1px] text-grey900'
        >
          Contact Us
        </header>

        <main className='flex flex-col gap-6'>
          <div 
            className='flex flex-col gap-6 md:flex-row '  
          >
            <Textfield
                title='First Name'
                type= 'text' 
                placeholder='' 
                value={formData.firstName}
                onChange={handleChange} 
                id= 'firstName'
                name='firstName'
                error={errors.firstName}
            />
            <Textfield
            title='Last Name'
            type= 'text' 
            placeholder='' 
            value={formData.lastName} 
            onChange={handleChange}
            id= 'lastName'
            name='lastName'
            error={errors.lastName}
            />
          </div>
          <Textfield
                title='Email Address'
                type= 'email' 
                placeholder='' 
                value={formData.email}
                onChange={handleChange}
                id= 'emailField'
                name='email'
                error={errors.email}
            />

            <div className='flex flex-col gap-4'>
              <h2>Query Type *</h2>
              <div className='flex flex-col gap-4 md:flex-row'>
              <Radio
                id='General Enquiry'
                name="queryType"
                value= 'General Enquiry'
                label= 'General Enquiry'
                checked= {formData.queryType === 'General Enquiry'}
                onChange={handleChange}
              />
               <Radio
                id='Support Request'
                name="queryType"
                value= 'Support Request'
                label= 'Support Request'
                checked= {formData.queryType === 'Support Request'}
                onChange={handleChange}
              />
              </div>
              {errors.queryType && <p 
               className='text-red-error '
              >
                This field is required
              </p>}

            </div>

            <Textfield
            title='Message'
            type= 'text' 
            placeholder='' 
            name= 'message'
            value={formData.message}
            onChange={handleChange}
            id= 'message'
            error={errors.message}
            multiline={true}
            />
        </main>

        <footer
          className='flex flex-col gap-10'
        >
          <div className='flex flex-col gap-2'>
            <Checkbox
              id='consent'
              name='consent'
              value='consent'
              label='I consent to being contacted by the team'
              checked={formData.consent}
              onChange={handleChange}
            />
            {errors.consent && (<p 
              className='text-red-error '
            >
              {errors.consent}
            </p>  )
            }   

          </div>


          <Submit onClick={handleSubmit}/>
        </footer>

        {showToast && <Toast />}



      </div>
    </div>
  )
}

export default ContactUs