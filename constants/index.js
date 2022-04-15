import {
  FontAwesome,
  FontAwesome5,
  Ionicons,
  Feather,
  MaterialCommunityIcons,
  AntDesign,
  MaterialIcons,
} from '@expo/vector-icons';

const colors = {
  purpleColor: '#6600cc',
  greenColor: '#249848',
  blueColor: '#4371ED',
  yellowColor: '#FFBF00',
};

const cards = [
  {
    id: 1,
    title: 'My Budget',
    icon: <FontAwesome5 name='wallet' size={55} color='white' />,
    color: colors.purpleColor,
  },
  {
    id: 2,
    title: 'Monthly Budget',
    icon: <FontAwesome5 name='utensils' size={55} color='white' />,
    color: colors.blueColor,
  },
  {
    id: 3,
    title: 'Weekly Recipe',
    icon: <Ionicons name='fast-food' size={55} color='white' />,
    color: colors.yellowColor,
  },
  {
    id: 4,
    title: 'Market',
    icon: <AntDesign name='shoppingcart' size={55} color='white' />,
    color: colors.greenColor,
  },
];

const categories = [
  {
    name: 'All',
    icon: <Feather name='arrow-down-right' size={24} color='black' />,
  },
  {
    name: 'Electronics',
    icon: <Feather name='power' size={24} color='black' />,
  },
  {
    name: 'Kitchen Utensils',
    icon: (
      <MaterialCommunityIcons name='fridge-outline' size={24} color='black' />
    ),
  },
  {
    name: 'Groceries',
    icon: <FontAwesome name='shopping-cart' size={24} color='black' />,
  },
  {
    name: 'Clothing',
    icon: <FontAwesome5 name='tshirt' size={24} color='black' />,
  },
  {
    name: 'Liqor',
    icon: <MaterialIcons name='liquor' size={24} color='black' />,
  },
  {
    name: 'School Items',
    icon: <Feather name='book' size={24} color='black' />,
  },
];

export { cards, categories, colors };
