import React, { useState } from 'react';
import { Dropdown, Menu } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';

const statuses = [
    { label: 'Busy', color: 'bg-red-500' },
    { label: 'Online', color: 'bg-green-500' },
    { label: 'Offline', color: 'bg-gray-500' }
];

function UserStatus(props) {
    const [currentStatus, setCurrentStatus] = useState('Online'); // Default status

    const status = statuses.find(status => status.label === currentStatus);

    const menu = (
        <Menu>
            {statuses.map((status) => (
                <Menu.Item key={status.label} onClick={() => setCurrentStatus(status.label)}>
                    <span className={`w-3 h-3 rounded-full ${status.color} inline-block mr-2`}></span>
                    {status.label}
                </Menu.Item>
            ))}
        </Menu>
    );

    return (
        <div className="flex items-center space-x-4 bg-white p-4 rounded-lg justify-center">
            <div className="flex items-center space-x-2">
                <span className={`w-3 h-3 rounded-full ${status.color}`}></span>
                <span className={`${props.collapsed ? 'hidden' : ''}`}>{status.label}</span>
                <Dropdown overlay={menu} trigger={['click']}>
                    <button className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        <CaretDownOutlined />
                    </button>
                </Dropdown>
            </div>
        </div>
    );
}

export default UserStatus;
