Create database pov;
use pov;

CREATE TABLE user (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    email_id VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE channel (
    channel_id INT AUTO_INCREMENT PRIMARY KEY,
    channel_name VARCHAR(255) UNIQUE NOT NULL,
    description TEXT NOT NULL,
    subscription_type ENUM('free', 'monthly', 'yearly') NOT NULL,
    channel_icon VARCHAR(500) NOT NULL
);

CREATE TABLE videos (
    video_id INT AUTO_INCREMENT PRIMARY KEY,
    channel_id INT NOT NULL,
    FOREIGN KEY (channel_id) REFERENCES channel(channel_id) on delete cascade,
    video_url VARCHAR(500) NOT NULL,
    video_thumbnail VARCHAR(500) NOT NULL,
    date_uploaded DATE NOT NULL,
    description TEXT NOT NULL,
    video_title VARCHAR(255) NOT NULL,
    genre VARCHAR(255) NOT NULL
);

CREATE TABLE feedback (
    feedback_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    feedback_text TEXT NOT NULL,
    feedback_date DATE NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(user_id) ON DELETE CASCADE
);

CREATE TABLE liked_videos (
    like_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(user_id) on delete cascade,
    video_id INT NOT NULL,
    FOREIGN KEY (video_id) REFERENCES videos(video_id) on delete cascade
);

CREATE TABLE comments (
    comment_id INT AUTO_INCREMENT PRIMARY KEY,
    video_id INT NOT NULL,
    comment_text TEXT NOT NULL,
    FOREIGN KEY (video_id) REFERENCES videos(video_id) on delete cascade,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(user_id) on delete cascade,
    comment_date DATE NOT NULL
);

CREATE TABLE watch_history (
    history_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(user_id) on delete cascade,
    video_id INT NOT NULL,
    FOREIGN KEY (video_id) REFERENCES videos(video_id) on delete cascade,
    genre VARCHAR(255) NOT NULL,
    views INT NOT NULL
);

INSERT INTO user (email_id, password) VALUES 
('heena.matlani@example.com', 'fRi3nds!456'),
('aarushi.singh@example.com', 'Guitarist#789'),
('amritjot.kaur@example.com', 'Basketb@ll11'),
('john.doe@example.com', 'P@ssw0rd1'),
('emma.smith@example.com', 'SecurePwd!23'),
('michael.jackson@example.com', 'Thri11er!'),
('sarah.adams@example.com', 'Sunshine&22'),
('david.wilson@example.com', 'StrongP@55word'),
('laura.jones@example.com', 'Secret123$'),
('adam.thompson@example.com', '1qaz@WSX');

INSERT INTO channel (channel_name, description, subscription_type, channel_icon) 
VALUES 
('Aaj Tak', 'Aaj Tak is India''s leading Hindi News Channel. Aaj Tak News channel covers latest news in Politics, Entertainment, Bollywood, business and sports.', 'monthly', 'https://heena0708.s3.ap-south-1.amazonaws.com/icons/AajTak.jpeg'),
('ABC News', 'ABC News is the news division of the American Broadcasting Company, owned by the Disney Media Networks division of The Walt Disney Company.', 'yearly', 'https://heena0708.s3.ap-south-1.amazonaws.com/icons/ABCNews.jpeg'),
('ABP News', 'ABP News is an Indian news channel owned by ABP Group. It is known for its unbiased and comprehensive news coverage.', 'free', 'https://heena0708.s3.ap-south-1.amazonaws.com/icons/ABPNews.jpeg'),
('BBC News', 'BBC News is a British free-to-air television news channel. It covers breaking news, current affairs, and analysis.', 'monthly', 'https://heena0708.s3.ap-south-1.amazonaws.com/icons/BBCNews.jpeg'),
('CNN', 'CNN is the world leader in news and information. It delivers news from almost 4,000 journalists in every corner of the globe.', 'yearly', 'https://heena0708.s3.ap-south-1.amazonaws.com/icons/CNN.jpeg'),
('E! News', 'E! News is an American basic cable and satellite television news channel owned by the NBCUniversal Cable Entertainment Group division of NBCUniversal.', 'monthly', 'https://heena0708.s3.ap-south-1.amazonaws.com/icons/E!News.jpeg'),
('Fox News', 'Fox News is an American conservative cable television news channel. It covers breaking news and political opinions.', 'free', 'https://heena0708.s3.ap-south-1.amazonaws.com/icons/FoxNews.jpeg'),
('NDTV', 'NDTV is an Indian television media company founded by Radhika Roy and Prannoy Roy. It covers news, entertainment, and politics.', 'yearly', 'https://heena0708.s3.ap-south-1.amazonaws.com/icons/NDTV.jpeg'),
('News18 India', 'News18 India is an Indian Hindi-language news channel owned by Network 18. It covers latest news, current affairs, and politics.', 'monthly', 'https://heena0708.s3.ap-south-1.amazonaws.com/icons/News18India.jpeg'),
('Zee News', 'Zee News is an Indian news and current affairs channel founded in 1999. It provides news updates from India and around the world.', 'free', 'https://heena0708.s3.ap-south-1.amazonaws.com/icons/ZeeNews.jpeg');

INSERT INTO feedback (user_id, feedback_text, feedback_date) VALUES 
(1, 'Great platform, love the variety of news channels!', '2023-12-01'),
(2, 'Excellent user interface, very easy to navigate.', '2023-12-02'),
(3, 'I appreciate the unbiased news coverage.', '2023-12-03'),
(4, 'Need more international news coverage.', '2023-12-04'),
(5, 'Videos load quickly and streaming quality is good.', '2023-12-05'),
(6, 'The recommendation system needs improvement.', '2023-12-06'),
(7, 'Would like to see more options for customization.', '2023-12-07'),
(8, 'Feedback section is a great way to communicate with developers.', '2023-12-08'),
(9, 'Really enjoying the subscription service.', '2023-12-09'),
(10, 'Please add a dark mode option.', '2023-12-10'),
(1, 'I encountered a bug while using the search feature.', '2023-12-11'),
(2, 'The video player sometimes freezes during playback.', '2023-12-12'),
(3, 'The channel icons could be more visually appealing.', '2023-12-13'),
(4, 'App crashes occasionally on my device.', '2023-12-14'),
(5, 'The explore section is a bit cluttered.', '2023-12-15'),
(6, 'I would like to be able to organize my liked videos.', '2023-12-16'),
(7, 'Videos take too long to buffer sometimes.', '2023-12-17'),
(8, 'The subscription plans are too expensive.', '2023-12-18'),
(9, 'Please add support for subtitles in videos.', '2023-12-19'),
(10, 'Love the selection of sports news channels.', '2023-12-20');

INSERT INTO videos (channel_id, video_url, video_thumbnail, date_uploaded, description, video_title, genre) 
VALUES 
(5, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/1.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/1.jpg', '2023-01-15', 'Trump labels Facebook the "enemy of the people" in interview', 'Trump labels Facebook', 'International'),
(5, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/2.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/2.jpg', '2023-01-14', 'A man deliberately got 217 Covid shots. Here’s what happened', 'Man deliberately got 217 Covid shots', 'Health'),
(5, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/3.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/3.jpg', '2023-01-13', 'Video shows what Ukraine claims is drone strike that sunk Russian patrol ship', 'Ukraine claims drone strike', 'International'),
(5, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/4.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/4.jpg', '2023-01-12', 'Putin warns of "destruction of civilization". Hear retired general\'s response', 'Putin warns of destruction of civilization', 'International'),
(5, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/5.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/5.jpg', '2023-01-11', '104 civilians killed trying to access food aid trucks in Gaza, Palestinian health ministry says', '104 civilians killed in Gaza', 'International'),
(5, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/6.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/6.jpg', '2023-01-10', 'Special counsel proposes July 8 trial date in Trump documents case', 'Special counsel proposes trial date', 'International'),
(5, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/7.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/7.jpg', '2023-01-09', 'Trump and Musk meet amid fundraising concerns', 'Trump and Musk meet', 'International'),
(5, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/8.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/8.jpg', '2023-01-08', 'Why Monica Lewinsky is the new face of a major fashion brand', 'Monica Lewinsky in fashion brand', 'Entertainment'),
(5, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/9.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/9.jpg', '2023-01-07', 'Affirm CEO: This is the most financially responsible generation', 'Affirm CEO on financially responsible generation', 'Technology'),
(5, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/10.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/10.jpg', '2023-01-06', 'Trump appeals $464 million civil fraud judgment in New York', 'Trump appeals civil fraud judgment', 'International');

INSERT INTO videos (channel_id, video_url, video_thumbnail, date_uploaded, description, video_title, genre) 
VALUES 
(2, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/11.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/11.jpg', '2023-01-15', '3rd SpaceX launch is most successful yet', '3rd SpaceX launch', 'Technology'),
(2, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/12.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/12.jpg', '2023-01-14', 'TikTok ban: What’s next for the bill?', 'TikTok ban', 'Technology'),
(2, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/13.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/13.jpg', '2023-01-13', 'Ways for women to improve their sleep health', 'Ways for women to improve sleep health', 'Health'),
(2, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/14.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/14.jpg', '2023-01-12', 'Airbnb bans indoor cameras', 'Airbnb bans indoor cameras', 'Technology'),
(2, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/15.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/15.jpg', '2023-01-11', 'Princess Kate admits to editing recalled photo', 'Princess Kate editing recalled photo', 'Entertainment'),
(2, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/16.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/16.jpg', '2023-01-10', 'Oscars 2024: Cillian Murphy accepts Academy Award for Best Actor in \'Oppenheimer\'', 'Cillian Murphy at Oscars', 'Entertainment'),
(2, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/17.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/17.jpg', '2023-01-09', 'Oscars 2024: Robert Downey Jr. wins his first Academy Award for supporting actor in \'Oppenheimer\'', 'Robert Downey Jr. wins Oscars', 'Entertainment'),
(2, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/18.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/18.jpg', '2023-01-08', 'Billie Eilish talks nominated song from Barbie, \'What Was I Made For?\'', 'Billie Eilish talks Barbie song', 'Entertainment'),
(2, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/19.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/19.jpg', '2023-01-07', 'By the Numbers: Lionel Messi\'s World Cup win', 'Lionel Messi\'s World Cup win', 'Sports'),
(2, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/20.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/20.jpg', '2023-01-06', 'Inside Saudi Arabia’s ambition to take over global sports', 'Saudi Arabia’s global sports ambition', 'Sports');

INSERT INTO videos (channel_id, video_url, video_thumbnail, date_uploaded, description, video_title, genre) VALUES 
(1, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/21.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/21.jpg', '2024-01-16', 'Exclusive interview with Amit Shah discussing electoral bonds.', 'Amit Shah EXCLUSIVE: Electoral Bond पर अमित शाह ने कही बड़ी बात!', 'National'),
(1, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/22.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/22.jpg', '2024-01-16', 'Discussion on share market shares amounting to ₹1448 Crore.', 'Kochi: ₹1448 Crore के Share अटके', 'Business'),
(1, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/23.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/23.jpg', '2024-01-16', 'Updates on share market news.', 'Stock Market News Updates: 400 अंकों की बढ़त से खुला Share Bazar', 'Business'),
(1, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/24.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/24.jpg', '2024-01-16', 'Discussion on India becoming the 5th largest market in the global stock market.', 'Black And White: Global Stock Market में भारत बना 5वां सबसे बड़ा बाजार', 'Business'),
(1, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/25.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/25.jpg', '2024-01-16', 'Discussion on sudden market downturn in the Indian share market.', 'Indian Share Market News आज अचानक क्यों आई बाजार में गिरावट..समझें', 'Business'),
(1, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/26.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/26.jpg', '2024-01-16', 'Discussion on Prime Minister Modi\'s tweet after the announcement of elections.', 'Dangal: चुनाव के एलान के बाद पीएम मोदी का ट्वीट', 'National'),
(1, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/27.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/27.jpg', '2024-01-16', 'Beginning of famous singer Anuradha Paudwal\'s political innings, joins BJP.', '2024 Elections: मशहूर सिंगर अनुराधा पौडवाल की सियासी पारी का आगाज, BJP में हुईं शामिल', 'National'),
(1, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/28.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/28.jpg', '2024-01-16', 'CM Kejriwal leaves home to appear in court in liquor scam case.', 'शराब घोटाले के मामले में कोर्ट में पेश होने के लिए घर से निकले CM Kejriwal', 'National'),
(1, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/29.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/29.jpg', '2024-01-16', 'NDA and India Alliance trapped in seat sharing in Maharashtra before election dates announced.', 'Election Dates के ऐलान से पहले Maharashtra में NDA और INDIA Alliance की सीट शेयरिंग में फंसा पेंच!', 'National'),
(1, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/30.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/30.jpg', '2024-01-16', 'How prepared is Congress for the Lok Sabha elections?', 'Loksabha Election 2024: लोकसभा चुनाव को लेकर कितनी है तैयार Congress?', 'National');

INSERT INTO videos (channel_id, video_url, video_thumbnail, date_uploaded, description, video_title, genre) VALUES 
(4, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/31.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/31.jpg', '2023-11-25', 'Discussion on the impact of AI and deepfakes on politics.', 'How AI and deepfakes are changing politics', 'Technology'),
(4, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/32.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/32.jpg', '2023-10-19', 'Analysis on the effects of an increase in "economically inactive" people on the economy.', 'What does an increase in ’economically inactive’ people do to the economy?', 'Business'),
(4, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/33.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/33.jpg', '2023-09-14', 'Coverage on the conviction of the father of a US school gunman for manslaughter.', 'Father of US school gunman convicted of manslaughter', 'International'),
(4, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/34.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/34.jpg', '2023-08-30', 'Reports on the tragic incident where at least 60 migrants died of hunger and dehydration on a Mediterranean boat.', 'At least 60 die of hunger and dehydration on Mediterranean migrant boat', 'International'),
(4, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/35.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/35.jpg', '2023-07-22', 'China\'s response to the potential US ban on TikTok.', 'China says potential US ban on TikTok is ‘act of bullying’', 'Technology'),
(4, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/36.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/36.jpg', '2023-06-17', 'Update on SpaceX reporting loss of communication with Starship.', 'SpaceX reports loss of communication with Starship', 'Technology'),
(4, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/37.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/37.jpg', '2023-05-12', 'Coverage on Sweden and Finland joining Nato military exercises.', 'Sweden and Finland join Nato military exercises', 'International'),
(4, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/38.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/38.jpg', '2023-04-07', 'Premier League football clubs dominating the richest clubs in the world list.', 'Premier League football clubs dominate richest in the world', 'Sports'),
(4, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/39.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/39.jpg', '2023-03-01', 'Research findings suggesting that over a billion people worldwide are obese.', 'More than a billion people obese worldwide, research suggests', 'Health'),
(4, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/40.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/40.jpg', '2023-02-15', 'Study on the potential of a blood test for detecting more than 50 types of cancers.', 'Blood test for more than 50 cancers \'shows promise\' in study', 'Health');

INSERT INTO videos (channel_id, video_url, video_thumbnail, date_uploaded, description, video_title, genre) VALUES 
(3, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/41.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/41.jpg', '2023-11-29', 'Updates on the election dates and voting process in Bihar for the 2024 elections.', 'Elections 2024: बस दो मिनट में जानिए Bihar में कब और कितनी सीटों पर मतदान होगा', 'National'),
(3, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/42.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/42.jpg', '2023-10-24', 'Discussion on when the opposition alliance in Maharashtra will announce the distribution of seats.', 'Election Date Announce: महाराष्ट्र में विपक्षी गठबंधन कब करेगा सीटों का एलान ?', 'National'),
(3, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/43.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/43.jpg', '2023-09-15', 'Details on the announcement of the Lok Sabha election dates for 2024 and the estimated number of voters.', 'Lok Sabha Election Date 2024 Announce : चुनाव में 21 करोड़ मतदाता पहली बार देंगे वोट', 'National'),
(3, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/44.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/44.jpg', '2023-08-05', 'Information on the second phase of Lok Sabha elections on April 26 and the states where polling will take place.', 'Lok Sabha Elections Phase 2: 26 अप्रैल को दूसरा चरण, किन-किन राज्यों में मतदान ?', 'National'),
(3, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/45.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/45.jpg', '2023-07-11', 'Coverage on Chandrashekhar Azad Ravan\'s statements during the 2024 Lok Sabha elections.', 'Lok Sabha Elections 2024: \'पत्थर का सीना चीर कर भी उगते हैं\': Chandrashekhar Azad Ravan', 'National'),
(3, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/46.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/46.jpg', '2023-05-29', 'Rahul Gandhi\'s comments on the electoral bond issue and the future of the BJP government.', 'Rahul Gandhi on Electoral Bond: \'किसी ना किसी दिन भाजपा की सरकार बदलेगी और फिर..\'', 'National'),
(3, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/47.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/47.jpg', '2023-04-16', 'Comments by Kapil Dev on Virat Kohli\'s century in the India vs. New Zealand match.', 'India VS NZ Match: विराट कोहली के शतक पारी पर क्या बोले कपिल देव?', 'Sports'),
(3, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/48.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/48.jpg', '2023-03-02', 'Analysis on the key reasons behind the consecutive victories of the Indian cricket team.', 'India VS NZ Match: इंडियन टीम के लगातार मैच जीतने के पीछे ये है बड़ी वजह !', 'Sports'),
(3, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/49.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/49.jpg', '2023-02-12', 'Compilation of sports news highlights of the day in a 100-second segment.', 'Watch Sports News Of The Day In 100 Seconds | ABP News', 'Sports'),
(3, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/50.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/50.jpg', '2023-01-21', 'Updates on the rising number of coronavirus cases in India.', 'Coronavirus Cases India : देश में तेजी से बढ़ रहे हैं कोरोना के मरीज', 'Health');

INSERT INTO videos (channel_id, video_url, video_thumbnail, date_uploaded, description, video_title, genre) VALUES 
(10, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/51.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/51.jpg', '2023-12-18', 'Discussion on the significant drop in the Indian stock market due to the Russia-Ukraine conflict.', 'Russia-Ukraine Conflict: भारतीय शेयर बाजार में बड़ी गिरावट | Sensex | Nifty | Share Market', 'Business'),
(10, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/52.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/52.jpg', '2023-11-27', 'Updates on the massive downturn in the stock market that wiped out 14 trillion rupees.', 'Share Market Crash Update : वो बयान जिसने डूबो दिए 14 लाख करोड़ | SEBI Chief', 'Business'),
(10, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/53.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/53.jpg', '2023-10-29', 'Coverage on the sudden and severe downturn in the stock market.', 'शेयर बाजार में अचानक भयंकर गिरावट | Breaking News | Stock Market Crash', 'Business'),
(10, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/54.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/54.jpg', '2023-09-22', 'Analysis of the impact of electoral bonds on the stock market.', 'Electoral Bonds and Its Impact on Stock Market | इलेक्टोरल बॉन्ड खबर का बाजार पर असर', 'Business'),
(10, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/55.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/55.jpg', '2023-08-12', 'Discussion on Virat Kohli being ruled out of the T20 World Cup 2024.', 'Virat Kohli Out from T20 World Cup 2024: वर्ल्ड कप से क्या कोहली होंगे बाहर? | BREAKING NEWS', 'Sports'),
(10, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/56.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/56.jpg', '2023-07-04', 'Updates on the blind cricket match between India and Sri Lanka.', 'Blind Cricket Match Breaking: आज भारत श्रीलंका में खेला जा रहा है चौथा मैच। India vs Sri Lanka', 'Sports'),
(10, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/57.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/57.jpg', '2023-05-20', 'Explanation of Dolby Vision and Dolby Atmos technologies.', 'Out Of The Box: जानें, क्या होता है Dolby Vision और Dolby Atmos ?', 'Technology'),
(10, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/58.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/58.jpg', '2023-04-01', 'Introduction to blockchain technology and its applications.', 'ब्लॉकचैन टेक्नोलॉजी क्या है? What is Blockchain Technology?', 'Technology'),
(10, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/59.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/59.jpg', '2023-03-14', 'Importance of maintaining heart health on World Heart Day.', 'दिल को सेहतमंद रखना बेहत जरूरी | World Heart Day | Zee News', 'Health'),
(10, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/60.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/60.jpg', '2023-02-05', 'Discussion on the impact of high blood pressure on Indian youth.', 'DNA: Blood pressure weakening Indian youth, stress and disturbed lifestyle worsen health', 'Health');

INSERT INTO videos (channel_id, video_url, video_thumbnail, date_uploaded, description, video_title, genre) VALUES 
(6, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/61.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/61.jpg', '2023-12-11', 'Coverage of Gigi Hadid and Bradley Cooper''s public display of affection.', 'Gigi Hadid & Bradley Cooper KISS in New PDA Photo', 'Entertainment'),
(6, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/62.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/62.jpg', '2023-11-05', 'Kate Middleton photographer denies altering a photo of her.', 'Kate Middleton Photographer DENIES Editing Car Photo', 'Entertainment'),
(6, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/63.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/63.jpg', '2023-10-18', 'Insight into how Khloé Kardashian is celebrating her ex Tristan Thompson''s birthday.', 'How Khloé Kardashian Is Celebrating Ex Tristan Thompson’s Birthday', 'Entertainment'),
(6, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/64.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/64.jpg', '2023-09-29', 'Travis Kelce shares details from his recent trip to Singapore with Taylor Swift.', 'Travis Kelce Shares Details From His Trip to Singapore With Taylor Swift', 'Entertainment'),
(6, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/65.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/65.jpg', '2023-08-12', 'Emily Blunt reveals the origin of her feud with Ryan Gosling.', 'Emily Blunt REVEALS Origin of Barbenheimer Feud with Ryan Gosling | EXCLUSIVE', 'Entertainment'),
(6, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/66.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/66.jpg', '2023-07-20', 'Ryan Gosling reacts to his memorable performance at the 2024 Academy Awards.', 'Ryan Gosling REACTS to His Epic ‘I’m Just Ken’ Performance at 2024 Academy Awards | EXCLUSIVE', 'Entertainment'),
(6, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/67.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/67.jpg', '2023-06-01', 'Analyzing whether Anne Hathaway’s new movie is about Harry Styles.', 'Is Anne Hathaway’s New Movie ‘The Idea Of You’ About Harry Styles? Breaking Down The Trailer!', 'Entertainment'),
(6, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/68.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/68.jpg', '2023-05-14', 'Hailey Bieber addresses rumors about her personal life.', 'Hailey Bieber SHUTS DOWN Rumors "Made Out of Thin Air"', 'Entertainment'),
(6, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/69.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/69.jpg', '2023-04-06', 'Billie Eilish discusses breaking up with her boyfriend.', 'Billie Eilish DUMPED Boyfriend After Dreaming About This Celebrity', 'Entertainment'),
(6, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/70.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/70.jpg', '2023-02-19', 'Story of how Millie Bobby Brown almost lost her ring during an underwater proposal.', 'How Millie Bobby Brown Almost LOST Her Ring During Underwater Proposal', 'Entertainment');

INSERT INTO videos (channel_id, video_url, video_thumbnail, date_uploaded, description, video_title, genre) VALUES 
(7, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/71.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/71.jpg', '2023-12-28', 'Coverage of Kamala Harris mocked for her participation in a Fat Joe weed rountable.', 'Harris mocked for Fat Joe weed rountable: Sad reality', 'International'),
(7, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/72.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/72.jpg', '2023-11-15', 'Trump attorney\'s reaction to the decision on Fani Willis, questioning the timeline of the relationship.', 'Trump attorney reacts to decision on Fani Willis, hitting at timeline of relationship', 'International'),
(7, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/73.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/73.jpg', '2023-10-21', '\'Shark Tank\' star\'s consideration of purchasing TikTok.', '\'Shark Tank\' star doubles down on TikTok purchase consideration', 'Business'),
(7, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/74.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/74.jpg', '2023-09-09', 'Dana Perino discusses when was the last time Washington worked 40 hours.', 'When was the last time Washington worked 40 hours?: Dana Perino', 'International'),
(7, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/75.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/75.jpg', '2023-08-15', 'Lara Trump\'s analysis on why the Democrats are panicking.', 'Lara Trump: This is why the Democrats are panicking', 'International'),
(7, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/76.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/76.jpg', '2023-07-28', 'Celebration of Trump’s win in Colorado.', 'Trump’s Colorado win is extra sweet', 'International'),
(7, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/77.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/77.jpg', '2023-06-10', 'Trump\'s victory in Texas and Massachusetts primary elections.', 'Trump wins Texas and Massachusetts primary elections', 'International'),
(7, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/78.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/78.jpg', '2023-05-21', 'Elon Musk\'s chilling warning about the future.', 'Elon Musk issues CHILLING warning: Just a matter of time', 'Technology'),
(7, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/79.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/79.jpg', '2023-04-07', 'Denver health system overwhelmed by migrant influx.', 'EXTREMELY DIFFICULT: Migrant influx overwhelms Denver health system', 'Health'),
(7, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/80.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/80.jpg', '2023-02-18', 'NFL legend Joe Theismann reveals his Super Bowl LVIII pick.', 'NFL legend Joe Theismann reveals his Super Bowl LVIII pick', 'Sports');

INSERT INTO videos (channel_id, video_url, video_thumbnail, date_uploaded, description, video_title, genre) VALUES 
(8, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/81.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/81.jpg', '2023-12-28', 'Report on the boiler blast in a factory in Rewari, Haryana, injuring nearly 40 employees.', 'Boiler Blast in Factory: Haryana के Rewari में Company के अंदर बॉयलर फटा, करीब 40 कर्मचारी घायल', 'National'),
(8, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/82.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/82.jpg', '2023-11-15', 'Technical Guruji answers tech-related questions in Gadgets 360.', 'Gadgets 360 With Technical Guruji: Tech से जुड़े सवाल ? Technical Guruji देंगे जवाब', 'Technology'),
(8, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/83.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/83.jpg', '2023-10-21', 'Updates on the Delhi liquor scam case involving Arvind Kejriwal.', 'Delhi Liquor Scam Breaking : Court में पेश हुए Arvind Kejriwal, अदालत से मिली ज़मानत | Delhi | AAP', 'National'),
(8, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/84.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/84.jpg', '2023-09-09', 'STF arrests two individuals, including Rajeev, in connection with the UP paper leak case.', 'UP Paper Leak Case: STF ने आज पेपर लीक मामले में Rajeev समेत दो लोगों को किया गिरफ़्तार', 'National'),
(8, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/85.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/85.jpg', '2023-08-15', 'Discussion on the implementation timeline of "One Nation, One Election".', 'One Nation, One Election: कब से लागू होगा \'एक देश, एक चुनाव\' का नियम?', 'National'),
(8, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/86.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/86.jpg', '2023-07-28', 'Recent developments in the Israel-Palestine conflict resulting in over 1500 casualties.', 'Israel-Palestine Conflict: दोनों तरफ से हमले जारी, अब तक 1500 से ज्यादा की मौत | Khabron Ki Khabar', 'International'),
(8, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/87.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/87.jpg', '2023-06-10', 'Celebrating James Anderson\'s milestone of taking 700 wickets in test cricket.', 'James Anderson 700 Wickets:जेम्स एंडरसन ने रचा इतिहास, टेस्ट इतिहास में बड़ा कारनामा', 'Sports'),
(8, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/88.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/88.jpg', '2023-05-21', 'Analysis of India\'s victory over Pakistan in a cricket match.', 'Ind vs Pak: From 155/2 To 191 All Out, India Rout Hapless Pakistan', 'Sports'),
(8, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/89.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/89.jpg', '2023-04-07', 'Dietician\'s advice on maintaining a healthy lifestyle.', 'Follow The Rule Of \'Five\' For A Healthy And Fit Life: Dietician', 'Health'),
(8, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/90.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/90.jpg', '2023-02-18', 'Prime Minister Modi lays the foundation for a semiconductor facility in Assam.', 'PM Modi In Assam | PM Modi Lays Foundation For Rs 27,000 Crore Semiconductor Facility In Assam', 'Business');

INSERT INTO videos (channel_id, video_url, video_thumbnail, date_uploaded, description, video_title, genre) VALUES 
(9, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/91.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/91.jpg', '2023-12-23', 'Shivraj Singh Chouhan''s statement following the announcement of Lok Sabha election dates.', 'Lok Sabha Elecions Dates Annonce होते ही Shivraj Singh Chouhan का बड़ा दावा | MP News | N18V', 'National'),
(9, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/92.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/92.jpg', '2023-11-20', 'Benefits of lemon leaves and their health advantages.', 'Benefits Of Lemon Leaves: नींबू के पत्ते सूंघते ही पथरी होगी खत्म! जानें इसके 5 फायदे', 'Health'),
(9, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/93.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/93.jpg', '2023-10-16', 'Easy remedies for finding desired jobs.', 'Naukri Pane Ke Upay: मनचाही नौकरी पाने के लिए आज ही आजमा लीजिए ये आसान उपाय | Lord Shiva', 'Business'),
(9, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/94.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/94.jpg', '2023-09-11', 'Update on services being discontinued by Paytm Payment Bank.', 'Paytm Payment Bank Update: Paytm से जुड़ी कुछ सेवाएं हो रही हैं बंद, जानिए कौन सी सर्विस रहेगी चालू!', 'Technology'),
(9, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/95.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/95.jpg', '2023-08-17', 'Update on the fares of Vande Bharat trains with low occupancy.', 'Vande Bharat Fares: कम व्यस्तता वाली वंदे भारत ट्रेनों के किराए में आया Update', 'National'),
(9, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/96.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/96.jpg', '2023-07-14', 'PM Modi''s interaction with a girl during a public rally in Telangana.', 'Telangana में एक Public Rally के दौरान PM Modi को Welcome कर रही थी बच्ची फिर PM ने ये किया', 'National'),
(9, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/97.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/97.jpg', '2023-06-02', 'Announcement by the Election Commission regarding assembly elections in Jammu and Kashmir.', 'Election Commission ने बताया Jammu Kashmir में कब होंगे Assembly Election | N18V | Dates Announced', 'National'),
(9, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/98.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/98.jpg', '2023-04-29', 'Government''s response to the emergence of a new variant of coronavirus in India.', 'Breaking News: Corona के नए वेरिएंट से हाहाकर, भारत सरकार आज करेगी बड़ी बैठक', 'Health'),
(9, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/99.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/99.jpg', '2023-03-17', 'Impact of the JN.1 variant of Covid-19 in India.', 'Coronavirus Cases | Covid के JN.1 वेरिएंट ने मचाया भारत में कोहराम, Delhi में आया पहला केस', 'Health'),
(9, 'https://heena0708.s3.ap-south-1.amazonaws.com/videos/100.mp4', 'https://heena0708.s3.ap-south-1.amazonaws.com/thumbnails/100.jpg', '2023-01-31', 'PCB''s reaction to India''s cricket team not participating in the Asia Cup.', 'India Cricket Team नहीं जाएगी Pakistan Asia Cup खेलने तो बौखलाया PCB | Cricket | BCCI | News18', 'Sports');

INSERT INTO liked_videos (user_id, video_id) VALUES (1, 28);
INSERT INTO liked_videos (user_id, video_id) VALUES (1, 65);
INSERT INTO liked_videos (user_id, video_id) VALUES (1, 53);
INSERT INTO liked_videos (user_id, video_id) VALUES (1, 80);
INSERT INTO liked_videos (user_id, video_id) VALUES (1, 90);
INSERT INTO liked_videos (user_id, video_id) VALUES (1, 9);
INSERT INTO liked_videos (user_id, video_id) VALUES (1, 8);
INSERT INTO liked_videos (user_id, video_id) VALUES (1, 45);
INSERT INTO liked_videos (user_id, video_id) VALUES (1, 88);
INSERT INTO liked_videos (user_id, video_id) VALUES (1, 68);
INSERT INTO liked_videos (user_id, video_id) VALUES (2, 66);
INSERT INTO liked_videos (user_id, video_id) VALUES (2, 62);
INSERT INTO liked_videos (user_id, video_id) VALUES (2, 95);
INSERT INTO liked_videos (user_id, video_id) VALUES (2, 68);
INSERT INTO liked_videos (user_id, video_id) VALUES (2, 27);
INSERT INTO liked_videos (user_id, video_id) VALUES (2, 58);
INSERT INTO liked_videos (user_id, video_id) VALUES (2, 59);
INSERT INTO liked_videos (user_id, video_id) VALUES (2, 42);
INSERT INTO liked_videos (user_id, video_id) VALUES (2, 51);
INSERT INTO liked_videos (user_id, video_id) VALUES (2, 10);
INSERT INTO liked_videos (user_id, video_id) VALUES (3, 8);
INSERT INTO liked_videos (user_id, video_id) VALUES (3, 15);
INSERT INTO liked_videos (user_id, video_id) VALUES (3, 47);
INSERT INTO liked_videos (user_id, video_id) VALUES (3, 34);
INSERT INTO liked_videos (user_id, video_id) VALUES (3, 39);
INSERT INTO liked_videos (user_id, video_id) VALUES (3, 26);
INSERT INTO liked_videos (user_id, video_id) VALUES (3, 23);
INSERT INTO liked_videos (user_id, video_id) VALUES (3, 90);
INSERT INTO liked_videos (user_id, video_id) VALUES (3, 3);
INSERT INTO liked_videos (user_id, video_id) VALUES (3, 37);
INSERT INTO liked_videos (user_id, video_id) VALUES (4, 83);
INSERT INTO liked_videos (user_id, video_id) VALUES (4, 88);
INSERT INTO liked_videos (user_id, video_id) VALUES (4, 98);
INSERT INTO liked_videos (user_id, video_id) VALUES (4, 48);
INSERT INTO liked_videos (user_id, video_id) VALUES (4, 26);
INSERT INTO liked_videos (user_id, video_id) VALUES (4, 99);
INSERT INTO liked_videos (user_id, video_id) VALUES (4, 61);
INSERT INTO liked_videos (user_id, video_id) VALUES (4, 71);
INSERT INTO liked_videos (user_id, video_id) VALUES (4, 41);
INSERT INTO liked_videos (user_id, video_id) VALUES (4, 74);
INSERT INTO liked_videos (user_id, video_id) VALUES (5, 99);
INSERT INTO liked_videos (user_id, video_id) VALUES (5, 80);
INSERT INTO liked_videos (user_id, video_id) VALUES (5, 63);
INSERT INTO liked_videos (user_id, video_id) VALUES (5, 10);
INSERT INTO liked_videos (user_id, video_id) VALUES (5, 18);
INSERT INTO liked_videos (user_id, video_id) VALUES (5, 45);
INSERT INTO liked_videos (user_id, video_id) VALUES (5, 11);
INSERT INTO liked_videos (user_id, video_id) VALUES (5, 14);
INSERT INTO liked_videos (user_id, video_id) VALUES (5, 44);
INSERT INTO liked_videos (user_id, video_id) VALUES (5, 38);
INSERT INTO liked_videos (user_id, video_id) VALUES (6, 50);
INSERT INTO liked_videos (user_id, video_id) VALUES (6, 97);
INSERT INTO liked_videos (user_id, video_id) VALUES (6, 55);
INSERT INTO liked_videos (user_id, video_id) VALUES (6, 86);
INSERT INTO liked_videos (user_id, video_id) VALUES (6, 51);
INSERT INTO liked_videos (user_id, video_id) VALUES (6, 20);
INSERT INTO liked_videos (user_id, video_id) VALUES (6, 82);
INSERT INTO liked_videos (user_id, video_id) VALUES (6, 66);
INSERT INTO liked_videos (user_id, video_id) VALUES (6, 29);
INSERT INTO liked_videos (user_id, video_id) VALUES (6, 89);
INSERT INTO liked_videos (user_id, video_id) VALUES (7, 80);
INSERT INTO liked_videos (user_id, video_id) VALUES (7, 4);
INSERT INTO liked_videos (user_id, video_id) VALUES (7, 22);
INSERT INTO liked_videos (user_id, video_id) VALUES (7, 59);
INSERT INTO liked_videos (user_id, video_id) VALUES (7, 52);
INSERT INTO liked_videos (user_id, video_id) VALUES (7, 34);
INSERT INTO liked_videos (user_id, video_id) VALUES (7, 77);
INSERT INTO liked_videos (user_id, video_id) VALUES (7, 86);
INSERT INTO liked_videos (user_id, video_id) VALUES (7, 88);
INSERT INTO liked_videos (user_id, video_id) VALUES (7, 91);
INSERT INTO liked_videos (user_id, video_id) VALUES (8, 19);
INSERT INTO liked_videos (user_id, video_id) VALUES (8, 5);
INSERT INTO liked_videos (user_id, video_id) VALUES (8, 2);
INSERT INTO liked_videos (user_id, video_id) VALUES (8, 67);
INSERT INTO liked_videos (user_id, video_id) VALUES (8, 89);
INSERT INTO liked_videos (user_id, video_id) VALUES (8, 83);
INSERT INTO liked_videos (user_id, video_id) VALUES (8, 62);
INSERT INTO liked_videos (user_id, video_id) VALUES (8, 91);
INSERT INTO liked_videos (user_id, video_id) VALUES (8, 96);
INSERT INTO liked_videos (user_id, video_id) VALUES (8, 71);
INSERT INTO liked_videos (user_id, video_id) VALUES (9, 48);
INSERT INTO liked_videos (user_id, video_id) VALUES (9, 29);
INSERT INTO liked_videos (user_id, video_id) VALUES (9, 66);
INSERT INTO liked_videos (user_id, video_id) VALUES (9, 65);
INSERT INTO liked_videos (user_id, video_id) VALUES (9, 35);
INSERT INTO liked_videos (user_id, video_id) VALUES (9, 30);
INSERT INTO liked_videos (user_id, video_id) VALUES (9, 44);
INSERT INTO liked_videos (user_id, video_id) VALUES (9, 39);
INSERT INTO liked_videos (user_id, video_id) VALUES (9, 52);
INSERT INTO liked_videos (user_id, video_id) VALUES (9, 64);
INSERT INTO liked_videos (user_id, video_id) VALUES (10, 65);
INSERT INTO liked_videos (user_id, video_id) VALUES (10, 60);
INSERT INTO liked_videos (user_id, video_id) VALUES (10, 8);
INSERT INTO liked_videos (user_id, video_id) VALUES (10, 83);
INSERT INTO liked_videos (user_id, video_id) VALUES (10, 80);
INSERT INTO liked_videos (user_id, video_id) VALUES (10, 54);
INSERT INTO liked_videos (user_id, video_id) VALUES (10, 19);
INSERT INTO liked_videos (user_id, video_id) VALUES (10, 78);
INSERT INTO liked_videos (user_id, video_id) VALUES (10, 35);
INSERT INTO liked_videos (user_id, video_id) VALUES (10, 90);

INSERT INTO watch_history (user_id, video_id, genre, views) 
SELECT lv.user_id, lv.video_id, v.genre, FLOOR(RAND() * 100) + 1 
FROM liked_videos lv
JOIN videos v ON lv.video_id = v.video_id;

INSERT INTO comments (video_id, comment_text, user_id, comment_date)
SELECT wh.video_id, 'Good video ! ', wh.user_id, CURRENT_DATE()
FROM watch_history wh;

ALTER TABLE user
ADD COLUMN username VARCHAR(255) UNIQUE;

UPDATE user
SET username = CONCAT(
    UPPER(SUBSTRING_INDEX(SUBSTRING_INDEX(email_id, '.', 1), '@', 1)));