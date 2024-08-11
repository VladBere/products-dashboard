import { Table } from 'antd';
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { routes } from '../../config/routes'

export const UsersTable = ({ users }) => {

    const dataSource = users.map(i => ({
        key: i.id,
        name: i.name,
        email: i.email,
        role: i.role,
        button:
            <Link
                className='size-10 border border-slate-800 rounded-sm flex items-center hover:bg-slate-200 transition-colors justify-center p-2'
                to={routes.users + '/' + i.id}>
                <ArrowRight className='size-4' />
            </Link>
    }))
    
      const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Role',
          dataIndex: 'role',
          key: 'role',
        },
        {
            title: 'More',
            dataIndex: 'button',
            key: 'button',
        },
      ];

    return (
        <Table dataSource={dataSource} columns={columns} />
    )
}
