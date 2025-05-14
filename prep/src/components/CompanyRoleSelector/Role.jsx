import { useState } from 'react';
import { Menu, Button } from '@mantine/core';

function Role() {
  const [selectedRole, setSelectedRole] = useState('Select Type of Role');
  const [selectCompany, setSelectCompany] = useState('Select Type of Company');

  const rolesByCompany = {
    'Product Based': ['Software Developer', 'UI/UX Designer', 'Product Manager' , 'DevOps Engineer' , 'QA Engineer'],
    'Service Based': ['Solution Architect', 'Pre-Sales consultant', 'IT support Engineer', 'Cybersecurity Analyst', 'Database Administrator'],
    'StartUp': ['Full Stack Developer', 'AI/ML Engineer', 'Devops Engineer' , 'Growth Engineer' , 'Cybersecurity Specialist' , 'Product Engineer']
  };

  const availableRoles = rolesByCompany[selectCompany] || [];

  return (
    <>
      <div className="hidden md:block">
        <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}>
      <div style={{
        width: 'fit-content',
        // backgroundColor: '#FFFF00',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'
      }}>
        {/* Heading */}
        <div style={{ marginBottom: '1rem' }}>
          <h1 style={{ margin: 0, textAlign: 'center', marginBottom: '10px' }}>Check your Ability</h1>
        </div>

        {/* Company Dropdown */}
        <div style={{ 
          marginBottom: '1rem',
          
          }}>
          <Menu shadow="md" width={250} height={250} position="bottom">
            <Menu.Target>
              <Button style={{ backgroundColor: '#000000', color: '#fff', fontSize: '18px'  }}>
                {selectCompany}
              </Button>
            </Menu.Target>

            <Menu.Dropdown>
              {Object.keys(rolesByCompany).map((comp) => (
                <Menu.Item
                  key={comp}
                  onClick={() => {
                    setSelectCompany(comp);
                    setSelectedRole('Select Type of Role');
                  }}
                  style={{
                    backgroundColor: comp === selectCompany ? '#f0f0f0' : '',
                    fontWeight: comp === selectCompany ? 'bold' : 'normal',
                    fontSize: '15px'
                  }}
                >
                  {comp}
                </Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>
        </div>

        {/* Role Dropdown */}
        <div>
          <Menu shadow="md" width={200} position="bottom">
            <Menu.Target>
              <Button style={{ backgroundColor: '#000000', color: '#fff', fontSize: '18px'  }}>
                {selectedRole}
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
                      backgroundColor: role === selectedRole ? '#f0f0f0' : '',
                      fontWeight: role === selectedRole ? 'bold' : 'normal',
                      fontSize: '15px'
                    }}
                  >
                    {role}
                  </Menu.Item>
                ))
              )}
            </Menu.Dropdown>
          </Menu>
        </div>
      </div>
        </div>
      </div>

      

    </>
  );
}

export default Role;