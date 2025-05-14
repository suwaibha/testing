<div style={{ marginBottom: '1rem' }}>
        <Menu shadow="md" width={200} position="bottom">
          <Menu.Target>
            <Button style={{ backgroundColor: '#000000', color: '#fff' }}>
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
            <Button style={{ backgroundColor: '#000000', color: '#fff' }}>
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
                  }}
                >
                  {role}
                </Menu.Item>
              ))
            )}
          </Menu.Dropdown>
        </Menu>
      </div>