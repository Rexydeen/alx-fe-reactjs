import RegistrationForm from './components/RegistrationForm';
// or
import FormikForm from './components/formikForm';

function App() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">User Registration</h1>
      
      
      <FormikForm />
    </div>
  );
}

export default App;