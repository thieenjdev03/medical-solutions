import React, { useState } from 'react';
import {
    UserOutlined,
    CalendarOutlined,
    LinkOutlined,
    HomeOutlined,
    PhoneFilled,
    TeamOutlined,
    MenuOutlined,
} from '@ant-design/icons';
import { Menu, Switch, Avatar, Badge, Space, Divider } from 'antd';
import UserStatus from './UserStatus';

const items = [
    {
        key: '1',
        icon: <HomeOutlined />,
        label: 'Trang chủ',
    },
    {
        key: '2',
        icon: <UserOutlined />,
        label: 'Thông Tin',
    },
    {
        key: 'sub1',
        label: 'Cuộc gọi',
        icon: <PhoneFilled />,
        children: [
            {
                key: '3',
                label: 'Cuộc gọi đến',
            },
            {
                key: '4',
                label: 'Cuộc gọi đi',
            },
            {
                key: 'sub1-2',
                label: 'Lịch sử',
            },
        ],
    },
    {
        key: '4',
        icon: <CalendarOutlined />,
        label: 'Báo Cáo',
    },
    {
        key: '5',
        icon: <TeamOutlined />,
        label: 'Bệnh Nhân',
    },
    {
        key: 'link',
        icon: <LinkOutlined />,
        label: (
            <a href="/#" target="_blank" rel="noopener noreferrer">
                Medical Solutions
            </a>
        ),
    },
];

const SideBar = () => {
    const [theme, setTheme] = useState('light');
    const [collapsed, setCollapsed] = useState(false); // State for sidebar visibility

    const changeTheme = (value) => {
        setTheme(value ? 'dark' : 'light');
    };

    const menuItemStyle = (key) => ({
        fontSize: key === '1' ? '1.25rem' : '1.15rem',
        fontWeight: key === '1' ? 'bold' : 'normal',
    });

    return (
        <div className={`h-screen ${collapsed ? 'w-20' : 'w-72'} bg-white flex flex-col transition-width duration-300 shadow-md`}>
            <div className="flex items-center justify-between p-2">

                <div className={`p-4 text-center ${collapsed ? 'hidden' : ''}`}>
                    <Switch onChange={changeTheme} checked={theme === 'dark'} />
                    <span className="ml-2">Dark</span>
                </div>
                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="p-2 bg-gray-300 rounded hover:bg-gray-400 focus:outline-none"
                >
                    <MenuOutlined />
                </button>
            </div>
            <div className="flex-1 overflow-y-auto">
                <Menu
                    style={{
                        width: '100%',
                        height: '100%',
                        borderRight: 'none',
                        display: collapsed ? 'none' : 'block', // Hide menu when collapsed
                    }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    theme={theme}
                    mode="inline"
                    items={items.map(item => ({
                        ...item,
                        icon: React.cloneElement(item.icon, {
                            style: { fontSize: '1.1rem' },
                        }),
                        label: <span style={menuItemStyle(item.key)
                        }>{item.label}</span>,
                    }))}
                />
            </div>

            <div className="user-section flex flex-col items-center">
                <Space size={30}>
                    <Badge height="fit-content" count={999}>
                        <Avatar shape="square" icon={<UserOutlined />} />
                    </Badge>
                </Space>
                <UserStatus
                    collapsed={collapsed}
                />
            </div>
        </div>
    );
};

export default SideBar;
