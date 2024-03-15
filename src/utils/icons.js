import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/Feather';
import Icon4 from 'react-native-vector-icons/Ionicons';
import Icon5 from 'react-native-vector-icons/SimpleLineIcons';
import Icon6 from 'react-native-vector-icons/Fontisto';

export const HeartIconSolid = ({size, color}) => (
  <Icon name="heart" size={size} color={color} />
);
export const HeartIconOutline = ({size, color}) => (
  <Icon name="hearto" size={size} color={color} />
);
export const Lense = ({size, color}) => (
  <Icon name="search1" size={size} color={color} />
);
export const ArrowLeft = ({size, color}) => (
  <Icon2 name="chevron-thin-left" size={size} color={color} />
);
export const MenuIcon = ({size, color}) => (
  <Icon2 name="menu" size={size} color={color} />
);
export const ArrowRidhtDouble = ({size, color}) => (
  <Icon3 name="chevrons-right" size={size} color={color} />
);
export const CartIcon = ({size, color}) => (
  <Icon3 name="shopping-cart" size={size} color={color} />
);
export const ListIcon = ({size, color}) => (
  <Icon3 name="list" size={size} color={color} />
);
export const GridIcon = ({size, color}) => (
  <Icon3 name="grid" size={size} color={color} />
);
export const UserIcon = ({size, color}) => (
  <Icon4 name="person-circle" ssize={size} color={color} />
);
export const BagIcon = ({size, color}) => (
  <Icon5 name="bag" size={size} color={color} />
);
export const LogOutIcon = ({size, color}) => (
  <Icon5 name="logout" size={size} color={color} />
);

export const FavListIcon = ({size, color}) => (
  <Icon6 name="favorite" size={size} color={color} />
);
