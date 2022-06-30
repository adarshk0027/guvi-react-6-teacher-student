import React, { useContext, useEffect, useState } from 'react'
import { Grid, Container, Typography} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useNavigate, useParams } from 'react-router-dom'
import { GlobalContext } from '../Context/GlobalContext'
//import  TextField  from '../CreateUserForm/TextField'
const useStyles = makeStyles(theme => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8)
  }
}))

const INITIAL_STATE = {
  id: '',
  FirstName: '',
  LastName: '',
  Company: '',
  Age: '',
  Image: '',
  Address: '',
  Salary: ''
}

function EditStudent () {
  const Navigate = useNavigate()
  const classes = useStyles()
  const { Users, EditUser } = useContext(GlobalContext)
  console.log(Users)
  const { Id } = useParams()
  console.log(Id, 'id')
  //Set A State for Form Fields

  const [Form_Field_Value, SetFormValue] = useState(INITIAL_STATE)
  //handle change
  const handleChange = e => {
    SetFormValue({ ...Form_Field_Value, [e.target.name]: e.target.value })
  }
  //handleSubmit
  const handleSubmit = () => {
    EditUser(Form_Field_Value)
    Navigate('/')
  }
  //useEffect
  useEffect(() => {
    const CurrentUser = Users.find(user => {
      return user.id === Number(Id)
    })
    console.log(CurrentUser, 'current')
    SetFormValue(CurrentUser)
  }, [Id, Users])

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Typography style={{ color: 'blue' }}>Student Edit Form</Typography>
        </Grid>
        <Grid item xs={12}>
          <Container maxWidth='md' spacing={2} xs={12}>
            <div className={classes.formWrapper}>
              <form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    {/* <TextField name='id' label='ID'></TextField> */}
                  </Grid>
                  <Grid item xs={6}>
                    <input
                      style={{ border: '1px solid' }}
                      className='form-control'
                      name='Name'
                      label='Name'
                      key='Name'
                      onChange={handleChange}
                      value={Form_Field_Value.Name}
                    ></input>
                  </Grid>
                  <Grid item xs={6}>
                    <input
                      style={{ border: '1px solid' }}
                      className='form-control'
                      name='FatherName'
                      label='FatherName'
                      key='FatherName'
                      onChange={handleChange}
                      value={Form_Field_Value.FatherName}
                    ></input>
                  </Grid>
                  <Grid item xs={6}>
                    <input
                      style={{ border: '1px solid' }}
                      className='form-control'
                      name='Phone'
                      label='Phone'
                      key='Phone'
                      onChange={handleChange}
                      value={Form_Field_Value.Phone}
                    ></input>
                  </Grid>
                  <Grid item xs={6}>
                    {/* select cources from 4 courses */}
                    <select onChange={handleChange} name='Course'>
                      <option>Courses</option>
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
                      style={{ border: '1px solid' }}
                      className='form-control'
                      name='FirstSem'
                      label='FirstSem'
                      key='FirstSem'
                      onChange={handleChange}
                      value={Form_Field_Value.FirstSem}
                    ></input>
                  </Grid>
                  <Grid item xs={6}>
                    <label>Second Sem Exam</label>
                  </Grid>
                  <Grid item xs={6}>
                    <input
                      style={{ border: '1px solid' }}
                      className='form-control'
                      name='SecondSem'
                      label='SecondSem'
                      key='SecondSem'
                      onChange={handleChange}
                      value={Form_Field_Value.SecondSem}
                    ></input>
                  </Grid>
                  <Grid item xs={6}>
                    <label>Last Sem Exam</label>
                  </Grid>
                  <Grid item xs={6}>
                    <input
                      style={{ border: '1px solid' }}
                      className='form-control'
                      name='LastSem'
                      label='LastSem'
                      key='LastSem'
                      multiline={true}
                      rows={4}
                      onChange={handleChange}
                      value={Form_Field_Value.LastSem}
                    ></input>
                  </Grid>
                  <Grid item xs={6}>
                    {/* average select */}
                    <select onChange={handleChange} name='Average' value={Form_Field_Value.Average}>
                      <option>Over All</option>
                      <option value={'Good'}>Good</option>
                      <option value={'Averge'}>Average</option>
                    </select>
                  </Grid>
                  <Grid item xs={6}>
                    <button
                      type='submit'
                      className='bg-primary w-100 text-white'
                      onClick={e => {
                        e.preventDefault()
                        handleSubmit()
                      }}
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

export default EditStudent
