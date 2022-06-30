import React, { useContext, useState, useEffect } from 'react'
import { Grid, Container, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { GlobalContext } from '../Context/GlobalContext'
import { useParams, useNavigate } from 'react-router-dom'
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

function EditProfile () {
  const classes = useStyles()
  const { Id } = useParams()
  const Navigate = useNavigate()
  console.log(Id)
  const { Users, EditUser } = useContext(GlobalContext)
  const [Form_Field_Value, SetFormValue] = useState(INITIAL_STATE)

  const handleChange = e => {
    SetFormValue({ ...Form_Field_Value, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    EditUser(Form_Field_Value)
    Navigate('/')
  }

  useEffect(() => {
    const CurrentUser = Users.find(user => {
      return user.id === Number(Id)
    })
    console.log(CurrentUser)
    SetFormValue(CurrentUser)
  }, [Id, Users])
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Typography style={{ color: 'blue' }}>Edit Profile Form</Typography>
        </Grid>
        <Grid item xs={12}>
          <Container maxWidth='md' spacing={2} xs={12}>
            <div className={classes.formWrapper}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <input
                      type='text'
                      placeholder='ID'
                      name='id'
                      readOnly={Form_Field_Value.id}
                    ></input>
                  </Grid>
                  <Grid item xs={6}>
                    <input
                      type='text'
                      placeholder='FirstName'
                      className='form-control'
                      name='FirstName'
                      defaultValue={Form_Field_Value.FirstName}
                      onChange={handleChange}
                    ></input>
                  </Grid>
                  <Grid item xs={6}>
                    <input
                      type='text'
                      placeholder='FatherName'
                      className='form-control'
                      name='FatherName'
                      defaultValue={Form_Field_Value.FatherName}
                      onChange={handleChange}
                    ></input>
                  </Grid>
                  <Grid item xs={8}>
                    <input
                      type='text'
                      placeholder='Phone'
                      className='form-control'
                      name='Phone'
                      defaultValue={Form_Field_Value.Phone}
                      onChange={handleChange}
                    ></input>
                  </Grid>
                  <Grid item xs={4}>
                    <select
                      onChange={handleChange}
                      name='Course'
                      value={Course}
                    >
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
                    <input
                      name='FirstSem'
                      placeholder='FirstSem'
                      className='form-control'
                      defaultValue={Form_Field_Value.FirstSem}
                      onChange={handleChange}
                      value={formik.values.FirstSem}
                    ></input>
                  </Grid>
                  <Grid item xs={6}>
                    <label>Second Sem Exam</label>
                  </Grid>
                  <Grid item xs={6}>
                  <input
                      name='SecondSem'
                      placeholder='SecondSem'
                      className='form-control'
                      defaultValue={Form_Field_Value.SecondSem}
                      onChange={handleChange}
                      value={formik.values.SecondSem}
                    ></input>
                  </Grid>
                  <Grid item xs={6}>
                    <label>Last Sem Exam</label>
                  </Grid>
                  <Grid item xs={6}>
                  <input
                      name='LastSem'
                      placeholder='LastSem'
                      className='form-control'
                      defaultValue={Form_Field_Value.LastSem}
                      onChange={handleChange}
                      value={formik.values.LastSem}
                    ></input>
                  </Grid>
                  <Grid item xs={6}>
                          {/* average select */}
                          <select onChange={handleChange} name="Average" value={Average}>
                            <option value={"Good"}>Good</option>
                            <option value={"Averge"}>Average</option>
                            
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
              </form>
            </div>
          </Container>
        </Grid>
      </Grid>
    </div>
  )
}

export default EditProfile
