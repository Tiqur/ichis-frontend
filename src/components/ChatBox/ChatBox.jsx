import styles from './ChatBox.module.scss';
import classNames from 'classnames';
import FlexDiv from '../FlexDiv/FlexDiv'
import { ReactComponent as SettingsIcon } from '../../assets/Settings.svg';
import { ReactComponent as PermissionsIcon } from '../../assets/Permissions.svg';
import { ReactComponent as AddModeraterIcon } from '../../assets/add_moderator.svg';
const cn = classNames.bind(styles);

const Icons = () => {
  return (
    <FlexDiv className={cn(styles.iconContainer)}>
        <PermissionsIcon />
        <AddModeraterIcon />
        <SettingsIcon />
    </FlexDiv>
  )
}

const InputMessage = () => {
  return (
    <FlexDiv alignCenter className={cn(styles.inputBoxContainer)}>
      <FlexDiv className={cn(styles.inputBox)}>
        
      </FlexDiv>
      <FlexDiv className={cn(styles.iconContainer)}>
        
      </FlexDiv>
    </FlexDiv>
  )
}

const ChatBox = () => {
  return (
    <FlexDiv column alignCenter className={cn(styles.container)}>
      <FlexDiv column alignCenter className={cn(styles.messageContainer)}>
        <Icons />
        <InputMessage />
      </FlexDiv>
    </FlexDiv>
  )
}

export default ChatBox;
