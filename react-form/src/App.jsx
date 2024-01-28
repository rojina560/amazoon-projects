
import './App.css'
import Grandpa from './Components/Grandpa/Grandpa';
import ReuseableForm from './Components/ReuseableForm/ReuseableForm'
// import HookForm from './Components/Hooks/HookForm'
// import RefForm from './Components/RefForm/RefForm'
// import RefarForm from './Components/RefarForm/RefarForm'
// import SimpleForm from './Components/SimpleForm\'/SimpleForm'
// import StateFullForm from './Components/StateFulllForm/StateFullForm'


function App() {
  // const handleSingupSubmit = (data) => {
  //  console.log('singup', data)
  // };
  // const handleUpdateSubmit = data => {
  //   console.log('update profile',data)
  // }
  return (
    <>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <RefarForm></RefarForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReuseableForm formTitle={"sing up"} handleSubmit={handleSingupSubmit}>
        <div>
          <h2>this is signup form</h2>
        </div>
      </ReuseableForm>
      <ReuseableForm
        formTitle={"update form"}
        handleSubmit={handleUpdateSubmit}
        submitBtnText="update profile"
      >
        <div>
          <h2>this is profile update form</h2>
        </div>
      </ReuseableForm> */}
      <Grandpa></Grandpa>
    </>
  );
}

export default App
