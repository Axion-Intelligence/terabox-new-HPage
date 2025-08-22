// Trilingual Language Switcher for TERABOX Website
// Complete translations for Japanese, English, and Chinese
// Fixed version matching all index.html content

const translations = {
    ja: {
        // Navigation
        'nav-strength': '当社の強み',
        'nav-business-news': '業務新聞',
        'nav-company': '会社概要',
        'nav-message': '代表挨拶',
        'nav-business': '事業内容',
        'nav-cases': '導入実績',
        'nav-recruit': '採用情報',
        'nav-contact': 'お問い合わせ',
        
        // Hero Section
        'hero-title': 'TERABOX',
        'hero-subtitle': '信頼できるITパートナー',
        'hero-description': 'システムエンジニアリング・AI/DXソリューション・スマート機器導入<br>25名以上の専門エンジニアチーム、平均7年以上の業界経験<br>お客様のビジネス課題を解決する一站式ITソリューション',
        'hero-cta': '詳細を見る',
        'hero-stat-engineers': '専門エンジニア',
        'hero-stat-companies': '年間サービス企業',
        'hero-stat-experience': '平均業界経験',
        
        // Strength Section
        'strength-title': '当社の強み',
        'strength-subtitle': 'Our Competitive Advantages',
        'strength-team-title': '多国籍精鋭チーム',
        'strength-team-text': '日本人エンジニアと外国籍エンジニアが協働。官公庁・自治体案件でのプリセールス・提案・要件定義・入札支援等の豊富な実績。グローバルな知見と日本国内公共/民間領域への対応力を両立。',
        'strength-service-title': 'エンドツーエンドサービス',
        'strength-service-text': 'RFP（提案依頼書）・要件定義など上流工程から、技術選定・見積・課題整理・設計～運用まで一貫対応。上流工程経験豊富なPM/PLと最適なチームが高品質プロジェクトを推進。',
        'strength-experience-title': '豊富な業界経験',
        'strength-experience-text': '金融（メガバンク）、医療、物流、製造業など多業界での実績。特に金融・保険業界の経験者が多数在籍していることから、セキュリティに対する高い意識と豊富な知識を保有。',
        
        // Business News Section
        'business-news-title': '業務新聞',
        'business-news-subtitle': 'Latest Business Updates',
        
        // News Content
        'news-badge-new': 'NEW',
        'news-date-1': '2025年1月15日',
        'news-date-2': '2025年1月10日',
        'news-date-3': '2025年1月5日',
        'news-category-press': 'プレスリリース',
        'news-category-award': '受賞情報',
        'news-category-partnership': 'パートナーシップ',
        'news-title-1': '大手製造業向けAI品質検査システムを納入',
        'news-text-1': '当社が開発したAIベースの品質検査システムが、国内大手製造業に採用されました。深層学習技術を活用し、不良品検出率を99.8%まで向上させ、検査時間を従来の1/3に短縮することに成功しました。今後も製造業のDX推進に貢献してまいります。',
        'news-title-2': 'Google Cloud Partner認定を取得',
        'news-text-2': 'この度、当社はGoogle Cloud Partnerとして正式に認定されました。これまでのクラウド移行実績と技術力が評価されての認定となります。今後はGoogle Cloudの最新技術を活用し、お客様により高度なクラウドソリューションを提供してまいります。',
        'news-title-3': 'Microsoft社との戦略的パートナーシップを締結',
        'news-text-3': 'Microsoft Dynamics 365の導入支援において、Microsoft社と戦略的パートナーシップを締結しました。これにより、エンタープライズ向けERPソリューションの提供能力が大幅に強化され、より包括的なデジタルトランスフォーメーションを支援できるようになります。',
        
        // Company Section
        'company-title': '会社概要',
        'company-subtitle': 'Company Information',
        'company-headquarters': '本社',
        'company-subsidiary': '関連会社',
        'company-headquarters-title': 'テラボックス株式会社',
        'company-name-label': '名　称',
        'company-name-value': 'テラボックス株式会社',
        'company-address-label': '所在地',
        'company-address-value': '〒104-0045 東京都中央区築地6丁目17-4<br>リードシー築地ビル 4F',
        'company-tel-label': 'TEL',
        'company-tel-value': '03-5542-7798',
        'company-email-label': 'E-mail',
        'company-email-value': 'info@terabox.jp',
        'company-established-label': '設立日',
        'company-established-value': '平成28年4月',
        'company-capital-label': '資本金',
        'company-capital-value': '4500万円',
        'company-ceo-label': '代表者',
        'company-ceo-value': '荆　威',
        'company-certifications-label': '諸資格',
        'company-certifications-value': 'プライバシーマーク 10825028<br>有料職業紹介許可証 13-ユ-309628<br>労働者派遣事業許可証 派13-312878<br>Google Cloud Partner',
        'company-lawyer-label': '顧問弁護士',
        'company-lawyer-value': '飯田綜合法律事務所',
        
        // Message Section
        'message-title': '代表挨拶',
        'message-subtitle': 'Message from CEO',
        'ceo-name': '荆　威',
        'ceo-title': '代表取締役',
        'message-greeting': '拝啓',
        'message-p1': '貴社ますますご清栄のこととお慶び申し上げます。',
        'message-p2': 'このたびテラボックスは、日系企業で長く働きながら日本のビジネスを身に付けた経験豊富な精鋭メンバーの結集により設立させていただきました。今後とも、お客様から信頼されるビジネスパートナーとして真摯に業務に取り組んで参ります。',
        'message-p3': '昨今では外国系のIT企業は乱立気味であり、ともすれば人材を奪い合うような状況に陥りがちな市況でもある中、弊社の創業メンバーは逆転の発想と長い業界経験を活かし、互いに協力関係を築き合えるパートナーネットワークの仕組みを構築いたしました。',
        'message-p4': '優秀なビジネスパートナーとの緊密な連携により、お客様の様々なニーズに対応できる体制を整えております。',
        'message-p5': '弊社の主な事業範囲としては、システムエンジニアリング事業、AI・DXソリューション事業、スマート機器・IoT事業、IT人材サービス事業の四つの柱を軸に事業展開しております。また、特に金融・保険業界の経験者が多数在籍していることから、セキュリティに対する高い意識と豊富な知識も保有しております。',
        'message-p6': '今後とも弊社ならびに弊社ネットワークの経験値と知見を結集し、貴社のご要望に柔軟に対応して参ります。また、それに対応するための十分以上の知力と体力を備えていると自負致しております。貴社のご期待に応えるべく全力を尽くす所存でございますので、何卒ご検討の程宜しくお願い申し上げます。',
        'message-closing': '敬具',
        'message-company': 'テラボックス株式会社',
        'message-signature': '代表取締役　荆威',
        
        // Business Section
        'business-title': '事業内容',
        'business-subtitle': 'Our Business Services',
        'business-engineering-title': 'システムエンジニアリング事業',
        'business-engineering-text': '25名以上の多国籍エンジニアチーム、平均業界経験7年以上のプロフェッショナル集団',
        'business-ai-title': 'AI・DXソリューション事業',
        'business-ai-text': 'RFPから運用まで一站式AI/DXソリューション提供',
        'business-iot-title': 'スマート機器・IoT事業',
        'business-iot-text': 'サービスロボット日本初導入のパイオニア',
        'business-hr-title': 'IT人材サービス事業',
        'business-hr-text': '総合的な人材ソリューション提供',
        'business-blockchain-title': 'Blockchain & Web3事業',
        'business-blockchain-text': '次世代Web3技術とブロックチェーンソリューションの開発・導入',
        'business-enterprise-title': 'エンタープライズソリューション事業',
        'business-enterprise-text': '企業のデジタル変革を支援する総合ソリューション',
        
        // Cases Section
        'cases-title': '導入実績',
        'cases-subtitle': 'Our Track Record',
        'case-megabank-title': '某メガバンク - AWS共通基盤構築',
        'case-megabank-text': '次期基盤構築・運用保守プロジェクト。延べ100+人月、継続中。24/7運用体制を構築し、高可用性とセキュリティを実現。',
        'case-medical-title': '上場医療データ専門会社 - ビッグデータ基盤',
        'case-medical-text': 'ビッグデータ分析を含め、データ基盤構築・運用保守。延べ100+人月、継続中。AI/MLを活用した高度な分析環境を提供。',
        'case-nursing-title': '介護施設 - 日本初サービスロボット導入',
        'case-nursing-text': '配膳・清掃ロボットの日本初導入を実現。85%の利用者が負担軽減を実感。作業時間を25%～70%削減に成功。',
        
        // Recruit Section
        'recruit-title': '採用情報',
        'recruit-subtitle': 'Join Our Team',
        'recruit-requirements-title': '募集要項（新卒・中途）',
        'recruit-position-label': '募集職種',
        'recruit-position-value': '①ITエンジニア　②総合職',
        'recruit-hours-label': '勤務時間',
        'recruit-hours-value': '9:00～18:00（休憩1時間）　土日祝日休み　年次有給休暇の計画的付与あり',
        'recruit-hours-note': '※勤務時間・休みは職種や部署によって異なる場合があります。相談可。',
        'recruit-allowance-label': '諸手当',
        'recruit-allowance-value': '通勤手当、家族手当、勤続手当、役職手当等あり',
        'recruit-salary-label': '給与',
        'recruit-salary-new': '新卒',
        'recruit-salary-mid': '中途採用',
        'recruit-salary-mid-range': '年収400～1,000万円',
        'recruit-raise-label': '昇給・昇格',
        'recruit-raise-value': '半期毎評定あり',
        'recruit-trial-label': '試用・研修期間について',
        'recruit-trial-value': '３ヶ月',
        'recruit-vacation-label': '休暇',
        'recruit-vacation-value': '週休2日制　リフレッシュ休暇',
        'recruit-training-label': '研修制度',
        'recruit-training-value': '能力開発体系に基づく研修<br>テクニカルスキル研修<br>eラーニング研修　OJT',
        'recruit-positions-title': '中途採用職種',
        
        // Mid-Career Positions
        'position-skills-label': '必要スキル:',
        'position-apply-btn': '応募する',
        'position-ai-title': 'AIエンジニア',
        'position-ai-description': '機械学習モデルの開発・改善、データパイプライン構築、AIプロダクトの実装に従事していただきます。最新の技術トレンドを追いながら、革新的なソリューション開発に携わることができます。',
        'position-ai-skills': 'Python, TensorFlow/PyTorch, 機械学習の基礎知識',
        'position-fullstack-title': 'フルスタックエンジニア',
        'position-fullstack-description': 'フロントエンドからバックエンドまで、システム全体の設計・開発に携わります。モダンな技術スタックを使用した開発環境で、技術力を存分に発揮できます。',
        'position-fullstack-skills': 'JavaScript, React, Node.js, クラウドサービス',
        'position-cloud-title': 'クラウドアーキテクト',
        'position-cloud-description': '企業のクラウド移行戦略立案、アーキテクチャ設計、インフラ構築を担当します。スケーラブルで安全なクラウドソリューションの提供を通じて、お客様のDXを推進します。',
        'position-cloud-skills': 'AWS/Azure/GCP, Kubernetes, Infrastructure as Code',
        'position-pm-title': 'プロダクトマネージャー',
        'position-pm-description': 'AIプロダクトの企画・開発・運用を統括し、市場ニーズを技術要件に落とし込みます。エンジニアリングチームと密接に連携し、革新的なプロダクトの創出をリードします。',
        'position-pm-skills': 'プロダクト企画経験, 技術理解力, プロジェクト管理',
        'position-devops-title': 'DevOpsエンジニア',
        'position-devops-description': 'CI/CDパイプラインの構築、インフラの自動化、監視システムの導入を通じて、開発プロセスの効率化と品質向上を実現します。',
        'position-devops-skills': 'Docker, Kubernetes, CI/CD, 監視ツール',
        'position-ds-title': 'データサイエンティスト',
        'position-ds-description': '大規模データの分析、統計モデリング、ビジネス課題解決のための洞察抽出を行います。データから価値を創出し、意思決定を支援する重要な役割です。',
        'position-ds-skills': 'R/Python, SQL, 統計学の知識',
        
        // Access Section
        'access-title': 'アクセス',
        'access-subtitle': 'How to reach us',
        'access-company-label': '会社名',
        'access-company-value': 'テラボックス株式会社',
        'access-address-label': '住所',
        'access-address-value': '〒104-0045<br>東京都中央区築地6丁目17-4<br>リードシー築地ビル 4F',
        'access-station-label': '最寄り駅',
        'access-station-value': '東京メトロ日比谷線 築地駅 徒歩5分<br>都営浅草線 東銀座駅 徒歩7分',
        'access-phone-label': '電話番号',
        'access-phone-value': '03-5542-7798',
        'access-hours-label': '営業時間',
        'access-hours-value': '平日 9:00 - 18:00<br>(土日祝日は休業)',
        'access-map-text': 'Google Maps',
        
        // Contact Section
        'contact-title': 'お問い合わせ',
        'contact-subtitle': 'Contact Us',
        'contact-description': 'システム開発、AI/DXソリューション、人材サービスなど、<br>お気軽にご相談ください。',
        'contact-cta': 'お問い合わせする',
        
        // Footer
        'footer-copyright': 'TERABOX Copyright © 2024. All Rights Reserved.',
        
        // Engineering Service Page
        'engineering-title': 'エンジニアリング事業',
        'engineering-subtitle': 'Engineering Services',
        'engineering-description': 'お客様のIT開発ニーズに幅広く対応し、高品質なシステム開発・運用サービスを提供します。',
        
        // AI Solution Page
        'ai-title': 'AI・DXソリューション事業',
        'ai-subtitle': 'AI/DX Solutions',
        'ai-description': 'AI・機械学習・DXの導入から運用まで、包括的なソリューションを提供します。',
        
        // Enterprise Solution Page
        'enterprise-title': 'エンタープライズソリューション事業',
        'enterprise-subtitle': 'Enterprise Solutions',
        'enterprise-description': '企業のデジタル変革を支援する総合的なソリューションを提供します。',
        
        // Human Resource Page
        'hr-title': 'IT人材サービス事業',
        'hr-subtitle': 'IT Human Resources',
        'hr-description': '優秀なIT人材の派遣・紹介から育成まで、総合的な人材ソリューションを提供します。',
        
        // IoT Systems Page
        'iot-title': 'スマート機器・IoT事業',
        'iot-subtitle': 'Smart Devices & IoT',
        'iot-description': '最新のIoT技術とスマートデバイスで、効率的な業務環境を実現します。',
        
        // Blockchain Web3 Page
        'blockchain-title': 'ブロックチェーン・Web3事業',
        'blockchain-subtitle': 'Blockchain & Web3',
        'blockchain-description': '次世代Web3技術とブロックチェーンソリューションの開発・導入を支援します。'
    },
    
    en: {
        // Navigation
        'nav-strength': 'Our Strengths',
        'nav-business-news': 'Business News',
        'nav-company': 'Company',
        'nav-message': 'CEO Message',
        'nav-business': 'Business',
        'nav-cases': 'Case Studies',
        'nav-recruit': 'Careers',
        'nav-contact': 'Contact',
        
        // Hero Section
        'hero-title': 'TERABOX',
        'hero-subtitle': 'Your Trusted IT Partner',
        'hero-description': 'System Engineering • AI/DX Solutions • Smart Device Implementation<br>25+ Professional Engineers, Average 7+ Years Industry Experience<br>One-Stop IT Solutions for Your Business Challenges',
        'hero-cta': 'Learn More',
        'hero-stat-engineers': 'Professional Engineers',
        'hero-stat-companies': 'Annual Service Companies',
        'hero-stat-experience': 'Average Industry Experience',
        
        // Strength Section
        'strength-title': 'Our Strengths',
        'strength-subtitle': 'Our Competitive Advantages',
        'strength-team-title': 'Multinational Elite Team',
        'strength-team-text': 'Collaboration between Japanese and international engineers. Rich experience in government and municipal projects including presales, proposals, requirements definition, and bidding support. Combining global insights with domestic public/private sector capabilities.',
        'strength-service-title': 'End-to-End Services',
        'strength-service-text': 'Comprehensive support from upstream processes like RFP and requirements definition to technology selection, estimation, issue resolution, design, and operations. Experienced PMs/PLs lead optimal teams for high-quality project delivery.',
        'strength-experience-title': 'Extensive Industry Experience',
        'strength-experience-text': 'Proven track record across finance (megabanks), healthcare, logistics, and manufacturing. Strong security awareness and knowledge from numerous financial and insurance industry veterans.',
        
        // Business News Section
        'business-news-title': 'Business News',
        'business-news-subtitle': 'Latest Business Updates',
        
        // News Content
        'news-badge-new': 'NEW',
        'news-date-1': 'January 15, 2025',
        'news-date-2': 'January 10, 2025',
        'news-date-3': 'January 5, 2025',
        'news-category-press': 'Press Release',
        'news-category-award': 'Award',
        'news-category-partnership': 'Partnership',
        'news-title-1': 'AI Quality Inspection System Delivered to Major Manufacturing Company',
        'news-text-1': 'Our AI-based quality inspection system has been adopted by a major domestic manufacturing company. By leveraging deep learning technology, we successfully improved defect detection rates to 99.8% and reduced inspection time to one-third of the conventional process. We will continue contributing to manufacturing industry DX promotion.',
        'news-title-2': 'Obtained Google Cloud Partner Certification',
        'news-text-2': 'We are pleased to announce that our company has been officially certified as a Google Cloud Partner. This certification recognizes our cloud migration achievements and technical capabilities. Moving forward, we will leverage Google Cloud\'s latest technologies to provide more advanced cloud solutions to our customers.',
        'news-title-3': 'Strategic Partnership Agreement with Microsoft',
        'news-text-3': 'We have entered into a strategic partnership with Microsoft for Microsoft Dynamics 365 implementation support. This significantly strengthens our enterprise ERP solution delivery capabilities, enabling us to provide more comprehensive digital transformation support.',
        
        // Company Section
        'company-title': 'Company Overview',
        'company-subtitle': 'Company Information',
        'company-headquarters': 'Headquarters',
        'company-subsidiary': 'Subsidiary',
        'company-headquarters-title': 'Terabox Co., Ltd.',
        'company-name-label': 'Company Name',
        'company-name-value': 'Terabox Co., Ltd.',
        'company-address-label': 'Address',
        'company-address-value': '〒104-0045 Tokyo, Chuo City, Tsukiji 6-17-4<br>Reed Sea Tsukiji Building 4F',
        'company-tel-label': 'TEL',
        'company-tel-value': '03-5542-7798',
        'company-email-label': 'E-mail',
        'company-email-value': 'info@terabox.jp',
        'company-established-label': 'Established',
        'company-established-value': 'April 2016',
        'company-capital-label': 'Capital',
        'company-capital-value': '45 Million Yen',
        'company-ceo-label': 'Representative',
        'company-ceo-value': 'Jing Wei',
        'company-certifications-label': 'Certifications',
        'company-certifications-value': 'Privacy Mark 10825028<br>Employment Agency License 13-ユ-309628<br>Worker Dispatch License 派13-312878<br>Google Cloud Partner',
        'company-lawyer-label': 'Legal Advisor',
        'company-lawyer-value': 'Iida Sogo Law Office',
        
        // Message Section
        'message-title': 'Message from CEO',
        'message-subtitle': 'Message from CEO',
        'ceo-name': 'Jing Wei',
        'ceo-title': 'President & CEO',
        'message-greeting': 'Dear Valued Partners,',
        'message-p1': 'We are pleased to see your company continues to prosper.',
        'message-p2': 'Terabox was established through the collaboration of experienced elite members who have long worked in Japanese companies and acquired deep knowledge of Japanese business practices. We will continue to work diligently as a trusted business partner for our customers.',
        'message-p3': 'In recent years, foreign IT companies have become increasingly prevalent, and the market tends to fall into a situation where companies compete for talent. Our founding members have leveraged their reverse thinking and extensive industry experience to build a partner network system that enables mutual cooperation.',
        'message-p4': 'Through close collaboration with excellent business partners, we have established a system that can respond to various customer needs.',
        'message-p5': 'Our main business scope is based on four pillars: System Engineering, AI/DX Solutions, Smart Devices & IoT, and IT Human Resources Services. In addition, since we have many experienced professionals from the financial and insurance industries, we possess high security awareness and extensive knowledge.',
        'message-p6': 'We will continue to combine the experience and knowledge of our company and our network to flexibly respond to your requirements. We are confident that we have more than sufficient intelligence and physical strength to handle this. We will do our best to meet your expectations, so we ask for your kind consideration.',
        'message-closing': 'Sincerely,',
        'message-company': 'Terabox Co., Ltd.',
        'message-signature': 'President & CEO, Jing Wei',
        
        // Business Section
        'business-title': 'Our Business',
        'business-subtitle': 'Our Business Services',
        'business-engineering-title': 'System Engineering',
        'business-engineering-text': '25+ multinational engineers with average 7+ years industry experience',
        'business-ai-title': 'AI/DX Solutions',
        'business-ai-text': 'End-to-end AI/DX solutions from RFP to operations',
        'business-iot-title': 'Smart Devices & IoT',
        'business-iot-text': 'Pioneer in service robot implementation in Japan',
        'business-hr-title': 'IT HR Services',
        'business-hr-text': 'Comprehensive human resource solutions',
        'business-blockchain-title': 'Blockchain & Web3',
        'business-blockchain-text': 'Development and implementation of next-generation Web3 technology and blockchain solutions',
        'business-enterprise-title': 'Enterprise Solutions',
        'business-enterprise-text': 'Comprehensive solutions supporting enterprise digital transformation',
        
        // Cases Section
        'cases-title': 'Case Studies',
        'cases-subtitle': 'Our Track Record',
        'case-megabank-title': 'Major Bank - AWS Common Infrastructure',
        'case-megabank-text': 'Next-generation infrastructure construction and operation maintenance project. Over 100+ person-months, ongoing. Built 24/7 operational system achieving high availability and security.',
        'case-medical-title': 'Listed Medical Data Company - Big Data Platform',
        'case-medical-text': 'Data platform construction and operation maintenance including big data analysis. Over 100+ person-months, ongoing. Providing advanced analytical environment utilizing AI/ML.',
        'case-nursing-title': 'Nursing Facility - First Service Robot Implementation in Japan',
        'case-nursing-text': 'Achieved the first implementation of meal serving and cleaning robots in Japan. 85% of users experienced burden reduction. Successfully reduced working time by 25% to 70%.',
        
        // Recruit Section
        'recruit-title': 'Careers',
        'recruit-subtitle': 'Join Our Team',
        'recruit-requirements-title': 'Job Requirements (New Graduates & Mid-Career)',
        'recruit-position-label': 'Positions',
        'recruit-position-value': '①IT Engineer　②General Position',
        'recruit-hours-label': 'Working Hours',
        'recruit-hours-value': '9:00-18:00 (1 hour break) Weekends and holidays off, planned annual leave available',
        'recruit-hours-note': '※Working hours and holidays may vary by position or department. Negotiable.',
        'recruit-allowance-label': 'Allowances',
        'recruit-allowance-value': 'Transportation, family, service years, position allowances available',
        'recruit-salary-label': 'Salary',
        'recruit-salary-new': 'New Graduates',
        'recruit-salary-mid': 'Mid-Career',
        'recruit-salary-mid-range': 'Annual salary 4-10 million yen',
        'recruit-raise-label': 'Promotion & Raises',
        'recruit-raise-value': 'Semi-annual evaluations',
        'recruit-trial-label': 'Trial/Training Period',
        'recruit-trial-value': '3 months',
        'recruit-vacation-label': 'Holidays',
        'recruit-vacation-value': '5-day work week, refresh leave',
        'recruit-training-label': 'Training System',
        'recruit-training-value': 'Capability development training<br>Technical skills training<br>E-learning, OJT',
        'recruit-positions-title': 'Mid-Career Positions',
        
        // Mid-Career Positions
        'position-skills-label': 'Required Skills:',
        'position-apply-btn': 'Apply Now',
        'position-ai-title': 'AI Engineer',
        'position-ai-description': 'You will be involved in developing and improving machine learning models, building data pipelines, and implementing AI products. You can engage in innovative solution development while following the latest technology trends.',
        'position-ai-skills': 'Python, TensorFlow/PyTorch, Basic knowledge of machine learning',
        'position-fullstack-title': 'Full Stack Engineer',
        'position-fullstack-description': 'You will be involved in the design and development of entire systems from front-end to back-end. You can fully utilize your technical skills in a development environment using modern technology stacks.',
        'position-fullstack-skills': 'JavaScript, React, Node.js, Cloud Services',
        'position-cloud-title': 'Cloud Architect',
        'position-cloud-description': 'You will be responsible for enterprise cloud migration strategy planning, architecture design, and infrastructure construction. Through providing scalable and secure cloud solutions, you will promote customer DX.',
        'position-cloud-skills': 'AWS/Azure/GCP, Kubernetes, Infrastructure as Code',
        'position-pm-title': 'Product Manager',
        'position-pm-description': 'You will oversee AI product planning, development, and operations, translating market needs into technical requirements. Work closely with engineering teams to lead the creation of innovative products.',
        'position-pm-skills': 'Product planning experience, Technical understanding, Project management',
        'position-devops-title': 'DevOps Engineer',
        'position-devops-description': 'You will achieve development process efficiency and quality improvement through CI/CD pipeline construction, infrastructure automation, and monitoring system implementation.',
        'position-devops-skills': 'Docker, Kubernetes, CI/CD, Monitoring tools',
        'position-ds-title': 'Data Scientist',
        'position-ds-description': 'You will perform large-scale data analysis, statistical modeling, and insight extraction for business problem solving. This is an important role that creates value from data and supports decision-making.',
        'position-ds-skills': 'R/Python, SQL, Knowledge of statistics',
        
        // Access Section
        'access-title': 'Access',
        'access-subtitle': 'How to reach us',
        'access-company-label': 'Company Name',
        'access-company-value': 'Terabox Co., Ltd.',
        'access-address-label': 'Address',
        'access-address-value': '〒104-0045<br>6-17-4 Tsukiji, Chuo City, Tokyo<br>Reed Sea Tsukiji Building 4F',
        'access-station-label': 'Nearest Station',
        'access-station-value': 'Tokyo Metro Hibiya Line Tsukiji Station 5 min walk<br>Toei Asakusa Line Higashi-Ginza Station 7 min walk',
        'access-phone-label': 'Phone',
        'access-phone-value': '03-5542-7798',
        'access-hours-label': 'Business Hours',
        'access-hours-value': 'Weekdays 9:00 - 18:00<br>(Closed on weekends and holidays)',
        'access-map-text': 'Google Maps',
        
        // Contact Section
        'contact-title': 'Contact Us',
        'contact-subtitle': 'Contact Us',
        'contact-description': 'System development, AI/DX solutions, HR services, and more.<br>Feel free to contact us for consultation.',
        'contact-cta': 'Contact Us',
        
        // Footer
        'footer-copyright': 'TERABOX Copyright © 2024. All Rights Reserved.',
        
        // Engineering Service Page
        'engineering-title': 'System Engineering',
        'engineering-subtitle': 'Engineering Services',
        'engineering-description': 'We provide high-quality system development and operational services to meet your diverse IT development needs.',
        
        // AI Solution Page
        'ai-title': 'AI/DX Solutions',
        'ai-subtitle': 'AI/DX Solutions',
        'ai-description': 'We provide comprehensive solutions from AI, machine learning, and DX implementation to operations.',
        
        // Enterprise Solution Page
        'enterprise-title': 'Enterprise Solutions',
        'enterprise-subtitle': 'Enterprise Solutions',
        'enterprise-description': 'We provide comprehensive solutions to support enterprise digital transformation.',
        
        // Human Resource Page
        'hr-title': 'IT Human Resources',
        'hr-subtitle': 'IT Human Resources',
        'hr-description': 'We provide comprehensive human resource solutions from dispatching and recruiting excellent IT talent to training.',
        
        // IoT Systems Page
        'iot-title': 'Smart Devices & IoT',
        'iot-subtitle': 'Smart Devices & IoT',
        'iot-description': 'We realize efficient business environments with cutting-edge IoT technology and smart devices.',
        
        // Blockchain Web3 Page
        'blockchain-title': 'Blockchain & Web3',
        'blockchain-subtitle': 'Blockchain & Web3',
        'blockchain-description': 'We support the development and implementation of next-generation Web3 technology and blockchain solutions.'
    },
    
    zh: {
        // Navigation
        'nav-strength': '我们的优势',
        'nav-business-news': '业务新闻',
        'nav-company': '公司概况',
        'nav-message': '总裁致辞',
        'nav-business': '业务内容',
        'nav-cases': '导入案例',
        'nav-recruit': '招聘信息',
        'nav-contact': '联系我们',
        
        // Hero Section
        'hero-title': 'TERABOX',
        'hero-subtitle': '值得信赖的IT合作伙伴',
        'hero-description': '系统工程 • AI/DX解决方案 • 智能设备导入<br>25名以上专业工程师团队，平均7年以上行业经验<br>为您的商业挑战提供一站式IT解决方案',
        'hero-cta': '了解更多',
        'hero-stat-engineers': '专业工程师',
        'hero-stat-companies': '年服务企业',
        'hero-stat-experience': '平均行业经验',
        
        // Strength Section
        'strength-title': '我们的优势',
        'strength-subtitle': '我们的竞争优势',
        'strength-team-title': '多国籍精英团队',
        'strength-team-text': '日本工程师与外籍工程师协作。在政府和地方自治体项目中拥有丰富的售前、提案、需求定义、招标支持等经验。兼具全球视野和日本国内公共/民间领域的应对能力。',
        'strength-service-title': '端到端服务',
        'strength-service-text': '从RFP（提案请求书）、需求定义等上游工程到技术选型、报价、问题整理、设计到运维的一贯对应。经验丰富的PM/PL带领最适合的团队推进高质量项目。',
        'strength-experience-title': '丰富的行业经验',
        'strength-experience-text': '在金融（大型银行）、医疗、物流、制造业等多个行业拥有实绩。特别是有众多金融保险行业经验者在籍，拥有高度的安全意识和丰富的知识。',
        
        // Business News Section
        'business-news-title': '业务新闻',
        'business-news-subtitle': '最新业务动态',
        
        // News Content
        'news-badge-new': '最新',
        'news-date-1': '2025年1月15日',
        'news-date-2': '2025年1月10日',
        'news-date-3': '2025年1月5日',
        'news-category-press': '新闻发布',
        'news-category-award': '获奖信息',
        'news-category-partnership': '合作伙伴',
        'news-title-1': '向大型制造企业交付AI质量检测系统',
        'news-text-1': '我们开发的基于AI的质量检测系统被国内大型制造企业采用。通过利用深度学习技术，成功将不良品检出率提高至99.8%，检测时间缩短至传统方式的1/3。今后将继续为制造业的DX推进做出贡献。',
        'news-title-2': '获得Google Cloud Partner认证',
        'news-text-2': '我们很高兴地宣布，本公司已正式获得Google Cloud Partner认证。此次认证是对我们迄今为止的云迁移实绩和技术实力的认可。今后将利用Google Cloud的最新技术，为客户提供更高水平的云解决方案。',
        'news-title-3': '与Microsoft公司签署战略合作伙伴关系',
        'news-text-3': '在Microsoft Dynamics 365的导入支援方面，与Microsoft公司签署了战略合作伙伴关系。这将大幅强化面向企业的ERP解决方案提供能力，能够支援更全面的数字化转型。',
        
        // Company Section
        'company-title': '公司概况',
        'company-subtitle': '公司信息',
        'company-headquarters': '总部',
        'company-subsidiary': '关联公司',
        'company-headquarters-title': 'Terabox株式会社',
        'company-name-label': '公司名称',
        'company-name-value': 'Terabox株式会社',
        'company-address-label': '地址',
        'company-address-value': '〒104-0045 东京都中央区筑地6丁目17-4<br>Reed Sea筑地大厦 4F',
        'company-tel-label': '电话',
        'company-tel-value': '03-5542-7798',
        'company-email-label': '邮箱',
        'company-email-value': 'info@terabox.jp',
        'company-established-label': '成立日期',
        'company-established-value': '2016年4月',
        'company-capital-label': '注册资本',
        'company-capital-value': '4500万日元',
        'company-ceo-label': '法人代表',
        'company-ceo-value': '荆威',
        'company-certifications-label': '各项资质',
        'company-certifications-value': '隐私标志 10825028<br>收费职业介绍许可证 13-ユ-309628<br>劳动者派遣事业许可证 派13-312878<br>Google Cloud Partner',
        'company-lawyer-label': '法律顾问',
        'company-lawyer-value': '饭田综合法律事务所',
        
        // Message Section
        'message-title': '总裁致辞',
        'message-subtitle': '总裁致辞',
        'ceo-name': '荆威',
        'ceo-title': '代表董事',
        'message-greeting': '尊敬的合作伙伴：',
        'message-p1': '很高兴看到贵公司日益繁荣发展。',
        'message-p2': 'Terabox是由在日本企业长期工作并掌握了日本商务知识的经验丰富的精英成员合作成立的。我们将继续作为客户信赖的商业伙伴，真诚地开展业务。',
        'message-p3': '近年来，外资IT企业呈现乱立态势，市场往往陷入人才争夺的局面。我们的创始成员运用逆向思维和丰富的行业经验，构建了能够相互建立合作关系的合作伙伴网络机制。',
        'message-p4': '通过与优秀商业伙伴的紧密合作，我们建立了能够满足客户各种需求的体制。',
        'message-p5': '我们的主要业务范围以系统工程事业、AI·DX解决方案事业、智能设备·IoT事业、IT人才服务事业四大支柱为轴心展开业务。此外，由于有众多金融保险行业经验者在籍，我们也拥有对安全的高度意识和丰富知识。',
        'message-p6': '今后我们将继续结合公司及公司网络的经验值和见解，灵活应对贵公司的要求。我们相信具备了应对这些要求的充分智力和体力。我们将全力以赴满足贵公司的期待，恳请予以考虑。',
        'message-closing': '此致敬礼',
        'message-company': 'Terabox株式会社',
        'message-signature': '代表董事 荆威',
        
        // Business Section
        'business-title': '业务内容',
        'business-subtitle': '我们的业务服务',
        'business-engineering-title': '系统工程事业',
        'business-engineering-text': '25名以上多国籍工程师团队，平均行业经验7年以上的专业集团',
        'business-ai-title': 'AI·DX解决方案事业',
        'business-ai-text': '从RFP到运维的一站式AI/DX解决方案提供',
        'business-iot-title': '智能设备·IoT事业',
        'business-iot-text': '服务机器人日本首次导入的先驱',
        'business-hr-title': 'IT人才服务事业',
        'business-hr-text': '提供综合性人才解决方案',
        'business-blockchain-title': '区块链・Web3事业',
        'business-blockchain-text': '下一代Web3技术和区块链解决方案的开发・导入',
        'business-enterprise-title': '企业解决方案事业',
        'business-enterprise-text': '支持企业数字化转型的综合解决方案',
        
        // Cases Section
        'cases-title': '导入案例',
        'cases-subtitle': '我们的业绩',
        'case-megabank-title': '某大型银行 - AWS共通基础设施构建',
        'case-megabank-text': '下一代基础设施构建·运维保守项目。累计100+人月，持续进行中。构建24/7运维体制，实现高可用性和安全性。',
        'case-medical-title': '上市医疗数据专业公司 - 大数据平台',
        'case-medical-text': '包含大数据分析的数据平台构建·运维保守。累计100+人月，持续进行中。利用AI/ML提供高度的分析环境。',
        'case-nursing-title': '养老设施 - 日本首次服务机器人导入',
        'case-nursing-text': '实现配餐·清扫机器人的日本首次导入。85%的使用者感受到负担减轻。成功将作业时间削减25%～70%。',
        
        // Recruit Section
        'recruit-title': '招聘信息',
        'recruit-subtitle': '加入我们的团队',
        'recruit-requirements-title': '招聘要求（应届生·社会人士）',
        'recruit-position-label': '招聘职位',
        'recruit-position-value': '①IT工程师　②综合职位',
        'recruit-hours-label': '工作时间',
        'recruit-hours-value': '9:00～18:00（休息1小时）周末节假日休息　年假计划性安排',
        'recruit-hours-note': '※工作时间和休假可能因职位或部门而异。可协商。',
        'recruit-allowance-label': '各种补助',
        'recruit-allowance-value': '交通补助、家庭补助、勤续补助、职位补助等',
        'recruit-salary-label': '薪资',
        'recruit-salary-new': '应届生',
        'recruit-salary-mid': '社会招聘',
        'recruit-salary-mid-range': '年收入400～1000万日元',
        'recruit-raise-label': '晋升加薪',
        'recruit-raise-value': '半年一次评定',
        'recruit-trial-label': '试用培训期间',
        'recruit-trial-value': '3个月',
        'recruit-vacation-label': '休假',
        'recruit-vacation-value': '周休2日制　有调养假',
        'recruit-training-label': '培训制度',
        'recruit-training-value': '基于能力开发体系的培训<br>技术技能培训<br>在线培训　OJT',
        'recruit-positions-title': '社会招聘职位',
        
        // Mid-Career Positions
        'position-skills-label': '必要技能:',
        'position-apply-btn': '立即申请',
        'position-ai-title': 'AI工程师',
        'position-ai-description': '负责机器学习模型开发优化、数据管道构建、AI产品实施。在追求最新技术趋势的同时，参与创新解决方案的开发。',
        'position-ai-skills': 'Python, TensorFlow/PyTorch, 机器学习基础知识',
        'position-fullstack-title': '全栈工程师',
        'position-fullstack-description': '负责从前端到后端的整个系统设计开发。在使用现代技术栈的开发环境中充分发挥技术实力。',
        'position-fullstack-skills': 'JavaScript, React, Node.js, 云服务',
        'position-cloud-title': '云架构师',
        'position-cloud-description': '负责企业云迁移战略规划、架构设计、基础设施构建。通过提供可扩展且安全的云解决方案，推进客户的数字化转型。',
        'position-cloud-skills': 'AWS/Azure/GCP, Kubernetes, Infrastructure as Code',
        'position-pm-title': '产品经理',
        'position-pm-description': '统筹AI产品的企划开发运营，将市场需求转化为技术要求。与工程团队紧密协作，引领创新产品的创造。',
        'position-pm-skills': '产品企划经验, 技术理解力, 项目管理',
        'position-devops-title': 'DevOps工程师',
        'position-devops-description': '通过CI/CD管道构建、基础设施自动化、监控系统导入，实现开发流程的效率化和质量提升。',
        'position-devops-skills': 'Docker, Kubernetes, CI/CD, 监控工具',
        'position-ds-title': '数据科学家',
        'position-ds-description': '进行大规模数据分析、统计建模、业务问题解决的洞察提取。从数据中创造价值，支持决策的重要角色。',
        'position-ds-skills': 'R/Python, SQL, 统计学知识',
        
        // Access Section
        'access-title': '交通指南',
        'access-subtitle': '如何到达',
        'access-company-label': '公司名称',
        'access-company-value': 'Terabox株式会社',
        'access-address-label': '地址',
        'access-address-value': '〒104-0045<br>东京都中央区筑地6丁目17-4<br>Reed Sea筑地大厦 4F',
        'access-station-label': '最近车站',
        'access-station-value': '东京地铁日比谷线 筑地站 步行5分钟<br>都营浅草线 东银座站 步行7分钟',
        'access-phone-label': '电话号码',
        'access-phone-value': '03-5542-7798',
        'access-hours-label': '营业时间',
        'access-hours-value': '工作日 9:00 - 18:00<br>(周末节假日休业)',
        'access-map-text': 'Google Maps',
        
        // Contact Section
        'contact-title': '联系我们',
        'contact-subtitle': '联系我们',
        'contact-description': '系统开发、AI/DX解决方案、人才服务等，<br>欢迎随时咨询。',
        'contact-cta': '联系我们',
        
        // Footer
        'footer-copyright': 'TERABOX Copyright © 2024. All Rights Reserved.',
        
        // Engineering Service Page
        'engineering-title': '系统工程事业',
        'engineering-subtitle': '工程服务',
        'engineering-description': '广泛应对客户的IT开发需求，提供高质量的系统开发・运维服务。',
        
        // AI Solution Page
        'ai-title': 'AI・DX解决方案事业',
        'ai-subtitle': 'AI/DX解决方案',
        'ai-description': '从AI・机器学习・DX的导入到运维，提供全面的解决方案。',
        
        // Enterprise Solution Page
        'enterprise-title': '企业解决方案事业',
        'enterprise-subtitle': '企业解决方案',
        'enterprise-description': '提供支持企业数字化转型的综合解决方案。',
        
        // Human Resource Page
        'hr-title': 'IT人才服务事业',
        'hr-subtitle': 'IT人力资源',
        'hr-description': '从优秀IT人才的派遣・介绍到培养，提供综合性人才解决方案。',
        
        // IoT Systems Page
        'iot-title': '智能设备・IoT事业',
        'iot-subtitle': '智能设备与IoT',
        'iot-description': '通过最新的IoT技术和智能设备，实现高效的业务环境。',
        
        // Blockchain Web3 Page
        'blockchain-title': '区块链・Web3事业',
        'blockchain-subtitle': '区块链与Web3',
        'blockchain-description': '支持下一代Web3技术和区块链解决方案的开发・导入。'
    }
};

