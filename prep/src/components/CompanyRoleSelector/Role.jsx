// import { useState } from 'react';
// import { Menu, Button } from '@mantine/core';

// function Role() {
//   const [selectedRole, setSelectedRole] = useState('Select Your Role');
//   const [selectCompany, setSelectCompany] = useState('Select Your Company Type');

//   const rolesByCompany = {
//     'Product Based': ['Software Developer', 'UI/UX Designer', 'Product Manager', 'DevOps Engineer', 'QA Engineer'],
//     'Service Based': ['Solution Architect', 'Pre-Sales consultant', 'IT support Engineer', 'Cybersecurity Analyst', 'Database Administrator'],
//     'StartUp': ['Full Stack Developer', 'AI/ML Engineer', 'Devops Engineer', 'Growth Engineer', 'Cybersecurity Specialist', 'Product Engineer']
//   };

//   const availableRoles = rolesByCompany[selectCompany] || [];

//   return (
//     <div style={{
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       flexDirection: 'column',
//       height: '100vh',
//       textAlign: 'center',
//       fontFamily: 'serif',
//     }}>
//       {/* Heading */}
//       <h2 style={{
//         textDecoration: 'underline',
//         fontSize: '24px',
//         marginBottom: '10px',
//         marginTop:'10px'
//       }}>
//         Check Your Ability
//       </h2>

//       {/* Subheading */}
//       <p style={{
//         fontSize: '22px',
//         marginBottom: '20px'
//       }}>
//         Select preferred company type & Role below
//       </p>

//       {/* Company Type Button */}
//       <Menu shadow="md" width={250} position="bottom">
//         <Menu.Target>
//           <Button
//             variant="default"
//             style={{
//               backgroundColor: '#d9d9d9',
//               border: '1px solid black',
//               color: 'black',
//               fontSize: '24px',
//               marginBottom: '5px',
//               width: '350px'
//             }}
//           >
//             {selectCompany}
//           </Button>
//         </Menu.Target>
//         <Menu.Dropdown>
//           {Object.keys(rolesByCompany).map((comp) => (
//             <Menu.Item
//               key={comp}
//               onClick={() => {
//                 setSelectCompany(comp);
//                 setSelectedRole('Select Your Role');
//               }}
//               style={{
//                 fontSize: '15px',
//                 fontWeight: comp === selectCompany ? 'bold' : 'normal',
//               }}
//             >
//               {comp}
//             </Menu.Item>
//           ))}
//         </Menu.Dropdown>
//       </Menu>

//       {/* Role Button */}
//       <Menu shadow="md" width={250} position="bottom">
//         <Menu.Target>
//           <Button
//             variant="default"
//             style={{
//               backgroundColor: '#d9d9d9',
//               border: '1px solid black',
//               color: 'black',
//               fontSize: '24px',
//               marginBottom: '40px',
//               width: '350px'
//             }}
//           >
//             {selectedRole}
//           </Button>
//         </Menu.Target>
//         <Menu.Dropdown>
//           {availableRoles.length === 0 ? (
//             <Menu.Item disabled>Select a company first</Menu.Item>
//           ) : (
//             availableRoles.map((role) => (
//               <Menu.Item
//                 key={role}
//                 onClick={() => setSelectedRole(role)}
//                 style={{
//                   fontSize: '15px',
//                   fontWeight: role === selectedRole ? 'bold' : 'normal',
//                 }}
//               >
//                 {role}
//               </Menu.Item>
//             ))
//           )}
//         </Menu.Dropdown>
//       </Menu>

//       {/* Start Interview Button */}
//       <Button
//         // variant="default"
//         type='submit'
//         style={{
//           backgroundColor: '#d9d9d9',
//           border: '1px solid black',
//           color: 'black',
//           fontSize: '20px',
//           // padding: '12px 40px',
//           borderRadius: '40px',
//           width:'350px'
          
          
//         }}
//       >
//         Click To Start Your Interview
//       </Button>
//        {/* <button
//                     type="submit"
//                     className="w-90 bg-gray-400 text-black py-2 hover:bg-blue-900 transition duration-200 rounded-full mt-1.5"
//                 >
//                     Click To Start your Interview
//                 </button> */}

