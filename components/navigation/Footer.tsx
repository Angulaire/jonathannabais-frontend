import { Row, Col } from 'antd';
import { TwitterCircleFilled, LinkedinFilled } from '@ant-design/icons';
import styled from 'styled-components';

const FooterGroup = styled.footer`
  background: ${props => props.theme.bg.matt};
  a {
    color: white;
  }
  margin: 100px 20px 0;
  text-align: center;
  @media only screen and (min-width: 768px) { 
    margin: 100px 80px 0;
    text-align: left;
  }

  h4 {
    font-weight: 600;
  }
`

const Sitemap = styled.ul`
  list-style: none;
  padding: 0;
  li {
    margin-right: 12px;
    margin-bottom: 8px;
  }
`

const SEO = styled(Col)`
  h3 {
    line-height: 1;
  }
  position: relative;
  p {
    color: white;
    font-size: 14px;
    line-height: 24px;
  }
  margin-bottom: 80px;
  @media only screen and (min-width: 768px) { 
    margin-bottom: 40px;
    padding-right: 20px;
    border-right: 1px solid white;
  }

`

const Socials = styled.div`
  position: absolute;
  bottom: -60px;
  width: 100%;

  ul {
    list-style: none;
    padding: 12px 0;
    li {
      margin-right: 12px;
      display: inline;
      svg { 
        font-size: 22px;
      }
    }
  }

  display: flex;
  justify-content: center;
  @media only screen and (min-width: 768px) { 
    justify-content: left;
  }
  
`

const CopyrightFooter = styled(Row)`
  border-top: 1px solid white;
  margin-top: 20px;
  padding: 30px 0;

  p {
    @media only screen and (min-width: 768px) { 
      text-align: right;
    }
    margin: 12px 0;
    font-size: 14px;
    color: white;
  }
`

type FooterProps = {
  navigation: any;
}

