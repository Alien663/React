import * as icons from 'react-bootstrap-icons';

const MyIcon = ({ iconName, ...props }) => {
    if (iconName === undefined || iconName === "") {
        return <></>
    }
    const BootstrapIcon = icons[iconName]
    return <BootstrapIcon {...props} />
}

export default MyIcon