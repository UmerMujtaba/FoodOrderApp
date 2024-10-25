import { StyleSheet } from "react-native";
import fonts from "../../../constants/fonts";
import { hp, rfs, rhp, rwp, width, wp } from "../../../constants/dimensions";

export const styles = StyleSheet.create({


  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  expiryCvcContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  expiryInput: {
    width: '30%',
  },
  container: {
    flex: 1,
    paddingHorizontal: rwp(10),
    paddingVertical: rhp(10),
    marginLeft: rwp(5),
    marginRight: rwp(5),
  },
  appBar: {
    // backgroundColor:'red',
    height: rhp(70),
    width: wp(90),
    // marginTop: rhp(30),
    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  imgStyle: {
    width: width,
    height: rhp(250),
    resizeMode: 'cover'
  },
  backIconContainer: (colors) => ({
    backgroundColor: colors.backContainer,
    height: rhp(55),
    width: rwp(50),
    justifyContent: 'center',
    borderRadius: 16,
    marginTop: hp(5),
    //marginLeft: 10
  }),
  backImage: {
    resizeMode: 'contain',
    height: rhp(18.36),
    width: rwp(14),
    alignSelf: 'center',
  },
  title: (colors) => ({
    fontSize: rfs(28),
    marginBottom: rhp(20),
    textAlign: 'center',
    color: colors.text,
    marginTop: hp(5),
    fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold,

  }),
  MainContainer: { height: 82, marginBottom: 20 },
  Heading: (colors) => ({ color: colors.text, fontFamily: fonts.SF_PRO_TEXT.Spectral.Medium, fontSize: 16, marginLeft: 2 }),
  expiryCVCContainer: { height: 80, marginBottom: 20, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10 },
  expiryCVCColCont: { width: 150 },
  expiryCVCRowCont: { flexDirection: 'row', justifyContent: "space-around" },
  btnRowCont: { flexDirection: 'row', justifyContent: 'space-around' },

  list: {
    paddingBottom: 20,
  },
  itemContainer: (colors) => ({
    flexDirection: 'row',
    paddingHorizontal: rwp(12),
    paddingVertical: rhp(12),
    backgroundColor: 'white',
    borderRadius: 16,
    marginBottom: rhp(12),
    backgroundColor: colors.tabBackgroundColor,
  }),

  itemDetails: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: rwp(10)
  },
  itemName: (colors) => ({
    fontSize: rfs(20),
    fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold,
    color: colors.text,

  }),
  itemDescription: (colors) => ({
    fontSize: rfs(16),
    fontFamily: fonts.SF_PRO_TEXT.Spectral.Regular,
    color: colors.text
  }),
  itemPrice: {
    fontSize: rfs(20),
    color: '#15BE77',
    fontFamily: fonts.SF_PRO_TEXT.Spectral.SemiBold,
  },
  itemImage: {
    borderRadius: 8,
    height: rhp(120),
    width: rwp(90)
  },
  addOnName: (colors) => ({
    color: colors.text,
    fontFamily: fonts.SF_PRO_TEXT.Spectral.Regular,
    fontSize: rfs(16)
  }),
  totalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 4,
  },

})