//     </div>
//   );
// }

// export default Role;

import { useState } from 'react';
import { Menu, Button, Flex } from '@mantine/core';

function Role() {
  const [selectedRole, setSelectedRole] = useState('Select Your Role');
  const [selectCompany, setSelectCompany] = useState('Service Based');

  const rolesByCompany = {
    'Product Based': ['Software Developer', 'UI/UX Designer', 'Product Manager', 'DevOps Engineer', 'QA Engineer'],
    'Service Based': ['Solution Architect', 'Pre-Sales Consultant', 'IT Support Engineer', 'Cybersecurity Analyst', 'Database Administrator'],
    'StartUp': ['Full Stack Developer', 'AI/ML Engineer', 'DevOps Engineer', 'Growth Engineer', 'Cybersecurity Specialist', 'Product Engineer']
  };

  const availableRoles = rolesByCompany[selectCompany] || [];

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      // background: '#f5f7ff',
      fontFamily: 'sans-serif',
      padding: '20px'
    }}>

      {/* Illustration */}
      <img
        src="/comp/CYAbg.png"
        alt="Target Illustration"
        style={{ width: '200px', marginBottom: '0px' }}
      />

      {/* Headings */}
      <h1 style={{ fontSize: '28px', color: '#1a1a1a', marginBottom: '10px' }}>
        Check Your Ability
      </h1>
      <p style={{ color: '#0D47A1', marginBottom: '30px', fontSize:'20px'}}>
        Select Your Preferred Company Type & Role Below
      </p>

      {/* Dropdown for Company Type */}
      <Menu shadow="md" width={260}>
        <Menu.Target>
          <Button
            variant="default"
            style={{
              backgroundColor: '#fff',
              border: '2px solid black',
              color: '#333',
              fontSize: '16px',
              width: '300px',
              marginBottom: '10px',
              
            }}
          >
            
            {selectCompany}
            <svg xmlns="http://www.w3.org/2000/svg" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke-width="3" 
                      stroke="currentColor" 
                      class="size-3"
                     
                      >
                        <path stroke-linecap="round" 
                        stroke-linejoin="round" 
                        d="m19.5 8.25-7.5 7.5-7.5-7.5" 
                        />
                      </svg>
          </Button>
        </Menu.Target>
        <Menu.Dropdown>
          {Object.keys(rolesByCompany).map((company) => (
            <Menu.Item
              key={company}
              onClick={() => {
                setSelectCompany(company);
                setSelectedRole('Select Your Role');
              }}
              style={{
                fontWeight: company === selectCompany ? 'bold' : 'normal'
              }}
            >
              {company}
            </Menu.Item>
          ))}
        </Menu.Dropdown>
      </Menu>

      {/* Dropdown for Role */}
      <Menu shadow="md" width={260}>
        <Menu.Target>
          <Button
            variant="default"
            style={{
              backgroundColor: '#fff',
              border: '2px solid black',
              color: '#333',
              fontSize: '16px',
              width: '300px',
              marginBottom: '30px'
              
            }}
           
            
          >
            {selectedRole}
            <svg xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke-width="3" 
            stroke="currentColor" 
            class="size-3"
           
            >
              <path stroke-linecap="round" 
              stroke-linejoin="round" 
              d="m19.5 8.25-7.5 7.5-7.5-7.5" 
              />
            </svg>
          </Button>
        </Menu.Target>
        <Menu.Dropdown>
          {availableRoles.length === 0 ? (
            <Menu.Item disabled>Select a company first</Menu.Item>
          ) : (
            availableRoles.map((role) => (
              <Menu.Item
                key={role}
                onClick={() => setSelectedRole(role)}
                style={{
                  fontWeight: role === selectedRole ? 'bold' : 'normal'
                }}
              >
                {role}
              </Menu.Item>
            ))
          )}
        </Menu.Dropdown>
      </Menu>

      {/* Start Button */}
      <Button
        style={{
          backgroundColor: '#377dff',
          color: '#fff',
          fontSize: '16px',
          borderRadius: '30px',
          padding: '0px 30px',
          width: '300px'
        }}
      >
        🚀 Start Your Journey
      </Button>
    </div>
  );
}

export default Role;
