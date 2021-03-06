import {Size} from 'src/styles';

import {StyleSheet} from 'react-native';
import { fontWeightBold } from '../../styles';

const styles = StyleSheet.create({
  feed: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
  },
  feedImgCorner: {
    marginLeft: 10,
  },
  inputCorner: {
    marginRight: 10,
    marginLeft: 10,
    flexGrow: 1,
  },
  input: {
    fontSize: 20,
    // alignSelf: 'center',
  },
  text: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '500',
    color: '#05174f',
  },
  search: {
    width: 30,
    height: 30,
  },
  searchCorner: {
    marginTop: 10,
    marginRight: 10,
    width: 30,
    height: 30,
  },
  face: {},
});

export default styles;