const Footer = ({ navigation }: FooterProps) => {
  return (
    <FooterGroup>
      <Row justify="start" align="top" style={{marginBottom: "55px"}}>
        <SEO xs={24} md={8}>
          <h3>Jonathan</h3>
          <p>J’ai eu le plaisir de collaborer avec mes équipes sur plus de 350 projets en 6 ans.</p>  
          <Socials>
            <ul>
              <li>
                <a href="https://twitter.com/Jonathannabais" target="_blank">
                  <TwitterCircleFilled />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/jonathannabais/" target="_blank">
                  <LinkedinFilled />
                </a>
              </li>
            </ul>
          </Socials>
        </SEO>
        {navigation.map(category =>
          <Col xs={12} md={{ span: 3, offset: 1 }}>
            <h4>{category.categoryName}</h4>
            <Sitemap>
              {category.links.map(link => 
                <li>
                  <a href={link.href} target={link.target}>{link.name}</a>
                </li>
              )}
            </Sitemap>
          </Col>
        )}
      </Row>
      <CopyrightFooter justify="space-between" align="middle">
        <Col xs={24} md={12}>
          <svg width="152px" height="38px" viewBox="0 0 152 38" version="1.1" xmlns="http://www.w3.org/2000/svg" >
            <g id="Index" transform="translate(-147.000000, -6031.000000)">
              <g id="Footer" transform="translate(-13.000000, 5243.000000)">
                <g id="Sub-footer" transform="translate(160.000000, 769.000000)">
                  <g id="logo_on_dark_back" transform="translate(0.000000, 19.000000)">
                    <path d="M18.922449,37.844898 C3.7844898,37.844898 1.26945121e-13,34.0604082 1.26945121e-13,18.922449 C1.26945121e-13,3.7844898 3.7844898,0 18.922449,0 C34.0604082,0 37.844898,3.7844898 37.844898,18.922449 C37.844898,34.0604082 34.0604082,37.844898 18.922449,37.844898 Z" id="Path" fill="#FFFFFF"></path>
                    <path d="M20.7416236,24.249692 L23.4438528,22.3897297 C24.3504083,21.7661675 25.489014,21.5615689 26.5619206,21.8294372 C27.6348272,22.0973054 28.5353377,22.811002 29.0279655,23.7838927 C30.2789518,26.2592599 28.4387328,29.1591837 25.6252499,29.1591837 C24.155096,29.1589549 22.8118051,28.3420012 22.1574302,27.0501482 L20.7416236,24.249692 Z" id="Path" fill="#57DBE9" fillRule="nonzero"></path>
                    <path d="M14.5977754,28.4243735 L20.7416236,24.166484 L18.1013134,18.9066883 C16.6597401,16.0324644 12.5083521,16.0324644 11.0650627,18.9066883 L8.76798422,23.4878007 C6.94542367,27.1170598 11.2358205,30.753954 14.5977754,28.4243735 Z" id="Path" fill="#3A81D9" fillRule="nonzero"></path>
                    <path d="M22.1963474,10.3197013 C20.7131007,7.31384105 16.4414518,7.31384105 14.9582051,10.3197013 L10.1946848,19.9679419 L10.7162381,18.9120131 C12.1418172,16.0246145 16.2447033,16.0246145 17.6702823,18.9120131 L20.279745,24.1959184 L23.0605146,22.23576 C23.9934192,21.5786064 25.1651185,21.3629861 26.2692092,21.6452844 C27.3732998,21.9275828 28.2999837,22.6797262 28.8069297,23.7050265 L22.1963474,10.3197013 Z" id="Path" fill="#0D41B9" fillRule="nonzero"></path>
                    <path d="M63.5497868,12.6249811 L63.5497868,25.2223861 L60.3494576,25.2223861 L60.3494576,23.698451 L60.2869077,23.698451 C59.3917866,24.8571692 58.1407878,25.4365283 56.5339112,25.4365283 C55.7112197,25.4432708 54.8954943,25.2847873 54.1347353,24.9704036 C53.4149326,24.6743335 52.7649059,24.2302047 52.2265337,23.6666307 C51.6728412,23.0747149 51.2464274,22.3747728 50.9738212,21.6103503 C50.3703468,19.9008318 50.3703468,18.0351163 50.9738212,16.3255978 C51.2464241,15.5583526 51.666193,14.8521646 52.2093967,14.2469572 C53.2995806,13.0684512 54.8314282,12.4016827 56.4336599,12.4082589 C57.9645626,12.4082589 59.1987101,12.952931 60.1361024,14.0422752 L60.1866564,14.0422752 L60.1866564,12.6249811 L63.5497868,12.6249811 Z M59.4077811,21.4555487 C60.0201422,20.8174224 60.3263227,19.9900942 60.3263227,18.9735641 C60.3263227,17.9667808 60.026997,17.1271258 59.4283455,16.4545991 C58.8607942,15.7962395 58.030002,15.4266179 57.162838,15.4466691 C56.2425827,15.4466691 55.4748464,15.7700323 54.8596292,16.4167587 C54.244412,17.0634851 53.9370889,17.9157536 53.9376602,18.9735641 C53.9376602,19.9900942 54.2367003,20.8174224 54.8347806,21.4555487 C55.4328608,22.0936751 56.2040245,22.4127382 57.1482716,22.4127382 C58.0027316,22.4303898 58.8243226,22.0823416 59.4077811,21.4555487 Z" id="Shape" fill="#FFFFFF" fillRule="nonzero"></path>
                    <path d="M74.5385375,12.6923334 C75.0674776,12.8816352 75.5478673,13.1833751 75.9457539,13.5762272 C76.3535939,13.9740626 76.6642489,14.5103359 76.8777189,15.185047 C77.0911888,15.8597581 77.1982047,16.6565387 77.1987664,17.5753888 L77.1987664,24.8163265 L73.8905438,24.8163265 L73.8905438,18.3960284 C73.8905438,17.2740992 73.6972973,16.4856415 73.3108043,16.0306554 C72.9243113,15.5756692 72.3271572,15.346789 71.5193419,15.3440147 C70.663215,15.3440147 69.9823582,15.6325425 69.4767715,16.2095981 C68.9711847,16.7866537 68.7183913,17.6075707 68.7183913,18.6723492 L68.7183913,24.8046744 L65.4110113,24.8046744 L65.4110113,12.6132657 L68.719234,12.6132657 L68.719234,14.1854647 L68.7563103,14.1854647 C69.2436014,13.6190551 69.8527599,13.1672307 70.5393463,12.8629532 C71.8056028,12.3204784 73.2305631,12.2611673 74.5385375,12.6964948 L74.5385375,12.6923334 Z" id="Path" fill="#FFFFFF" fillRule="nonzero"></path>
                    <path d="M90.8473949,12.6215915 L90.8473949,23.6863418 C90.8534269,24.4251814 90.7817277,25.162625 90.6334654,25.88666 C90.4982371,26.5343204 90.2604467,27.1565712 89.9289586,27.7302161 C89.6105061,28.2829125 89.1874845,28.7692276 88.6831845,29.162386 C88.1238849,29.5813334 87.4894189,29.8906847 86.8136641,30.0739221 C85.9884309,30.3016469 85.1346932,30.4111463 84.2782989,30.3991049 C82.315417,30.3991049 80.5953895,29.9780458 79.1182164,29.1359276 L79.8983287,26.3108486 C80.5348402,26.6632801 81.205148,26.9517678 81.8992998,27.1720283 C82.5763983,27.376958 83.2809623,27.478263 83.9887638,27.4724596 C85.1211295,27.4724596 85.9977536,27.2098667 86.618636,26.6846808 C87.2208244,26.2000447 87.5644358,25.4666478 87.5499596,24.6968836 L87.5499596,23.4362668 L87.4872413,23.4362668 C86.5559177,24.4109617 85.335059,24.8983092 83.8246652,24.8983092 C82.6762619,24.8983092 81.6452764,24.6399837 80.7317087,24.1233328 C79.8258546,23.6110331 79.0842398,22.8547729 78.5924137,21.9417915 C78.076921,21.0035125 77.8191746,19.9386313 77.8191746,18.7471478 C77.8191746,17.5385944 78.0689022,16.4509533 78.5683574,15.4842243 C79.9052856,12.9078691 82.9815456,11.7461817 85.7036363,12.7897306 C86.3455183,13.0384123 86.9268435,13.4198228 87.4090582,13.9086667 L87.4726356,13.9086667 L87.4726356,12.6215915 L90.8473949,12.6215915 Z M86.7320444,20.9483196 C87.3282977,20.3400599 87.6261379,19.5647991 87.6255652,18.6225371 C87.6249924,17.6802751 87.3208517,16.9169633 86.713143,16.3326015 C86.1048615,15.7493778 85.3476599,15.4577659 84.4415382,15.4577659 C83.5016231,15.4577659 82.7341117,15.7536453 82.1390039,16.345404 C81.5438962,16.9371627 81.2460559,17.7038886 81.2454831,18.6455816 C81.2424089,19.0160754 81.2954094,19.384924 81.4027084,19.7397662 C81.5913408,20.3713375 81.9906809,20.9203516 82.5350742,21.2965469 C82.8040546,21.4821156 83.1014235,21.6233365 83.4157076,21.714761 C83.7486976,21.8124784 84.0943299,21.8610775 84.4415382,21.8590022 C85.3728618,21.8601402 86.1363639,21.5565793 86.7320444,20.9483196 Z" id="Shape" fill="#FFFFFF" fillRule="nonzero"></path>
                    <path d="M104.496726,13.0285714 L104.496726,25.2285953 L101.124869,25.2285953 L101.124869,23.740239 L101.075056,23.740239 C100.612334,24.2752937 100.034967,24.7061663 99.3831159,25.0028849 C98.7426338,25.2913969 98.0443865,25.4392794 97.3381873,25.4359824 C96.7021626,25.4461318 96.0688328,25.3535267 95.4641704,25.1619649 C94.9213581,24.98038 94.4255828,24.6868527 94.0109914,24.3016 C93.5867181,23.9129228 93.2637895,23.3882085 93.0422054,22.7274571 C92.8206214,22.0667058 92.7095431,21.2818554 92.7089705,20.3729058 L92.7089705,13.0285714 L96.0799679,13.0285714 L96.0799679,19.519204 C96.0799679,20.6169396 96.2540287,21.3876311 96.6021504,21.8312784 C96.9502721,22.2749258 97.5268486,22.497027 98.33188,22.4975823 C99.1203069,22.4975823 99.783055,22.1885839 100.320124,21.570587 C100.857194,20.9525902 101.125442,20.0780664 101.124869,18.9470156 L101.124869,13.0335687 L104.496726,13.0285714 Z" id="Path" fill="#FFFFFF" fillRule="nonzero"></path>
                    <polygon id="Path" fill="#FFFFFF" fillRule="nonzero" points="106.35795 6.20408163 109.459991 6.20408163 109.459991 24.8163265 106.35795 24.8163265"></polygon>
                    <path d="M124.349787,12.6249888 L124.349787,25.222351 L121.148555,25.222351 L121.148555,23.6984211 L121.086005,23.6984211 C120.1903,24.8571353 118.939283,25.4364924 117.332955,25.4364924 C116.508812,25.4438096 115.691562,25.2853157 114.929461,24.9703694 C114.210075,24.6739705 113.560383,24.2298791 113.022089,23.6666009 C112.469989,23.0740923 112.044799,22.3742561 111.772786,21.6103274 C111.170692,19.9005755 111.170692,18.0353449 111.772786,16.325593 C112.046031,15.5584623 112.466058,14.8523425 113.009236,14.2469594 C114.098923,13.0682382 115.630638,12.4014041 117.232702,12.4082674 C118.763627,12.4082674 119.997792,12.9529376 120.935197,14.0422781 L120.985752,14.0422781 L120.985752,12.6249888 L124.349787,12.6249888 Z M120.207722,21.4555264 C120.818378,20.8174023 121.123706,19.9900769 121.123706,18.9735502 C121.123706,17.9667703 120.824662,17.1271182 120.226573,16.4545938 C119.658501,15.7969317 118.828041,15.4274643 117.961034,15.4466672 C117.040765,15.4466672 116.273018,15.7700293 115.657792,16.4167536 C115.042566,17.0634778 114.734953,17.9157433 114.734953,18.9735502 C114.734953,19.9900769 115.033998,20.8174023 115.632087,21.4555264 C116.230175,22.0936506 117.00135,22.4127127 117.94561,22.4127127 C118.800909,22.4307735 119.623463,22.0827194 120.207722,21.4555264 Z" id="Shape" fill="#FFFFFF" fillRule="nonzero"></path>
                    <path d="M126.670214,10.5626191 C125.999719,10.2093728 125.586455,9.54311371 125.590752,8.82232145 C125.583908,8.29010188 125.813934,7.77926006 126.225572,7.41251298 C127.076709,6.62848207 128.441395,6.62848207 129.292532,7.41251298 C129.702148,7.78346292 129.93346,8.29437985 129.93346,8.82817822 C129.93346,9.36197658 129.702148,9.87289351 129.292532,10.2438435 C128.888603,10.6259237 128.336053,10.8373884 127.762177,10.8295206 C127.379401,10.8326481 127.002594,10.7405475 126.670214,10.5626191 Z M126.009501,12.5606147 L129.514853,12.5606147 L129.514853,24.8163265 L126.009501,24.8163265 L126.009501,12.5606147 Z" id="Shape" fill="#FFFFFF" fillRule="nonzero"></path>
                    <path d="M139.239583,12.4202441 L139.239583,16.0075536 C138.905884,15.9831218 138.609263,15.9709059 138.34972,15.9709059 C137.346914,15.9709059 136.563721,16.2676967 136.000141,16.8612783 C135.436561,17.4548599 135.154486,18.2186311 135.153916,19.152592 L135.153916,24.8163265 L131.794685,24.8163265 L131.794685,12.6159761 L135.153916,12.6159761 L135.153916,14.4092144 L135.191564,14.4092144 C135.632876,13.7967558 136.211278,13.2898255 136.883158,12.9266486 C137.524558,12.5836966 138.245118,12.405405 138.976902,12.4085835 C139.064631,12.4067999 139.152385,12.4106954 139.239583,12.4202441 Z" id="Path" fill="#FFFFFF" fillRule="nonzero"></path>
                    <path d="M151.555929,20.0158982 L142.742547,20.0158982 C142.943911,20.7611482 143.327474,21.3490359 143.893238,21.7795611 C144.459001,22.2100863 145.145468,22.4285019 145.95264,22.4348079 C147.167687,22.4434069 148.168785,21.9690266 148.955934,21.0116669 L151.143191,23.0522189 C150.542917,23.7989993 149.775706,24.393744 148.903591,24.7883649 C147.982009,25.2211832 146.917698,25.4373057 145.71066,25.4367324 C144.488176,25.4367324 143.386396,25.1701622 142.40532,24.6370218 C141.43003,24.1080491 140.626121,23.3104914 140.088493,22.3384986 C139.523301,21.338717 139.240419,20.196478 139.239847,18.9117816 C139.232107,18.0139954 139.394289,17.1228781 139.7178,16.285635 C140.010188,15.5178836 140.452432,14.8162771 141.018656,14.2218656 C141.579935,13.6443277 142.254559,13.1896229 142.999972,12.8864349 C143.78584,12.5647355 144.627519,12.4022388 145.476403,12.4083283 C146.69145,12.4083283 147.768346,12.6832109 148.70709,13.2329761 C149.632989,13.7707687 150.387132,14.5614042 150.881475,15.5125814 C151.392893,16.482553 151.648316,17.5806503 151.647744,18.8068733 C151.644884,19.4030733 151.614279,19.8060816 151.555929,20.0158982 Z M143.7937,15.9476928 C143.295439,16.324904 142.949917,16.8695098 142.757134,17.5815102 L148.300358,17.5815102 C148.124737,16.8935871 147.806387,16.3541407 147.34531,15.9631711 C146.884233,15.5722014 146.297589,15.3770032 145.58538,15.3775765 C144.891476,15.3798696 144.294249,15.5699083 143.7937,15.9476928 Z" id="Shape" fill="#FFFFFF" fillRule="nonzero"></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </Col>
        <Col xs={24} md={12}>
          <p>© Made with love from the team of <a href="http://angulaire.io/" target="_blank">Angulaire</a></p>
        </Col>
      </CopyrightFooter>
    </FooterGroup>
  )
}
export default Footer
