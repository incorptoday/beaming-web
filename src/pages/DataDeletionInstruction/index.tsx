
const DataDeletionInstruction = () => {
  return (
    <div className="text-content">
      <h1>Data Deletion Instruction</h1>

      <p>
        Beem Login is a Facebook Login App and we do not save your personal data in our server. According to Facebook policy, we have to provide User Data Deletion Callback URL or Data Deletion Instructions URL
      </p>

      <p>
        If you want to delete your activities for Butterfly Login App, you can remove your information by following these steps:
      </p>

      <ul>
        <li>
          Go to your Facebook Account’s Setting & Privacy. Click “Settings”.
        </li>

        <li>
          Look for “Apps and Websites” and you will see all of the apps and websites you linked with your Facebook.
        </li>

        <li>
          Search and Click “Beem” in the search bar.
        </li>

        <li>
          Scroll and click “Remove”.
        </li>

        <li>
          Congratulations, you have successfully removed your app activities.
        </li>
      </ul>
    </div>
  )
}

export default DataDeletionInstruction;