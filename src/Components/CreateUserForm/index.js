import React, { useContext } from 'react'
import { Grid, Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Form, Formik, useFormik } from 'formik'
import TextField from '../CreateUserForm/TextField'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { GlobalContext } from '../Context/GlobalContext'
const useStyles = makeStyles(theme => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8)
  }
}))

const INITIAL_STATE = {
  id: Date.now(),
  Name: '',
  FatherName: '',
  Course: '',
  Phone: '',
  FirstSem: '',
  SecondSem: '',
  LastSem: '',
  Average: ''
}
const VALIDATION_SCHEMA = Yup.object().shape({
  Name: Yup.string().required('Required'),
  FatherName: Yup.string().required('Required'),
  Course: Yup.string().required('Required'),
  Phone: Yup.string().required(),
  Image: Yup.string().required(),
  FirstSem: Yup.string().required(),
  SecondSem: Yup.string().required(),
  LastSem: Yup.string().required(),
  Average: Yup.string().required()
})

function CreateStudentForm () {
  const classes = useStyles()
  const { AddUser } = useContext(GlobalContext)
  const Navigate = useNavigate()
  const formik = useFormik({
    initialValues: INITIAL_STATE,
    onSubmit: values => {
      
      AddUser(values)
      Navigate('/')
    }
  })

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Typography style={{ color: 'blue' }}>Student Creation Form</Typography>
        </Grid>
        <Grid item xs={12}>
          <Container maxWidth='md' spacing={2} xs={12}>
            <div className={classes.formWrapper}>
              <Formik
                onSubmit={formik.onSubmit}
                initialValues={INITIAL_STATE}
                validationSchema={VALIDATION_SCHEMA}
              >
                {({}) => {
                  return (
                    <Form onSubmit={formik.handleSubmit}>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <TextField name='id' label='ID'></TextField>
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            name='Name'
                            label='Name'
                            key='Name'
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.Name}
                          ></TextField>
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            name='FatherName'
                            label='FatherName'
                            key='FatherName'
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.FatherName}
                          ></TextField>
                        </Grid>
                        <Grid item xs={8}>
                          <TextField
                            name='Phone'
                            label='Phone'
                            key='Phone'
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.Phone}
                          ></TextField>
                        </Grid>
                        <Grid item xs={4}>
                          {/* select cources from 4 courses */}
                          <select onChange={formik.handleChange} name='Course'>
                            <option>courses</option>
                            <option value={'BA english'}>BA english</option>
                            <option value={'BCom'}>BCom</option>
                            <option value={'Bsc Computer'}>Bsc Computer</option>
                            <option value={'Bsc Maths'}>Bsc Maths</option>
                          </select>
                        </Grid>
                        <Grid item xs={6}>
                          <label>First Sem Exam</label>
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            name='FirstSem'
                            label='marks'
                            key='FirstSem'
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.FirstSem}
                          ></TextField>
                        </Grid>
                        <Grid item xs={6}>
                          <label className=''>Second Sem Exam</label>
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            name='SecondSem'
                            label='marks'
                            key='SecondSem'
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.SecondSem}
                          ></TextField>
                        </Grid>
                        <Grid item xs={6}>
                          <label>Last Sem Exam</label>
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            name='LastSem'
                            label='marks'
                            key='LastSem'
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.LastSem}
                          ></TextField>
                        </Grid>
                        <Grid item xs={6}>
                          {/* average select */}
                          <select onChange={formik.handleChange} name='Average'>
                          <option >Over All</option>
                            <option value={'Good'}>Good</option>
                            <option value={'Averge'}>Average</option>
                          </select>
                        </Grid>
                        <Grid item xs={6}>
                          <button
                            type='submit'
                            className='bg-primary w-100 text-white'
                          >
                            Submit
                          </button>
                        </Grid>
                      </Grid>
                    </Form>
                  )
                }}
              </Formik>
            </div>
          </Container>
        </Grid>
      </Grid>
    </div>
  )
}

export default CreateStudentForm
