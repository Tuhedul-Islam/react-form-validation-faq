import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { ToastContainer, toast } from 'react-toastify';


const SignUp = () => {

  const notify = () => toast("Wow so easy!", {
      position: "top-right",
    }
  );

   const SignupSchema = Yup.object({
      name: Yup.string().min(2, 'Too Short!').max(20, 'Too Long!').required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
    });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: ''
    },
    validationSchema: SignupSchema,

    onSubmit: (values, {resetForm}) => {
      console.log(values);
      resetForm();
      //Or
      // resetForm({
      //   values: ''
      // });
    }
  })

  const {name, email} = formik.values;
  //console.error(formik.errors)

  return (
    <div style={{width:'1000px', margin:'0 auto'}} className='border bg-light p-3'>
      <h2>Sign Up</h2>
      <Form onSubmit={formik.handleSubmit}>
        
        <Form.Group className="mb-3" controlId='name' >
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="name" 
            name='name' 
            value={name} 
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.name && !!formik.errors.name}
          />
          
          <Form.Control.Feedback type="invalid">
            {formik.errors.name}
          </Form.Control.Feedback>
        </Form.Group>
        

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="email"
            name='email'
            value={email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.email && !!formik.errors.email}
          />

          <Form.Control.Feedback type="invalid">
            {formik.errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>

        <Button className='ms-2' onClick={notify}>Notify(Toaster)</Button>
        <ToastContainer />
        
      </Form>
    </div>
  )
}

export default SignUp