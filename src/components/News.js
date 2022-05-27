import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    articles = [
        {
          "source": { "id": null, "name": "India.com" },
          "author": "Zee Media Bureau",
          "title": "iPhone 14 Pro renders reveal new colour options, `i-shaped` notch: Deets here - Zee News",
          "description": "This year, Apple is expected to release the iPhone 14, iPhone 14 Pro, iPhone 14 Max, and iPhone 14 Pro Max. Ian Zelbo, a designer, has released additional high-resolution renders of the iPhone 14 Pro in a variety of hues, including purple, silver, graphite, a…",
          "url": "https://zeenews.india.com/technology/iphone-14-pro-renders-reveal-new-colour-options-i-shaped-notch-deets-here-2467848.html",
          "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2022/05/27/1047271-iphone-14-pro-2.jpg",
          "publishedAt": "2022-05-27T10:25:32Z",
          "content": "New Delhi: This year, Apple is expected to release the iPhone 14, iPhone 14 Pro, iPhone 14 Max, and iPhone 14 Pro Max. Ian Zelbo, a designer, has released additional high-resolution renders of the iP… [+1722 chars]"
        },
        {
          "source": { "id": null, "name": "The Tribune India" },
          "author": "The Tribune India",
          "title": "Dog-walking IAS couple transferred to far ends of country, Internet starts hilarious meme-fest asking 'where will the dog go' - The Tribune India",
          "description": "Hours after a massive outrage against the misuse of the Delhi government-run stadium by an IAS couple to walk their dog, the Ministry of Home Affairs on Thursday transferred Sanjeev Khirwar and wife Rinku Dugga to the far ends of the country, Ladakh and Aruna…",
          "url": "https://www.tribuneindia.com/news/trending/dog-walking-ias-couple-transferred-to-far-ends-of-country-internet-starts-hilarious-meme-fest-asking-where-will-the-dog-go-398650",
          "urlToImage": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/5/2022_5$largeimg_1763963220.jpg",
          "publishedAt": "2022-05-27T10:18:00Z",
          "content": "Tribune Web Desk\r\nChandigarh, May 27\r\nHours after a massive outrage against the misuse of the Delhi government-run stadium by an IAS couple to walk their dog, the Ministry of Home Affairs on Thursday… [+864 chars]"
        },
        {
          "source": { "id": null, "name": "YouTube" },
          "author": null,
          "title": "Monkeypox: Over 200 cases detected worldwide, WHO asks countries to increase surveillance | WION - WION",
          "description": "According to World Health Organization (WHO), over 200 confirmed cases of Monkeypox have been detected so far worldwide. WHO also urged countries to increase...",
          "url": "https://www.youtube.com/watch?v=iCR4lR39oOc",
          "urlToImage": "https://i.ytimg.com/vi/iCR4lR39oOc/maxresdefault.jpg",
          "publishedAt": "2022-05-27T09:36:50Z",
          "content": null
        },
        {
          "source": { "id": null, "name": "Cricketaddictor.com" },
          "author": "More by Vicky Singh",
          "title": "RR vs RCB Dream11 Prediction Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- Tata IPL 2022 - Cricket Addictor",
          "description": "RR vs RCB Dream11 Prediction Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update- Tata IPL 2022 Rajasthan Royals vs Royal Challengers Bangalore Dream11 Prediction 2022 Today Match",
          "url": "https://cricketaddictor.com/fantasy-cricket/rr-vs-rcb-dream11-prediction/",
          "urlToImage": "https://cricketaddictor.com/wp-content/uploads/2022/05/WhatsApp-Image-2022-05-26-at-3.39.00-PM.jpeg",
          "publishedAt": "2022-05-27T09:21:13Z",
          "content": "RR vs RCB Dream11 Prediction, Fantasy Cricket Tips, Dream11 Team, Playing XI, Pitch Report, Injury Update of Tata IPL 2022 Qualifier 2 match between Rajasthan Royals and Royal Challengers Bangalore.\r… [+3021 chars]"
        },
        {
          "source": { "id": null, "name": "Business Standard" },
          "author": "IANS",
          "title": "Sony prepares to increase PS5 production, plans games portfolio expansion - Business Standard",
          "description": "The brand has also projected that the sales of PS5 hit 18 million units in the financial year-end in March compared to 11.5 million units a year earlier",
          "url": "https://www.business-standard.com/article/technology/sony-prepares-to-increase-ps5-production-plans-games-portfolio-expansion-122052700571_1.html",
          "urlToImage": "https://bsmedia.business-standard.com/_media/bs/img/article/2021-02/05/full/1612496325-9555.JPG",
          "publishedAt": "2022-05-27T09:10:00Z",
          "content": "Japanese tech giant Sony is prepping on raising the production of its PlayStation 5 (PS5) gaming console along with expanding its games portfolio as well.\r\nThe announcement arrives as the issues with… [+2524 chars]"
        },
        {
          "source": { "id": null, "name": "The Indian Express" },
          "author": "Express News Service",
          "title": "‘Lack of sufficient evidence’: NCB drops charges against Aryan Khan, 5 others in drugs-on-cruise case - The Indian Express",
          "description": "Aryan Khan and 19 others were arrested by the NCB's Mumbai zonal unit on October 3, 2021 on charges that they were all “'intrinsically connected” to a conspiracy involving drugs.",
          "url": "https://indianexpress.com/article/cities/mumbai/aryan-khan-drugs-case-dropped-ncb-7939295/",
          "urlToImage": "https://images.indianexpress.com/2022/05/Aryan-1.jpeg",
          "publishedAt": "2022-05-27T08:42:45Z",
          "content": "A Special Investigation Team of the Narcotics Control Bureau (NCB) has dropped Aryan Khan, son of Bollywood actor Shah Rukh Khan, and five others from its chargesheet filed on Friday in connection wi… [+3471 chars]"
        },
        {
          "source": { "id": null, "name": "Down To Earth Magazine" },
          "author": null,
          "title": "What caused Mars to dry out? A new study provides clues - Down To Earth Magazine",
          "description": "Report debunks theory that loss of atmospheric carbon dioxide is responsible&nbsp;",
          "url": "https://www.downtoearth.org.in/news/science-technology/what-caused-mars-to-dry-out-a-new-study-provides-clues-83040",
          "urlToImage": "https://cdn.downtoearth.org.in/library/large/2022-05-27/0.60269900_1653636090_1-pia24546-mastcam-z_views_'santa_cruz'_on_mars-a.jpg",
          "publishedAt": "2022-05-27T08:17:10Z",
          "content": "Mars’ dramatic shift from a warm and wet planet to a cold and dry one may have been chiefly driven by greenhouse gases other than carbon dioxide (CO2), a new study suggested.\r\nMissions to the Red Pla… [+3141 chars]"
        },
        {
          "source": { "id": null, "name": "The Indian Express" },
          "author": "Express News Service",
          "title": "Miffed with Sena, Sambhajiraje drops plan to contest Rajya Sabha polls - The Indian Express",
          "description": "With Sambhajiraje backing out, BJP is now trying to push a third candidate in the fray",
          "url": "https://indianexpress.com/article/india/political-pulse/sambhajiraje-chhatrapati-drops-plan-to-contest-rajya-sabha-polls-maharashtra-7939288/",
          "urlToImage": "https://images.indianexpress.com/2022/05/PTI05_27_2022_000064B.jpg",
          "publishedAt": "2022-05-27T08:15:32Z",
          "content": "I had an offer from the Shiv Sena for the Rajya Sabha seat but they put a condition that I should first join their party. Now this offer was unacceptable to me. I did not want to join any partyI had … [+2253 chars]"
        },
        {
          "source": { "id": "the-times-of-india", "name": "The Times of India" },
          "author": "Arghanshu Bose",
          "title": "Minecraft’s next update is confirmed to release in June: Here’s what to expect - Times of India",
          "description": "This new update is expected to bring several new features and content to the game. Minecraft’s upcoming update has been under active development and t",
          "url": "https://timesofindia.indiatimes.com/gadgets-news/minecrafts-next-update-is-confirmed-to-release-in-june-heres-what-to-expect/articleshow/91830791.cms",
          "urlToImage": "https://static.toiimg.com/thumb/msid-91830901,width-1070,height-580,imgsize-49542,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          "publishedAt": "2022-05-27T08:01:00Z",
          "content": null
        },
        {
          "source": { "id": null, "name": "Hindustan Times" },
          "author": "HT News Desk",
          "title": "Farooq Abdullah summoned by ED, party attacks BJP: 'Price opposition pays…' - Hindustan Times",
          "description": "Farooq Abdullah has been summoned next week by the Enforcement Directorate over a money laundering case.  | Latest News India",
          "url": "https://www.hindustantimes.com/india-news/farooq-abdullah-summoned-by-ed-party-attacks-bjp-price-opposition-pays-101653636915974.html",
          "urlToImage": "https://images.hindustantimes.com/img/2022/05/27/1600x900/PTI05-27-2022-000052B-0_1653637028154_1653637052799.jpg",
          "publishedAt": "2022-05-27T07:41:16Z",
          "content": "Former Jammu and Kashmir chief minister Farooq Abdullah has been summoned by the Enforcement Directorate for questioning in a money laundering case next week. Soon after the May 31 summon was issued,… [+1686 chars]"
        },
        {
          "source": { "id": null, "name": "NDTV News" },
          "author": null,
          "title": "\"Shoot Him Or Something,\" Mother Yelled To Cops During Texas School Shooting - NDTV",
          "description": "Texas police faced angry questions Thursday over why it took an hour to neutralize the gunman who murdered 19 small children and two teachers in Uvalde, as video emerged of desperate parents begging officers to storm the school.",
          "url": "https://www.ndtv.com/world-news/shoot-him-or-something-mother-yelled-to-cops-during-texas-school-shooting-3013664",
          "urlToImage": "https://c.ndtvimg.com/2019-09/8ltk21og_texas-shooting-reuters_625x300_01_September_19.jpg",
          "publishedAt": "2022-05-27T06:57:00Z",
          "content": "US School Shooting: Parents were seen screaming expletives at police trying to keep them away from school\r\nUvalde: Texas police faced angry questions Thursday over why it took an hour to neutralize t… [+5155 chars]"
        },
        {
          "source": { "id": null, "name": "India Today" },
          "author": null,
          "title": "Natural immunity, Smallpox vaccine: Easy to control Monkeypox virus, says experts - India Today",
          "description": "As per the experts, the Monkeypox virus can be prevented either through natural immunity or vaccination against Smallpox.",
          "url": "https://www.indiatoday.in/science/story/natural-immunity-vaccine-smallpox-monkeypox-virus-experts-1954854-2022-05-27",
          "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202205/monkeypox_2-647x363.jpeg?Zd3dBW0ZGbRe.LB5lpIGQn_PcIc3EaPU",
          "publishedAt": "2022-05-27T06:32:34Z",
          "content": null
        },
        {
          "source": { "id": null, "name": "News18" },
          "author": "Buzz Staff",
          "title": "Incredible Image of 'Disturbed Spiral Galaxy' Captured by NASA's Hubble Telescope - News18",
          "description": "NASA's Hubble Telescope recently captured an image of one highly disturbed spiral galaxy with an unusual, warped shape.",
          "url": "https://www.news18.com/news/buzz/incredible-image-of-disturbed-spiral-galaxy-captured-by-nasas-hubble-telescope-5257459.html",
          "urlToImage": "https://images.news18.com/ibnlive/uploads/2022/05/hubble-165363268916x9.jpg",
          "publishedAt": "2022-05-27T06:31:08Z",
          "content": "NASAs Hubble Telescope recently captured an image of a galaxy and netizens just cannot get enough of it. Termed as NGC 3718, it is considered to be one highly disturbed spiral galaxy with an unusual,… [+2410 chars]"
        },
        {
          "source": { "id": null, "name": "Moneycontrol" },
          "author": "Moneycontrol News",
          "title": "Can children get monkeypox? What are the symptoms - Moneycontrol",
          "description": "Children can get monkeypox, with symptoms more severe than adolescents and adults, according to the World Health Organization.",
          "url": "https://www.moneycontrol.com/news/trends/current-affairs-trends/can-children-get-monkeypox-what-are-the-symptoms-8588491.html",
          "urlToImage": "https://images.moneycontrol.com/static-mcnews/2022/05/000_32AV3BD-1-770x433.jpg",
          "publishedAt": "2022-05-27T06:20:07Z",
          "content": "Viral infection monkeypox has spread to at least 12 countries though the number of worldwide cases is confined to 219 as of now.\r\nThe World Health Organization and national health agencies are closel… [+1579 chars]"
        },
        {
          "source": { "id": "the-times-of-india", "name": "The Times of India" },
          "author": "Shivani Bazaz",
          "title": "Terminated fund manager sends legal notice to Axis Mutual Fund - Economic Times",
          "description": "Viresh Joshi, fund manager and chief dealer at Axis Mutual Fund, has sent a legal notice to the fund house against his ‘unlawful termination.",
          "url": "https://economictimes.indiatimes.com/mf/mf-news/terminated-fund-manager-sends-legal-notice-to-axis-mutual-fund/articleshow/91828060.cms",
          "urlToImage": "https://img.etimg.com/thumb/msid-91828033,width-1070,height-580,imgsize-26572,overlay-etwealthmutualfunds/photo.jpg",
          "publishedAt": "2022-05-27T06:18:00Z",
          "content": "Viresh Joshi, ex-fund manager and chief dealer at Axis Mutual Fund, has sent a legal notice to the fund house against his unlawful termination. We are in communication with Axis Mutual Fund on behalf… [+969 chars]"
        },
        {
          "source": { "id": null, "name": "Livemint" },
          "author": "Asit Manohar",
          "title": "Ruchi Soya Q4 Results: Net Profit At ₹234 Crore, Maiden Dividend Announced | Mint - Mint",
          "description": "Ruchi Soya Q4 results: Company has reported Profit After Tax at  ₹234.43 crore in Q4 FY2021-22",
          "url": "https://www.livemint.com/market/stock-market-news/ruchi-soya-q4-results-net-profit-at-rs-234-crore-maiden-dividend-announced-11653631016645.html",
          "urlToImage": "https://images.livemint.com/img/2022/05/27/600x338/bsenew-kbwB--621x414@LiveMint_1653631033698.jpg",
          "publishedAt": "2022-05-27T06:04:22Z",
          "content": "Ruchi Soya Q4 results: Ruchi Soya Industries Limited has announced its fourth quarter results today. The FMCG company reported a net profit of 234.43 crore in 4th quarter of the financial year ended … [+1441 chars]"
        },
        {
          "source": { "id": null, "name": "India Today" },
          "author": null,
          "title": "Watch | Nearly two-km wide asteroid zooms past Earth, caught on camera - India Today",
          "description": "The asteroid was classified as potentially hazardous for its close flyby to Earth.",
          "url": "https://www.indiatoday.in/science/story/watch-nearly-two-km-wide-asteroid-zooms-past-earth-caught-on-camera-1954820-2022-05-27",
          "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202205/asteroid_7-647x363.jpeg?a3GBFtsCRZwFBp346Hd3rxth4g8NFfkH",
          "publishedAt": "2022-05-27T05:36:08Z",
          "content": null
        },
        {
          "source": { "id": "the-times-of-india", "name": "The Times of India" },
          "author": "TIMESOFINDIA.COM",
          "title": "High blood pressure: Early warning signs you should never miss - Times of India",
          "description": "High blood pressure of hypertension is responsible for the majority of premature deaths worldwide. As per the estimates of the World Health Organisation (WHO), 1.28 billion adults aged 30-79 years worldwide have hypertension and 46% of the adults are not awar…",
          "url": "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/high-blood-pressure-early-warning-signs-you-should-never-miss/photostory/91826575.cms",
          "urlToImage": "https://static.toiimg.com/photo/91826818.cms",
          "publishedAt": "2022-05-27T05:30:00Z",
          "content": "High blood pressure of hypertension is responsible for the majority of premature deaths worldwide. As per the estimates of the World Health Organisation (WHO), 1.28 billion adults aged 30-79 years wo… [+884 chars]"
        },
        {
          "source": { "id": null, "name": "Cricketaddictor.com" },
          "author": null,
          "title": "BAN vs SL: More Than Fitness, Bangladesh Need To Look At Mental Side Of The Game - Shakib Al Hasan - Cricket Addictor",
          "description": "BAN vs SL: More Than Fitness, Bangladesh Need To Look At Mental Side Of The Game - Shakib Al Hasan",
          "url": "https://cricketaddictor.com/cricket-news/ban-vs-sl-more-than-fitness-bangladesh-need-to-look-at-mental-side-of-the-game-shakib-al-hasan/",
          "urlToImage": "https://cricketaddictor.com/wp-content/uploads/2021/12/Mushfiqur-Rahim-and-Liton-Das.jpg",
          "publishedAt": "2022-05-27T05:25:42Z",
          "content": "Veteran all-rounder ShakibAlHasan is as yet confident of Bangladesh figuring out how to control themselves to more secure waters in the second Test against Sri Lanka. The hosts ended up in an unstabl… [+3332 chars]"
        },
        {
          "source": { "id": null, "name": "Hindustan Times" },
          "author": "Shishir Gupta",
          "title": "Empower inclusive Kabul to counter terror and enhance global security: NSA Doval - Hindustan Times",
          "description": "Doval highlighted India's decades-long focus on infrastructure, connectivity and humanitarian assistance in Afghanistan. | World News",
          "url": "https://www.hindustantimes.com/world-news/empower-kabul-to-counter-terror-and-enhance-global-security-nsa-doval-101653627952670.html",
          "urlToImage": "https://images.hindustantimes.com/img/2022/05/27/1600x900/nsa_meet_in_dushanbe_1653628261791_1653628262046.jpeg",
          "publishedAt": "2022-05-27T05:13:42Z",
          "content": "National security advisor Ajit Doval on Friday urged the participant countries at a dialogue with counterparts from seven other countries, including China, to enhance the capability of Afghanistan to… [+2240 chars]"
        }
      ]
    constructor(){
        super();
        console.log("Hellollll from news comp");
        this.state = {
            articles : this.articles,
            loading : false
        }
    }

  render() {
    return (
        <>
            <div className='container my-3'>
                <h2>NewsMonkey - Top Headlines</h2>
                <div className="row">
                    <div className="col-md-4">
                        <NewsItem title='MyTitle' description='MyDesc' urlToImage="https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/5/2022_5$largeimg_1763963220.jpg" newsUrl="TODO"/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title='MyTitle' description='MyDesc'/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title='MyTitle' description='MyDesc'/>
                    </div>
                    <div className="col-md-4">
                        <NewsItem title='MyTitle' description='MyDesc'/>
                    </div>
                </div>
            </div>
        </>
    )
  }
}

export default News