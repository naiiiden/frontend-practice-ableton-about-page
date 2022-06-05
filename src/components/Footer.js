import Logo from "../images/logo_footer.svg";
import LogoRegular from "../images/logo.svg";
import LogoFacebook from "../images/facebook.svg";
import LogoTwitter from "../images/twitter.svg";
import LogoYoutube from "../images/youtube.svg";
import LogoReddit from "../images/reddit.svg";

const Footer = () => {
     return (
         <footer>
             <img src={Logo} alt="Ableton's logo" className="footer--main--logo"/>
             <nav className="footer--nav">
                <div className="footer--nav--ul--container">
                    <ul className="footer--nav--ul">
                        <li><a href="">Register Live or Push &gt;</a></li>
                        <li><a href="">About Ableton &gt;</a></li>
                        <li><a href="">Jobs &gt;</a></li>
                        <li>
                            <ul className="footer--nav--ul--socials">
                                <li><a href="" className="facebook--link"><img src={LogoFacebook} alt=""/></a></li>
                                <li><a href="" className="twitter--link"><img src={LogoTwitter} alt=""/></a></li>
                                <li><a href="" className="youtube--link"><img src={LogoYoutube} alt=""/></a></li>
                                <li><a href="" className="reddit--link"><img src={LogoReddit} alt=""/></a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="footer--nav--ul">
                        <li><h3 className="footer--nav--heading">Education</h3></li>
                        <li><a href="">Offers for students and teachers &gt;</a></li>
                        <li><a href="">Ableton for the Classroom &gt;</a></li>
                        <li><a href="">Ableton for Colleges and Universities &gt;</a></li>
                    </ul>
                    <div className="footer--newsletter--container">
                        <h3 className="footer--nav--heading">Sign up to our newsletter</h3>
                        <p className="footer--newsletter--p">Enter your email address to stay up to date with the latest offers, tutorials, downloads, surveys and more.</p>
                        <form className="footer--newsletter--form">
                            <input type="email" name="email" placeholder="Email Address" className="form--email--input"/>
                            <input type="submit" value="Sign up" className="form--email--submit"/>
                        </form>
                    </div>
                </div>
                <div className="footer--nav--ul--container">
                    <ul className="footer--nav--ul">
                        <li><h3 className="footer--nav--heading">Community</h3></li>
                        <li><a href="">Find Ableton User Groups &gt;</a></li>
                        <li><a href="">Find Certified Training &gt;</a></li>
                        <li><a href="">Become a Certified Trainer &gt;</a></li>
                    </ul>
                    <ul className="footer--nav--ul">
                        <li><h3 className="footer--nav--heading">Distributors</h3></li>
                        <li><a href="">Find Distributors &gt;</a></li>
                        <li><a href="">Try Push in-store &gt;</a></li>
                    </ul>
                    <div className="footer--location--container">
                        <h3 className="footer--nav--heading">Language and Location</h3>
                        <form className="footer--language--form">
                            <select name="language" className="footer--language--select">
                                <option value="en" selected>English</option>
                                <option value="de">Deutsch</option>
                                <option value="fr">Français</option>
                                <option value="ja">日本語</option>
                                <option value="zh-cn">简体中文</option>
                            </select>
                            <select name="country" className="footer--country--select">
                                <option value>Please Choose</option>
                                <optgroup label="Common Countries">
                                    <option value="us">United States</option>
                                    <option value="uk">United Kingdom</option>
                                    <option value="fr">France</option>
                                    <option value="de">Germany</option>
                                    <option value="ca">Canada</option>
                                    <option value="jp">Japan</option>
                                    <option value="cn">China</option>
                                </optgroup>
                                <optgroup label="All Countries/Regions">
                                    <option value="af">Afghanistan</option>
                                    <option value="ax">Aland Islands</option>
                                    <option value="al">Albania</option>
                                    <option value="dz">Algeria</option>
                                    <option value="as">American Samoa</option>
                                    <option value="ad">Andorra</option>
                                    <option value="ao">Angola</option>
                                    <option value="ai">Anguilla</option>
                                    <option value="aq">Antarctica</option>
                                    <option value="ag">Antigua And Barbuda</option>
                                    <option value="ar">Argentina</option>
                                    <option value="am">Armenia</option>
                                    <option value="aw">Aruba</option>
                                    <option value="au">Australia</option>
                                    <option value="at">Austria</option>
                                    <option value="az">Azerbaijan</option>
                                    <option value="bs">Bahamas</option>
                                    <option value="bh">Bahrain</option>
                                    <option value="bd">Bangladesh</option>
                                    <option value="bb">Barbados</option>
                                    <option value="by">Belarus</option>
                                    <option value="be">Belgium</option>
                                    <option value="bz">Belize</option>
                                    <option value="bj">Benin</option>
                                    <option value="bm">Bermuda</option>
                                    <option value="bt">Bhutan</option>
                                    <option value="bo">Bolivia</option>
                                    <option value="bq">Bonaire, Sint Eustatius and Saba</option> 
                                    <option value="ba">Bosnia And Herzegovina</option>
                                    <option value="bw">Botswana</option>
                                    <option value="bv">Bouvet Island</option>
                                    <option value="br">Brazil</option>
                                    <option value="io">British Indian Ocean Territory</option>
                                    <option value="bn">Brunei Darussalam</option>
                                    <option value="bg" selected="">Bulgaria</option>
                                    <option value="bf">Burkina Faso</option>
                                    <option value="bi">Burundi</option>
                                    <option value="kh">Cambodia</option>
                                    <option value="cm">Cameroon</option>
                                    <option value="ca">Canada</option>
                                    <option value="cv">Cape Verde</option>
                                    <option value="ky">Cayman Islands</option>
                                    <option value="cf">Central African Republic</option>
                                    <option value="td">Chad</option>
                                    <option value="cl">Chile</option>
                                    <option value="cn">China</option>
                                    <option value="cx">Christmas Island</option>
                                    <option value="cc">Cocos (Keeling) Islands</option>
                                    <option value="co">Colombia</option>
                                    <option value="km">Comoros</option>
                                    <option value="cg">Congo</option>
                                    <option value="cd">Congo, The Democratic Republic Of The</option>
                                    <option value="ck">Cook Islands</option>
                                    <option value="cr">Costa Rica</option>
                                    <option value="ci">Cote D'Ivoire</option>
                                    <option value="hr">Croatia</option>
                                    <option value="cu">Cuba</option>
                                    <option value="cw">Curacao</option>
                                    <option value="cy">Cyprus</option>
                                    <option value="cz">Czech Republic</option>
                                    <option value="dk">Denmark</option>
                                    <option value="dj">Djibouti</option>
                                    <option value="dm">Dominica</option>
                                    <option value="do">Dominican Republic</option>
                                    <option value="ec">Ecuador</option>
                                    <option value="eg">Egypt</option>
                                    <option value="sv">El Salvador</option>
                                    <option value="gq">Equatorial Guinea</option>
                                    <option value="er">Eritrea</option>
                                    <option value="ee">Estonia</option>
                                    <option value="et">Ethiopia</option>
                                    <option value="fk">Falkland Islands (Malvinas)</option>
                                    <option value="fo">Faroe Islands</option>
                                    <option value="fj">Fiji</option>
                                    <option value="fi">Finland</option>
                                    <option value="fr">France</option>
                                    <option value="gf">French Guiana</option>
                                    <option value="pf">French Polynesia</option>
                                    <option value="ga">Gabon</option>
                                    <option value="gm">Gambia</option>
                                    <option value="ge">Georgia</option>
                                    <option value="de">Germany</option>
                                    <option value="gh">Ghana</option>
                                    <option value="gi">Gibraltar</option>
                                    <option value="gr">Greece</option>
                                    <option value="gl">Greenland</option>
                                    <option value="gd">Grenada</option>
                                    <option value="gp">Guadeloupe</option>
                                    <option value="gu">Guam</option>
                                    <option value="gt">Guatemala</option>
                                    <option value="gg">Guernsey</option>
                                    <option value="gn">Guinea</option>
                                    <option value="gw">Guinea-Bissau</option>
                                    <option value="gy">Guyana</option>
                                    <option value="ht">Haiti</option>
                                    <option value="hm">Heard Island And McDonald Islands</option>
                                    <option value="hn">Honduras</option>
                                    <option value="hk">Hong Kong SAR, China</option>
                                    <option value="hu">Hungary</option>
                                    <option value="is">Iceland</option>
                                    <option value="in">India</option>
                                    <option value="id">Indonesia</option>
                                    <option value="ir">Iran (Islamic Republic Of)</option>
                                    <option value="iq">Iraq</option>
                                    <option value="ie">Ireland</option>
                                    <option value="im">Isle Of Man</option>
                                    <option value="il">Israel</option>
                                    <option value="it">Italy</option>
                                    <option value="jm">Jamaica</option>
                                    <option value="jp">Japan</option>
                                    <option value="je">Jersey</option>
                                    <option value="jo">Jordan</option>
                                    <option value="kz">Kazakhstan</option>
                                    <option value="ke">Kenya</option>
                                    <option value="ki">Kiribati</option>
                                    <option value="kp">Korea, Democratic People's Republic</option>
                                    <option value="kr">Korea, Republic Of</option>
                                    <option value="kw">Kuwait</option>
                                    <option value="kg">Kyrgyzstan</option>
                                    <option value="la">Lao People's Democratic Republic</option>
                                    <option value="lv">Latvia</option>
                                    <option value="lb">Lebanon</option>
                                    <option value="ls">Lesotho</option>
                                    <option value="lr">Liberia</option>
                                    <option value="ly">Libya</option>
                                    <option value="li">Liechtenstein</option>
                                    <option value="lt">Lithuania</option>
                                    <option value="lu">Luxembourg</option>
                                    <option value="mo">Macao SAR, China</option>
                                    <option value="mk">Macedonia, Republic of</option>
                                    <option value="mg">Madagascar</option>
                                    <option value="mw">Malawi</option>
                                    <option value="my">Malaysia</option>
                                    <option value="mv">Maldives</option>
                                    <option value="ml">Mali</option>
                                    <option value="mt">Malta</option>
                                    <option value="mh">Marshall Islands</option>
                                    <option value="mq">Martinique</option>
                                    <option value="mr">Mauritania</option>
                                    <option value="mu">Mauritius</option>
                                    <option value="yt">Mayotte</option>
                                    <option value="mx">Mexico</option>
                                    <option value="fm">Micronesia, Federated States Of</option>
                                    <option value="md">Moldova, Republic Of</option>
                                    <option value="mc">Monaco</option>
                                    <option value="mn">Mongolia</option>
                                    <option value="me">Montenegro</option>
                                    <option value="ms">Montserrat</option>
                                    <option value="ma">Morocco</option>
                                    <option value="mz">Mozambique</option>
                                    <option value="mm">Myanmar</option>
                                    <option value="na">Namibia</option>
                                    <option value="nr">Nauru</option>
                                    <option value="np">Nepal</option>
                                    <option value="nl">Netherlands</option>
                                    <option value="nc">New Caledonia</option>
                                    <option value="nz">New Zealand</option>
                                    <option value="ni">Nicaragua</option>
                                    <option value="ne">Niger</option>
                                    <option value="ng">Nigeria</option>
                                    <option value="nu">Niue</option>
                                    <option value="nf">Norfolk Island</option>
                                    <option value="mp">Northern Mariana Islands</option>
                                    <option value="no">Norway</option>
                                    <option value="om">Oman</option>
                                    <option value="pk">Pakistan</option>
                                    <option value="pw">Palau</option>
                                    <option value="ps">Palestinian Territory, Occupied</option>
                                    <option value="pa">Panama</option>
                                    <option value="pg">Papua New Guinea</option>
                                    <option value="py">Paraguay</option>
                                    <option value="pe">Peru</option>
                                    <option value="ph">Philippines</option>
                                    <option value="pn">Pitcairn</option>
                                    <option value="pl">Poland</option>
                                    <option value="pt">Portugal</option>
                                    <option value="pr">Puerto Rico</option>
                                    <option value="qa">Qatar</option>
                                    <option value="re">Reunion</option>
                                    <option value="ro">Romania</option>
                                    <option value="ru">Russian Federation</option>
                                    <option value="rw">Rwanda</option>
                                    <option value="sh">Saint Helena</option>
                                    <option value="kn">Saint Kitts And Nevis</option>
                                    <option value="lc">Saint Lucia</option>
                                    <option value="mf">Saint Martin (French Part)</option>
                                    <option value="pm">Saint Pierre And Miquelon</option>
                                    <option value="vc">Saint Vincent And The Grenadines</option>
                                    <option value="ws">Samoa</option>
                                    <option value="sm">San Marino</option>
                                    <option value="st">Sao Tome And Principe</option>
                                    <option value="sa">Saudi Arabia</option>
                                    <option value="sn">Senegal</option>
                                    <option value="rs">Serbia</option>
                                    <option value="sc">Seychelles</option>
                                    <option value="sl">Sierra Leone</option>
                                    <option value="sg">Singapore</option>
                                    <option value="sx">Sint Maarten</option>
                                    <option value="sk">Slovakia</option>
                                    <option value="si">Slovenia</option>
                                    <option value="sb">Solomon Islands</option>
                                    <option value="so">Somalia</option>
                                    <option value="za">South Africa</option>
                                    <option value="gs">South Georgia And The South Sandwich Islands</option>
                                    <option value="ss">South Sudan</option>
                                    <option value="es">Spain</option>
                                    <option value="ic">Canary Islands (Spain)</option>
                                    <option value="lk">Sri Lanka</option>
                                    <option value="sd">Sudan</option>
                                    <option value="sr">Suriname</option>
                                    <option value="sj">Svalbard And Jan Mayen</option>
                                    <option value="sz">Swaziland</option>
                                    <option value="se">Sweden</option>
                                    <option value="ch">Switzerland</option>
                                    <option value="sy">Syrian Arab Republic</option>
                                    <option value="tw">Taiwan</option>
                                    <option value="tj">Tajikistan</option>
                                    <option value="tz">Tanzania, United Republic Of</option>
                                    <option value="tf">Territory of the French Southern and Antarctic Lands</option>
                                    <option value="th">Thailand</option>
                                    <option value="tl">Timor-Leste</option>
                                    <option value="tg">Togo</option>
                                    <option value="tk">Tokelau</option>
                                    <option value="to">Tonga</option>
                                    <option value="tt">Trinidad And Tobago</option>
                                    <option value="tn">Tunisia</option>
                                    <option value="tr">Turkey</option>
                                    <option value="tm">Turkmenistan</option>
                                    <option value="tc">Turks And Caicos Islands</option>
                                    <option value="tv">Tuvalu</option>
                                    <option value="ug">Uganda</option>
                                    <option value="ua">Ukraine</option>
                                    <option value="ae">United Arab Emirates</option>
                                    <option value="uk">United Kingdom</option>
                                    <option value="us">United States</option>
                                    <option value="um">United States Minor Outlying Islands</option>
                                    <option value="uy">Uruguay</option>
                                    <option value="uz">Uzbekistan</option>
                                    <option value="vu">Vanuatu</option>
                                    <option value="va">Vatican City State (Holy See)</option>
                                    <option value="ve">Venezuela</option>
                                    <option value="vn">Viet Nam</option>
                                    <option value="vg">Virgin Islands (British)</option>
                                    <option value="vi">Virgin Islands (U.S.)</option>
                                    <option value="wf">Wallis And Futuna</option>
                                    <option value="eh">Western Sahara</option>
                                    <option value="ye">Yemen</option>
                                    <option value="zm">Zambia</option>
                                    <option value="zw">Zimbabwe</option>
                                </optgroup>
                            </select>
                        </form>
                    </div>
                </div>
                <div className="footer--logo--container">
                    <nav className="footer--nav">
                        <ul className="footer--nav--ul">
                            <li><a href="">Contact Us</a></li>
                            <li><a href="">Press Resources</a></li>
                            <li><a href="">Legal Info</a></li>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Cookie Settings</a></li>
                            <li><a href="">Imprint</a></li>
                        </ul>
                    </nav>

                    <img src={LogoRegular} alt="Ableton's logo" className="footer--logo--container--img"/>
                    <p className="footer--logo--container--text">Made in Berlin</p>
                </div>
             </nav>
         </footer>
     )
}

export default Footer;