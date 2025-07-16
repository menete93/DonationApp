import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../../assets/styles/scaling';
import getFontFamily from '../../../assets/helper';

const Style = StyleSheet.create({
  header: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(20),
    flexDirection: 'row',
  },
  userInfo: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  userName: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingTop: 0,
    width: '80%', // garante que ocupe a largura total
    paddingHorizontal: 1,
  },

  headerIntrotext: {
    fontSize: scaleFontSize(16),
    fontFamily: getFontFamily(2, 600),
    lineHeight: scaleFontSize(19),
    fontWeight: '400',
    color: '#636776',
    marginBottom: verticalScale(2),
    marginTop: 10,
  },
  messageIcon: {
    padding: horizontalScale(14), // Adiciona um preenchimento de 14 unidades ao redor do ícone.
    borderRadius: 100, // Torna o ícone redondo (raio de borda de 100 faz o círculo).
    flexDirection: 'row',
    backgroundColor: '#E0E2E5', // Define a cor de fundo do ícone como um tom claro de cinza (cor específica em hexadecimal).
  },

  messageNumberContainer: {
    backgroundColor: '#F34BAC', // Define a cor de fundo do círculo de notificação com um tom de rosa.
    justifyContent: 'center', // Centraliza o conteúdo (número dentro do círculo).
    flexDirection: 'row', // Organiza os itens dentro do container na horizontal (isso é útil se você tiver mais de um item no futuro).
    width: 10, // Largura do círculo, 10 unidades.
    height: 10, // Altura do círculo, 10 unidades.
    borderRadius: 8, // Torna o círculo arredondado (raio de borda igual ao tamanho da largura/altura).
    alignItems: 'center', // Alinha os itens (número) no centro do círculo.
    position: 'absolute', // A posição do elemento é definida em relação ao seu contêiner pai.
    right: 33, // Coloca o círculo 10 unidades à direita do contêiner pai.
    top: 40, // Coloca o círculo 14 unidades para baixo do topo do contêiner pai.
  },
  profileImage: {
    width: horizontalScale(45),
    height: horizontalScale(45),
    borderRadius: horizontalScale(22.5),
  },

  messageNumber: {
    color: '#FFFFFF', // A cor do número será branca.
    fontSize: scaleFontSize(6), // O tamanho da fonte do número é 6 unidades, bem pequeno.
    fontFamily: 'Inter_18pt-LightItalic', // A família da fonte é 'Inter', estilo 'LightItalic' (itálico claro), com tamanho 18pt.
  },
  userStoryContainer: {
    marginTop: 80,
    width: '400',
    position: 'absolute',
    fontFamily: 'Inter_18pt-SemiBoldItalic',
  },
  userPostContainer: {
    marginTop: horizontalScale(50),
  },
  containerFlatlist: {
    flex: 1,
    paddingHorizontal: horizontalScale(30),
    // paddingVertical: 19,
  },
  containerPost: {
    // flex: 1,
    paddingTop: horizontalScale(10),

    // paddingHorizontal: 30,
  },
  conteinerStyle: {
    paddingHorizontal: horizontalScale(43),
    justifyContent: 'center', // funciona apenas se o conteúdo couber na tela
  },
  switch: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  username: {
    marginTop: 10,
  },
  search: {
    marginHorizontal: horizontalScale(20),
    marginTop: horizontalScale(-70),
  },
  highLightedImageContainer: {
    marginHorizontal: verticalScale(20),
    marginBottom: verticalScale(-40), // ← reduz
  },
  highLightedImage: {
    width: '100%',
    height: verticalScale(160),
  },
  categories: {
    marginLeft: horizontalScale(18),
  },
  categoryItem: {
    marginRight: horizontalScale(10),
  },
  categoryHeader: {
    marginHorizontal: horizontalScale(60),
  },
  donationItemsContainer: {
    paddingHorizontal: horizontalScale(12),
    paddingTop: verticalScale(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  singleDonationItem: {
    maxWidth: '49%',
    marginBottom: verticalScale(23),
  },
});

export default Style;
