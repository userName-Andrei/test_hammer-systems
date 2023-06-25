import { 
  CalendarOutlined,
  UserOutlined
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const mainTree = [
  {
    key: 'main',
    path: '',
    title: 'Основные',
    icon: '',
    breadcrumb: false,
    submenu: [
      {
        key: 'users',
        path: `${APP_PREFIX_PATH}/users`,
        title: 'Клиенты',
        icon: UserOutlined,
        breadcrumb: true,
        submenu: []
      },
      {
        key: 'planer',
        path: `${APP_PREFIX_PATH}/planer`,
        title: 'Планировщик',
        icon: CalendarOutlined,
        breadcrumb: false,
        submenu: []
      }
    ]
  }
  
]

const navigationConfig = [
  ...mainTree
]

export default navigationConfig;
