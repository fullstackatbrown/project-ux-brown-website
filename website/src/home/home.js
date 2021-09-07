import Header from '../header-footer/header.js';
import Footer from '../header-footer/footer.js';
import '../App.css';
import { Button } from '@material-ui/core';
import React from 'react';
import Profile from './profile.js';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import data from '../events/events-data.json';
import EventTile from '../events/event_tile.js';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.members = data.profiles;
    this.events = data.events;
  }

  renderProfile(user) {
    return (
      <div className="profile-item">
        <Profile
          image={user.image}
          name={user.name}
          role={user.role}
          class={user.class}
        />
      </div>
    );
  }

  renderEventTile(tile) {
    return (
      <div className="event-item">
        <EventTile
          title={tile.title}
          description={tile.description}
          date={tile.date}
          date_words={tile.date_words}
          status={tile.status}
          add_link={tile.add_link}
        />
      </div>
    );
  }


  render() {
    const buttonStyle = {
      background: "#FFF"
    }

    const buttonStyle2 = {
      background: "#FF8260",
      color: 'white'
    }
    //TODO: al change routes and arrive on top
    //TODO: al add svg graphics by Coordinates & CSS
    return (
      <div>
        <div className="panel-landing">
          <Header />
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <svg width="400" height="160" viewBox="0 0 500 180" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M371.476 25.2387C356.327 42.946 345.597 64.8307 336.245 85.9603C331.889 95.8076 327.776 106.205 328.714 116.286C339.34 114.418 347.758 104.723 353.091 96.5771C366.571 76.0059 373.185 50.2043 371.476 25.2387ZM297.173 43.8081C276.639 59.5974 259.154 79.7897 246.27 103.147C242.21 110.498 237.769 119.931 238.114 129.368C247.788 127.514 255.932 119.549 261.384 113.477C274.976 98.3418 285.954 80.0732 293.12 60.6476C295.001 55.5503 296.862 49.7154 297.173 43.8081ZM227.407 49.0413C202.109 69.251 182.861 97.9368 173.975 130.184C202.054 107.625 218.434 74.1371 227.407 49.0413ZM132.331 80.9353C116.017 97.4161 102.802 116.321 95.9694 136.198C112.588 121.43 124.587 99.1489 132.331 80.9353ZM90.6417 147C90.075 147 89.5025 146.829 89.0134 146.491C88.0267 145.811 87.5636 144.584 87.8484 143.416C95.6472 111.603 117.936 85.9024 135.26 69.9453C135.982 69.2799 136.712 68.6145 137.446 67.955C139.552 62.175 141.068 57.3873 142.014 54.2109C144.451 46.0443 146.778 36.4515 145.553 27.203C144.313 17.8185 139.112 9.95274 132.297 7.16401C127.809 5.32992 122.36 5.32992 115.148 7.17558C73.8099 17.7462 22.9351 67.009 5.67762 140.714C5.31228 142.267 3.76172 143.225 2.21692 142.866C0.672122 142.499 -0.285827 140.942 0.07664 139.386C13.5368 81.9015 56.8977 16.103 113.73 1.56918C122.188 -0.594695 128.781 -0.525266 134.466 1.80639C143.159 5.36464 149.75 15.0355 151.254 26.4393C152.624 36.7726 150.141 47.1147 147.526 55.8714C147.132 57.1964 146.64 58.7932 146.053 60.6186C165.178 45.0983 187.176 32.2221 208.049 24.4808C219.044 20.4076 227.085 21.1424 231.935 26.6504C234.133 29.1441 235.352 32.2395 235.603 35.9887C246.08 29.121 257.351 23.584 269.174 19.6497C275.52 17.5379 282.913 15.7674 289.682 18.6082C295.346 20.9804 299.751 26.4798 301.764 33.3243C318.619 21.7007 337.217 12.8543 356.836 7.35783C361.5 6.05025 367.42 5.02328 371.836 8.66252C373.3 9.87174 374.327 11.376 375.063 13.0279C379.148 9.21216 384.088 5.52085 389.913 3.3888C398.934 0.0851315 408.764 1.61546 414.964 7.29129C420.91 12.7328 423.038 20.9139 424.232 27.4344C430.823 63.3698 418.654 102.956 393.236 128.286C392.108 129.411 390.287 129.406 389.168 128.269C388.052 127.135 388.06 125.303 389.185 124.178C413.295 100.153 424.831 62.5916 418.574 28.4816C417.544 22.855 415.766 15.8455 411.091 11.567C406.454 7.32601 398.914 6.25275 391.881 8.82452C385.86 11.0289 380.768 15.348 376.715 19.4819C376.778 19.9621 376.833 20.4394 376.881 20.9081C379.686 48.321 372.765 77.0646 357.895 99.7622C351.399 109.673 340.661 121.641 326.395 122.358C325.049 122.416 323.691 121.424 323.423 120.001C321.093 107.472 325.883 95.1538 330.986 83.6112C341.072 60.824 352.763 37.1429 369.871 18.3363C370.095 18.0933 370.317 17.8503 370.544 17.6044C370.101 15.7732 369.393 14.133 368.182 13.1349C365.829 11.1909 361.905 11.9459 358.381 12.9295C338.543 18.4867 319.776 27.5877 302.881 39.5874C303.473 47.861 301.014 55.8859 298.514 62.661C291.095 82.7665 279.729 101.68 265.653 117.354C259.013 124.745 248.686 134.671 235.703 135.498C234.216 135.585 232.887 134.517 232.674 133.027C230.934 120.955 236.336 109.216 241.241 100.338C255.141 75.1409 274.24 53.5137 296.719 36.9259C295.608 31.6146 292.547 26.0777 287.47 23.9485C282.439 21.8425 276.311 23.3699 270.983 25.1433C258.217 29.39 246.12 35.5779 235.019 43.3452C234.576 45.5785 233.897 47.9739 232.982 50.5456C223.112 78.3231 204.321 116.341 170.882 139.722C169.904 140.404 168.618 140.41 167.637 139.75C166.653 139.085 166.173 137.885 166.429 136.722C175.042 97.5376 198.418 62.7131 229.72 40.0445C230.217 35.8324 229.521 32.6358 227.631 30.4864C224.501 26.9397 218.59 26.7459 210.04 29.9107C187.717 38.1901 163.213 52.9033 142.259 71.5335C134.026 93.69 117.761 128.613 92.2871 146.479C91.7924 146.826 91.217 147 90.6417 147Z" fill="#FFF2E6" />
            </svg>
          </div>
          <div className="panel-title">
            <b>We grow, educate, and connect the User Experience and Product Design community at Brown and RISD</b>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <svg width="1000" height="50" viewBox="0 0 1200 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M221.014 14.1651C286.006 9.47165 347.015 7.81175 405.892 7.47888C284.52 2.14413 162.269 3.83731 41.4428 12.5251C107.727 14.8952 162.563 14.9817 221.014 14.1651ZM30.6909 38.3689C30.1258 37.1839 31.3411 35.9656 33.4002 35.6394C78.6839 28.5205 121.858 23.1259 163.314 19.0693C114.295 19.056 64.0267 18.1928 3.56321 15.4277C1.59705 15.3368 0.0682396 14.4158 0.00244271 13.2885C-0.0672246 12.159 1.36095 11.1826 3.30777 11.0184C150.774 -1.36873 300.702 -3.31933 448.931 5.20651C450.959 5.32412 452.46 6.31606 452.418 7.46335C482.421 7.59427 511.987 7.96265 541.352 8.32658C562.93 8.59509 585.242 8.87248 607.184 9.04558C609.312 9.06111 611.015 10.0597 611 11.278C610.984 12.4985 609.258 13.4838 607.129 13.4838C477.591 13.4838 384.852 15.4056 310.335 16.9478C278.819 17.6025 249.825 18.2039 221.676 18.5966C163.248 22.8263 101.604 29.5169 35.4476 39.9223C35.1031 39.9734 34.7587 40 34.4219 40C32.7228 40 31.1631 39.3542 30.6909 38.3689Z" fill="#FFF2E6" />
            </svg>
          </div>
          <div className="btn">
            <Button variant="contained" href="#about" style={buttonStyle}>Find Out More</Button>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-start", marginRight: "0px" }}>
            <svg width="211" height="214" viewBox="0 0 350 214" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M60.2617 171.358C59.9371 172.357 60.3918 173.422 61.2936 173.894C61.399 173.95 61.5093 173.995 61.6284 174.034C62.7433 174.397 63.9428 173.783 64.304 172.663C68.9724 158.255 85.7189 134.833 103.475 110.934C112.128 139.412 121.045 166.942 130.26 179.253C130.456 179.517 130.7 179.719 130.973 179.863C131.678 180.232 132.558 180.188 133.236 179.681C134.178 178.978 134.37 177.644 133.665 176.703C125.056 165.199 116.476 139.005 108.112 111.558C133.713 124.392 158.727 136.263 173.807 137.839C174.978 137.961 176.039 137.102 176.172 135.922C176.309 134.737 175.459 133.685 174.294 133.559C160.058 132.072 135.815 120.607 110.84 108.099C138.403 98.2282 164.868 88.142 176.999 78.3538C177.915 77.6165 178.06 76.2782 177.322 75.3658C176.581 74.4448 175.246 74.305 174.334 75.0442C162.547 84.5534 135.898 94.6284 108.265 104.504C109.151 103.316 110.037 102.129 110.923 100.944C127.41 78.8655 142.98 58.0122 151.044 42.6173C151.589 41.5768 151.19 40.2915 150.149 39.7462C149.108 39.2009 147.824 39.6046 147.279 40.6451C139.378 55.7292 123.921 76.4309 107.554 98.3505L107.554 98.3506L107.518 98.3986C106.715 99.4741 105.91 100.551 105.106 101.629L104.271 98.8601L104.251 98.7925L104.251 98.7923C96.4828 73.0257 89.1465 48.6916 81.6623 33.6166C81.1384 32.5589 79.8612 32.1326 78.8103 32.6585C77.7585 33.1814 77.3297 34.4584 77.8518 35.5103C85.1817 50.2766 92.8126 75.5923 100.193 100.078L100.198 100.092C100.511 101.132 100.825 102.174 101.139 103.215L98.9851 102.127C75.4745 90.2532 53.2651 79.0386 37.3212 74.2648C36.1947 73.928 34.9987 74.5777 34.6523 75.7162C34.3444 76.7215 34.8014 77.7719 35.6899 78.2373C35.8068 78.2986 35.9335 78.3503 36.0644 78.3896C51.6508 83.0566 74.7245 94.7093 97.0378 105.978C98.0131 106.471 98.9896 106.964 99.9666 107.457C99.1153 107.759 98.2643 108.061 97.4142 108.363C72.0113 117.379 48.0191 125.895 33.0452 134.192C32.0181 134.761 31.6453 136.054 32.2149 137.082C32.4234 137.458 32.7315 137.749 33.0854 137.934C33.6971 138.255 34.4534 138.271 35.1029 137.911C49.3171 130.036 72.1428 121.848 96.5074 113.198C79.9024 135.69 64.8056 157.334 60.2617 171.358Z" fill="#FFF2E6" />
            </svg>
            <svg width="211" height="214" viewBox="0 0 350 214" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M60.2617 171.358C59.9371 172.357 60.3918 173.422 61.2936 173.894C61.399 173.95 61.5093 173.995 61.6284 174.034C62.7433 174.397 63.9428 173.783 64.304 172.663C68.9724 158.255 85.7189 134.833 103.475 110.934C112.128 139.412 121.045 166.942 130.26 179.253C130.456 179.517 130.7 179.719 130.973 179.863C131.678 180.232 132.558 180.188 133.236 179.681C134.178 178.978 134.37 177.644 133.665 176.703C125.056 165.199 116.476 139.005 108.112 111.558C133.713 124.392 158.727 136.263 173.807 137.839C174.978 137.961 176.039 137.102 176.172 135.922C176.309 134.737 175.459 133.685 174.294 133.559C160.058 132.072 135.815 120.607 110.84 108.099C138.403 98.2282 164.868 88.142 176.999 78.3538C177.915 77.6165 178.06 76.2782 177.322 75.3658C176.581 74.4448 175.246 74.305 174.334 75.0442C162.547 84.5534 135.898 94.6284 108.265 104.504C109.151 103.316 110.037 102.129 110.923 100.944C127.41 78.8655 142.98 58.0122 151.044 42.6173C151.589 41.5768 151.19 40.2915 150.149 39.7462C149.108 39.2009 147.824 39.6046 147.279 40.6451C139.378 55.7292 123.921 76.4309 107.554 98.3505L107.554 98.3506L107.518 98.3986C106.715 99.4741 105.91 100.551 105.106 101.629L104.271 98.8601L104.251 98.7925L104.251 98.7923C96.4828 73.0257 89.1465 48.6916 81.6623 33.6166C81.1384 32.5589 79.8612 32.1326 78.8103 32.6585C77.7585 33.1814 77.3297 34.4584 77.8518 35.5103C85.1817 50.2766 92.8126 75.5923 100.193 100.078L100.198 100.092C100.511 101.132 100.825 102.174 101.139 103.215L98.9851 102.127C75.4745 90.2532 53.2651 79.0386 37.3212 74.2648C36.1947 73.928 34.9987 74.5777 34.6523 75.7162C34.3444 76.7215 34.8014 77.7719 35.6899 78.2373C35.8068 78.2986 35.9335 78.3503 36.0644 78.3896C51.6508 83.0566 74.7245 94.7093 97.0378 105.978C98.0131 106.471 98.9896 106.964 99.9666 107.457C99.1153 107.759 98.2643 108.061 97.4142 108.363C72.0113 117.379 48.0191 125.895 33.0452 134.192C32.0181 134.761 31.6453 136.054 32.2149 137.082C32.4234 137.458 32.7315 137.749 33.0854 137.934C33.6971 138.255 34.4534 138.271 35.1029 137.911C49.3171 130.036 72.1428 121.848 96.5074 113.198C79.9024 135.69 64.8056 157.334 60.2617 171.358Z" fill="#FFF2E6" />
            </svg>
            <svg width="211" height="214" viewBox="0 0 350 214" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M60.2617 171.358C59.9371 172.357 60.3918 173.422 61.2936 173.894C61.399 173.95 61.5093 173.995 61.6284 174.034C62.7433 174.397 63.9428 173.783 64.304 172.663C68.9724 158.255 85.7189 134.833 103.475 110.934C112.128 139.412 121.045 166.942 130.26 179.253C130.456 179.517 130.7 179.719 130.973 179.863C131.678 180.232 132.558 180.188 133.236 179.681C134.178 178.978 134.37 177.644 133.665 176.703C125.056 165.199 116.476 139.005 108.112 111.558C133.713 124.392 158.727 136.263 173.807 137.839C174.978 137.961 176.039 137.102 176.172 135.922C176.309 134.737 175.459 133.685 174.294 133.559C160.058 132.072 135.815 120.607 110.84 108.099C138.403 98.2282 164.868 88.142 176.999 78.3538C177.915 77.6165 178.06 76.2782 177.322 75.3658C176.581 74.4448 175.246 74.305 174.334 75.0442C162.547 84.5534 135.898 94.6284 108.265 104.504C109.151 103.316 110.037 102.129 110.923 100.944C127.41 78.8655 142.98 58.0122 151.044 42.6173C151.589 41.5768 151.19 40.2915 150.149 39.7462C149.108 39.2009 147.824 39.6046 147.279 40.6451C139.378 55.7292 123.921 76.4309 107.554 98.3505L107.554 98.3506L107.518 98.3986C106.715 99.4741 105.91 100.551 105.106 101.629L104.271 98.8601L104.251 98.7925L104.251 98.7923C96.4828 73.0257 89.1465 48.6916 81.6623 33.6166C81.1384 32.5589 79.8612 32.1326 78.8103 32.6585C77.7585 33.1814 77.3297 34.4584 77.8518 35.5103C85.1817 50.2766 92.8126 75.5923 100.193 100.078L100.198 100.092C100.511 101.132 100.825 102.174 101.139 103.215L98.9851 102.127C75.4745 90.2532 53.2651 79.0386 37.3212 74.2648C36.1947 73.928 34.9987 74.5777 34.6523 75.7162C34.3444 76.7215 34.8014 77.7719 35.6899 78.2373C35.8068 78.2986 35.9335 78.3503 36.0644 78.3896C51.6508 83.0566 74.7245 94.7093 97.0378 105.978C98.0131 106.471 98.9896 106.964 99.9666 107.457C99.1153 107.759 98.2643 108.061 97.4142 108.363C72.0113 117.379 48.0191 125.895 33.0452 134.192C32.0181 134.761 31.6453 136.054 32.2149 137.082C32.4234 137.458 32.7315 137.749 33.0854 137.934C33.6971 138.255 34.4534 138.271 35.1029 137.911C49.3171 130.036 72.1428 121.848 96.5074 113.198C79.9024 135.69 64.8056 157.334 60.2617 171.358Z" fill="#FFF2E6" />
            </svg>
          </div>
        </div>
        <div className="panel-about" id="about">
          <div className="about-content">
            <div className="col">
              <div className="subtitle"><b>About Us</b></div>
              <p className="content">
                Design @ Brown-RISD aims to empower designers to contribute positively to their local and global communities through events, workshops, projects, and mentorship opportunities.
              </p>
              <div className="subtitle"><b>Join Our Team</b></div>
              <p className="content">
                Interested in joining our team or want to learn more about our organization? Contact us at the links below.
              </p>
              <div className="subtitle"><b>Connect</b></div>
              <p className="content">
                For general inquiries, email us at uxbrownrisd@brown.edu.
              </p>
              <div className="social">
                <SocialIcon className="social" url="" network="facebook" />
                <SocialIcon className="social" url="" network="linkedin" />
                <SocialIcon className="social" url="" network="instagram" />
              </div>
            </div>
            <div className="col">
              <div className="subtitle"><b>Our Team</b></div>
              <p className="content-gray">
                EXECUTIVE BOARD
              </p>
              <div class='members'>
                {this.members.map(user => this.renderProfile(user))}
              </div>
              <br />
              <Button variant='contained' style={buttonStyle2}>
                <Link to="/about">Learn More</Link>
              </Button>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <svg width="450" height="130" viewBox="0 0 600 256" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M390.485 123.225C371.169 136.26 355 154.499 340.36 172.376C333.54 180.708 326.806 189.635 325.026 199.602C335.767 200.63 346.461 193.527 353.771 187.094C372.242 170.854 385.486 147.745 390.485 123.225ZM313.92 121.343C289.923 131.096 267.694 145.904 249.056 164.988C243.186 170.993 236.393 178.904 234.214 188.092C244.033 188.88 254.003 183.371 260.874 178.97C278.006 167.999 293.451 153.312 305.53 136.496C308.7 132.083 312.048 126.954 313.92 121.343ZM245.278 107.814C215.513 120.559 189.323 143.085 172.172 171.802C205.244 157.533 229.948 129.615 245.278 107.814ZM145.143 113.245C125.03 124.787 107.258 139.492 95.3808 156.832C115.332 147.022 132.829 128.739 145.143 113.245ZM87.3696 165.826C86.8234 165.675 86.317 165.358 85.9357 164.902C85.1656 163.984 85.0457 162.678 85.6314 161.628C101.618 133.039 129.945 114.2 150.892 103.431C151.765 102.982 152.646 102.535 153.529 102.094C157.097 97.0837 159.833 92.8724 161.591 90.0626C166.114 82.8394 170.911 74.2124 172.192 64.9714C173.495 55.5955 170.576 46.629 164.75 42.1266C160.912 39.1639 155.66 37.7134 148.217 37.5724C105.556 36.756 43.4024 70.6966 7.14551 137.147C6.37977 138.547 4.63025 139.057 3.2367 138.3C1.84547 137.535 1.33644 135.78 2.10017 134.376C30.3786 82.5496 89.692 30.6696 148.343 31.7907C157.071 31.9566 163.408 33.7789 168.267 37.5398C175.699 43.284 179.477 54.3605 177.891 65.7532C176.46 76.0782 171.314 85.3861 166.462 93.1306C165.729 94.3028 164.83 95.7111 163.778 97.3144C186.345 87.4457 210.977 80.8907 233.158 78.9859C244.841 77.9869 252.395 80.8357 255.604 87.4362C257.059 90.425 257.41 93.7334 256.653 97.4139C268.581 93.5833 280.919 91.2469 293.363 90.6022C300.042 90.2561 307.64 90.5179 313.408 95.0582C318.237 98.8528 321.018 105.326 321.137 112.46C340.478 105.743 360.76 102.167 381.134 102.092C385.977 102.073 391.957 102.66 395.245 107.343C396.334 108.898 396.924 110.622 397.194 112.41C402.147 109.82 407.891 107.577 414.074 107.072C423.649 106.29 432.717 110.382 437.181 117.503C441.464 124.331 441.338 132.784 440.753 139.387C437.538 175.78 415.27 210.698 384.025 228.347C382.639 229.131 380.885 228.641 380.109 227.247C379.335 225.857 379.831 224.094 381.215 223.309C410.851 206.569 431.97 173.435 435.02 138.89C435.525 133.192 435.677 125.962 432.31 120.594C428.97 115.271 421.988 112.229 414.523 112.836C408.133 113.358 402.075 116.165 397.067 119.071C397 119.551 396.926 120.025 396.848 120.49C392.254 147.66 377.93 173.524 357.554 191.444C348.654 199.268 335.117 207.944 321.175 204.838C319.862 204.535 318.817 203.217 318.938 201.774C320.028 189.077 327.924 178.479 335.916 168.712C351.704 149.432 369.278 129.718 390.775 116.145C391.056 115.97 391.335 115.795 391.619 115.618C391.68 113.735 391.434 111.966 390.532 110.681C388.782 108.181 384.798 107.864 381.14 107.874C360.538 107.949 340.025 111.725 320.545 118.794C318.914 126.927 314.406 134.007 310.193 139.872C297.689 157.277 281.698 172.482 263.957 183.843C255.59 189.2 242.993 196.018 230.258 193.359C228.802 193.046 227.805 191.664 227.996 190.171C229.532 178.071 237.865 168.194 244.957 160.942C265.063 140.355 289.231 124.593 315.314 114.588C315.658 109.173 314.182 103.021 309.854 99.6168C305.565 96.2473 299.252 96.0883 293.645 96.3793C280.208 97.0738 266.9 99.8179 254.132 104.35C253.11 106.384 251.818 108.512 250.252 110.748C233.343 134.895 205.109 166.539 166.652 180.173C165.527 180.57 164.286 180.234 163.516 179.337C162.745 178.433 162.602 177.148 163.158 176.095C181.892 140.619 213.696 113.274 249.903 99.7571C251.504 95.8296 251.684 92.563 250.434 89.988C248.362 85.7361 242.715 83.9754 233.631 84.7498C209.909 86.7873 182.373 94.4459 157.215 106.825C143.38 125.99 118.405 155.322 89.0944 165.762C88.525 165.965 87.9242 165.979 87.3696 165.826Z" fill="#FE7B33" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="panel-event">
          <div className="about-content">
            <div className="row">
              <div className="subtitle-bright">
                <b>Events</b>
              </div>
              <Button variant="contained" style={buttonStyle2}>
                <Link to="/events">Explore All</Link>
              </Button>
            </div>
          </div>
          <div className="events">
            {this.events.map(tile => this.renderEventTile(tile)).slice(0, 3)}
          </div>
        </div>
        <div className="panel-projects">
          <div className="project-content">
            <div className="left-col">
              <div className="subtitle-bright"><b>Projects</b></div>
              <p className="content-bright">
                Need a design for your newest side hustle, or want to get involved as a designer? Make something awesome with us!
              </p>
              <br />
              <Button variant="contained" style={buttonStyle2}>
                <Link to="/projects">View Our Projects</Link>
              </Button>
            </div>
            <div className="right-col">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <svg width="211" height="100" viewBox="0 0 350 214" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M60.2617 171.358C59.9371 172.357 60.3918 173.422 61.2936 173.894C61.399 173.95 61.5093 173.995 61.6284 174.034C62.7433 174.397 63.9428 173.783 64.304 172.663C68.9724 158.255 85.7189 134.833 103.475 110.934C112.128 139.412 121.045 166.942 130.26 179.253C130.456 179.517 130.7 179.719 130.973 179.863C131.678 180.232 132.558 180.188 133.236 179.681C134.178 178.978 134.37 177.644 133.665 176.703C125.056 165.199 116.476 139.005 108.112 111.558C133.713 124.392 158.727 136.263 173.807 137.839C174.978 137.961 176.039 137.102 176.172 135.922C176.309 134.737 175.459 133.685 174.294 133.559C160.058 132.072 135.815 120.607 110.84 108.099C138.403 98.2282 164.868 88.142 176.999 78.3538C177.915 77.6165 178.06 76.2782 177.322 75.3658C176.581 74.4448 175.246 74.305 174.334 75.0442C162.547 84.5534 135.898 94.6284 108.265 104.504C109.151 103.316 110.037 102.129 110.923 100.944C127.41 78.8655 142.98 58.0122 151.044 42.6173C151.589 41.5768 151.19 40.2915 150.149 39.7462C149.108 39.2009 147.824 39.6046 147.279 40.6451C139.378 55.7292 123.921 76.4309 107.554 98.3505L107.554 98.3506L107.518 98.3986C106.715 99.4741 105.91 100.551 105.106 101.629L104.271 98.8601L104.251 98.7925L104.251 98.7923C96.4828 73.0257 89.1465 48.6916 81.6623 33.6166C81.1384 32.5589 79.8612 32.1326 78.8103 32.6585C77.7585 33.1814 77.3297 34.4584 77.8518 35.5103C85.1817 50.2766 92.8126 75.5923 100.193 100.078L100.198 100.092C100.511 101.132 100.825 102.174 101.139 103.215L98.9851 102.127C75.4745 90.2532 53.2651 79.0386 37.3212 74.2648C36.1947 73.928 34.9987 74.5777 34.6523 75.7162C34.3444 76.7215 34.8014 77.7719 35.6899 78.2373C35.8068 78.2986 35.9335 78.3503 36.0644 78.3896C51.6508 83.0566 74.7245 94.7093 97.0378 105.978C98.0131 106.471 98.9896 106.964 99.9666 107.457C99.1153 107.759 98.2643 108.061 97.4142 108.363C72.0113 117.379 48.0191 125.895 33.0452 134.192C32.0181 134.761 31.6453 136.054 32.2149 137.082C32.4234 137.458 32.7315 137.749 33.0854 137.934C33.6971 138.255 34.4534 138.271 35.1029 137.911C49.3171 130.036 72.1428 121.848 96.5074 113.198C79.9024 135.69 64.8056 157.334 60.2617 171.358Z" fill="#426EE0" />
                </svg>
                <svg width="211" height="100" viewBox="0 0 350 214" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M60.2617 171.358C59.9371 172.357 60.3918 173.422 61.2936 173.894C61.399 173.95 61.5093 173.995 61.6284 174.034C62.7433 174.397 63.9428 173.783 64.304 172.663C68.9724 158.255 85.7189 134.833 103.475 110.934C112.128 139.412 121.045 166.942 130.26 179.253C130.456 179.517 130.7 179.719 130.973 179.863C131.678 180.232 132.558 180.188 133.236 179.681C134.178 178.978 134.37 177.644 133.665 176.703C125.056 165.199 116.476 139.005 108.112 111.558C133.713 124.392 158.727 136.263 173.807 137.839C174.978 137.961 176.039 137.102 176.172 135.922C176.309 134.737 175.459 133.685 174.294 133.559C160.058 132.072 135.815 120.607 110.84 108.099C138.403 98.2282 164.868 88.142 176.999 78.3538C177.915 77.6165 178.06 76.2782 177.322 75.3658C176.581 74.4448 175.246 74.305 174.334 75.0442C162.547 84.5534 135.898 94.6284 108.265 104.504C109.151 103.316 110.037 102.129 110.923 100.944C127.41 78.8655 142.98 58.0122 151.044 42.6173C151.589 41.5768 151.19 40.2915 150.149 39.7462C149.108 39.2009 147.824 39.6046 147.279 40.6451C139.378 55.7292 123.921 76.4309 107.554 98.3505L107.554 98.3506L107.518 98.3986C106.715 99.4741 105.91 100.551 105.106 101.629L104.271 98.8601L104.251 98.7925L104.251 98.7923C96.4828 73.0257 89.1465 48.6916 81.6623 33.6166C81.1384 32.5589 79.8612 32.1326 78.8103 32.6585C77.7585 33.1814 77.3297 34.4584 77.8518 35.5103C85.1817 50.2766 92.8126 75.5923 100.193 100.078L100.198 100.092C100.511 101.132 100.825 102.174 101.139 103.215L98.9851 102.127C75.4745 90.2532 53.2651 79.0386 37.3212 74.2648C36.1947 73.928 34.9987 74.5777 34.6523 75.7162C34.3444 76.7215 34.8014 77.7719 35.6899 78.2373C35.8068 78.2986 35.9335 78.3503 36.0644 78.3896C51.6508 83.0566 74.7245 94.7093 97.0378 105.978C98.0131 106.471 98.9896 106.964 99.9666 107.457C99.1153 107.759 98.2643 108.061 97.4142 108.363C72.0113 117.379 48.0191 125.895 33.0452 134.192C32.0181 134.761 31.6453 136.054 32.2149 137.082C32.4234 137.458 32.7315 137.749 33.0854 137.934C33.6971 138.255 34.4534 138.271 35.1029 137.911C49.3171 130.036 72.1428 121.848 96.5074 113.198C79.9024 135.69 64.8056 157.334 60.2617 171.358Z" fill="#FFCC01" />
                </svg>
              </div>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <svg width="211" height="100" viewBox="0 0 350 214" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M60.2617 171.358C59.9371 172.357 60.3918 173.422 61.2936 173.894C61.399 173.95 61.5093 173.995 61.6284 174.034C62.7433 174.397 63.9428 173.783 64.304 172.663C68.9724 158.255 85.7189 134.833 103.475 110.934C112.128 139.412 121.045 166.942 130.26 179.253C130.456 179.517 130.7 179.719 130.973 179.863C131.678 180.232 132.558 180.188 133.236 179.681C134.178 178.978 134.37 177.644 133.665 176.703C125.056 165.199 116.476 139.005 108.112 111.558C133.713 124.392 158.727 136.263 173.807 137.839C174.978 137.961 176.039 137.102 176.172 135.922C176.309 134.737 175.459 133.685 174.294 133.559C160.058 132.072 135.815 120.607 110.84 108.099C138.403 98.2282 164.868 88.142 176.999 78.3538C177.915 77.6165 178.06 76.2782 177.322 75.3658C176.581 74.4448 175.246 74.305 174.334 75.0442C162.547 84.5534 135.898 94.6284 108.265 104.504C109.151 103.316 110.037 102.129 110.923 100.944C127.41 78.8655 142.98 58.0122 151.044 42.6173C151.589 41.5768 151.19 40.2915 150.149 39.7462C149.108 39.2009 147.824 39.6046 147.279 40.6451C139.378 55.7292 123.921 76.4309 107.554 98.3505L107.554 98.3506L107.518 98.3986C106.715 99.4741 105.91 100.551 105.106 101.629L104.271 98.8601L104.251 98.7925L104.251 98.7923C96.4828 73.0257 89.1465 48.6916 81.6623 33.6166C81.1384 32.5589 79.8612 32.1326 78.8103 32.6585C77.7585 33.1814 77.3297 34.4584 77.8518 35.5103C85.1817 50.2766 92.8126 75.5923 100.193 100.078L100.198 100.092C100.511 101.132 100.825 102.174 101.139 103.215L98.9851 102.127C75.4745 90.2532 53.2651 79.0386 37.3212 74.2648C36.1947 73.928 34.9987 74.5777 34.6523 75.7162C34.3444 76.7215 34.8014 77.7719 35.6899 78.2373C35.8068 78.2986 35.9335 78.3503 36.0644 78.3896C51.6508 83.0566 74.7245 94.7093 97.0378 105.978C98.0131 106.471 98.9896 106.964 99.9666 107.457C99.1153 107.759 98.2643 108.061 97.4142 108.363C72.0113 117.379 48.0191 125.895 33.0452 134.192C32.0181 134.761 31.6453 136.054 32.2149 137.082C32.4234 137.458 32.7315 137.749 33.0854 137.934C33.6971 138.255 34.4534 138.271 35.1029 137.911C49.3171 130.036 72.1428 121.848 96.5074 113.198C79.9024 135.69 64.8056 157.334 60.2617 171.358Z" fill="#FE7B33" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}


export default Home;