// Language switching core functionality
function switchLanguage(lang) {
    // Validate language parameter
    if (!translations[lang]) {
        console.warn(`Language "${lang}" not supported. Defaulting to Japanese.`);
        lang = 'ja';
    }

    // Update all elements with data-lang-key attribute
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const activeBtn = document.querySelector(`[data-lang="${lang}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }

    // Store selected language in localStorage
    try {
        localStorage.setItem('terabox-language', lang);
    } catch (e) {
        console.warn('Unable to save language preference to localStorage:', e);
    }

    // Handle language-specific images
    document.querySelectorAll('.lang-image').forEach(img => {
        img.style.display = 'none';
    });
    
    if (lang === 'ja') {
        document.querySelectorAll('.ja-only').forEach(img => {
            img.style.display = 'block';
        });
    } else {
        document.querySelectorAll('.en-zh-only').forEach(img => {
            img.style.display = 'block';
        });
    }

    // Show language switch notification
    const langText = {
        'ja': '日本語に切り替えました',
        'en': 'Switched to English',
        'zh': '已切换到中文'
    };

    showLanguageNotification(langText[lang]);
}

// Show language switch notification with animation
function showLanguageNotification(message) {
    // Remove existing notification
    const existing = document.querySelector('.lang-notification');
    if (existing) {
        existing.remove();
    }

    const notification = document.createElement('div');
    notification.className = 'lang-notification';
    notification.textContent = message;
    
    // Apply inline styles for the notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(45deg, #9FD500, #7FB800);
        color: #000;
        padding: 12px 20px;
        border-radius: 6px;
        font-weight: bold;
        z-index: 10000;
        animation: slideInFade 3s ease-out forwards;
        box-shadow: 0 4px 15px rgba(159, 213, 0, 0.3);
        font-size: 14px;
        min-width: 180px;
        text-align: center;
    `;

    document.body.appendChild(notification);

    // Add animation styles if not already present
    if (!document.querySelector('#lang-notification-styles')) {
        const style = document.createElement('style');
        style.id = 'lang-notification-styles';
        style.textContent = `
            @keyframes slideInFade {
                0% { 
                    transform: translateX(100%); 
                    opacity: 0; 
                }
                15% { 
                    transform: translateX(0); 
                    opacity: 1; 
                }
                85% { 
                    transform: translateX(0); 
                    opacity: 1; 
                }
                100% { 
                    transform: translateX(100%); 
                    opacity: 0; 
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Remove notification after animation completes
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 3000);
}

// Initialize language switching functionality
function initLanguageSwitching() {
    // Load saved language preference or default to Japanese
    let savedLang = 'ja'; // Default language
    
    try {
        savedLang = localStorage.getItem('terabox-language') || 'ja';
    } catch (e) {
        console.warn('Unable to access localStorage:', e);
    }

    // Validate and apply saved language
    if (translations[savedLang]) {
        switchLanguage(savedLang);
    } else {
        switchLanguage('ja');
    }

    // Add event listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const lang = this.getAttribute('data-lang');
            if (lang && translations[lang]) {
                switchLanguage(lang);
            }
        });

        // Add keyboard accessibility
        btn.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
}

// Utility function to get current language
function getCurrentLanguage() {
    try {
        return localStorage.getItem('terabox-language') || 'ja';
    } catch (e) {
        return 'ja';
    }
}

// Utility function to get translation for a specific key
function getTranslation(key, lang = null) {
    const currentLang = lang || getCurrentLanguage();
    return translations[currentLang] && translations[currentLang][key] 
        ? translations[currentLang][key] 
        : translations['ja'][key] || key;
}

// Export functions for potential external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        switchLanguage,
        initLanguageSwitching,
        getCurrentLanguage,
        getTranslation,
        translations
    };
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    initLanguageSwitching();
});

// Export to global scope for direct usage
window.LanguageSwitcher = {
    switchLanguage,
    initLanguageSwitching,
    getCurrentLanguage,
    getTranslation,
    translations
};