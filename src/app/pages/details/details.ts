import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-details',
  imports: [TranslatePipe],
  templateUrl: './details.html',
  styleUrls: ['./details.scss'],
})
export class Details implements OnInit {
  tripId: string | null = '';
  trip: any = null;

  selectedImage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private translate: TranslateService,
  ) {}

  openImageModal(imgUrl: string) {
    this.selectedImage = imgUrl;
  }

  closeImageModal() {
    this.selectedImage = null;
  }

  // البيانات الأصلية باللغة الإنجليزية
  tripsData: { [key: string]: any } = {
    dahab: {
      name: 'Dahab',
      arabicName: 'دهب',
      badge: 'WEEKLY TRIP',
      duration: '4 Days / 3 Night',
      departurePoint: 'Ismailia',
      subtitle: 'Beach • Adventure • Relaxation',
      bannerImage: '/assets/images/Dahabhero.png',
      overview:
        'Escape to Dahab and enjoy a perfect mix of relaxation, adventure and unforgettable moments. Explore the beautiful beaches, enjoy the unique atmosphere of Wadi Star and experience an exciting night full of entertainment.',
      quickInfo: [
        {
          title: 'Departure Location',
          value: 'Ismailia',
          sub: 'View on Map',
          icon: 'map',
        },
        {
          title: 'Transportation',
          value: 'Tourist Bus',
          sub: 'Comfortable & Safe',
          icon: 'bus',
        },
        {
          title: 'Trip Duration',
          value: '4 Days / 3 Night',
          sub: 'Weekly Trip',
          icon: 'calendar',
        },
        {
          title: 'Trip Schedule',
          value: 'Every Week',
          sub: 'Join us every weekend',
          icon: 'clock',
        },
      ],
      featuresGrid: [
        { title: 'غرف مكيفة', subtitle: 'Air-conditioned Rooms', icon: 'bed' },
        { title: 'شاطئ اللاجونا', subtitle: 'Lagoon Beach', icon: 'beach' },
        { title: 'وادي ستار', subtitle: 'Wadi Star', icon: 'mountain' },
        { title: 'حفلة', subtitle: 'Night Party', icon: 'party' },
        { title: 'انتقالات', subtitle: 'Transportation', icon: 'transport' },
        { title: 'الثري بونز', subtitle: 'Free Shari Buz', icon: 'gift' },
      ],
      topThumbnails: [
        '/assets/images/Dahab3.webp',
        '/assets/images/Dahab4.webp',
        '/assets/images/Dahab10.jpg',
        '/assets/images/Dahab5.jpg',
        '/assets/images/Dahab9.jpg',
      ],
      aboutSection: {
        title: 'More Than Just a Trip',
        description:
          "Dahab is not just a destination, it's a feeling. From the crystal-clear waters and golden beaches to the breathtaking mountains and vibrant nightlife, this trip gives you the perfect balance of relaxation and adventure.",
        bulletPoints: [
          'Crystal crystal waters and stunning beaches',
          'Visit the famous Wadi Star',
          'Enjoy the unique Bedouin atmosphere',
          'Unforgettable memories with amazing people',
        ],
        images: [
          '/assets/images/dahab15.jpeg',
          '/assets/images/Dahab6.jpg',
          '/assets/images/Dahab7.jpg',
        ],
      },
      itinerary: [
        {
          activities: [
            'Departure from Ismailia',
            'Shari Buz',
            'Lagoon Beach',
            'Hotel Check-in',
            'Night Party',
            'Breakfast',
            'Wadi Star',
            'Free Time',
            'Return to Ismailia',
          ],
        },
      ],
      included: [
        'Transportation (Tourist Bus)',
        'Hotel Accommodation',
        'Air-conditioned Rooms',
        'Beach Access',
        'Entertainment & Party',
        'Trip Guide',
      ],
    },

    alexandria: {
      name: 'Alexandria',
      arabicName: 'الإسكندرية',
      badge: 'WEEKLY TRIP',
      duration: '1 Day Trip',
      departurePoint: 'Ismailia',
      subtitle: 'Sea • History • Culture',
      bannerImage:
        '/assets/images/Alexandria_beach_Med.5d1221d28cc3b-1080x720.webp',
      overview:
        'Discover the bride of the Mediterranean Sea. Enjoy the historical landmarks, magnificent sea views, and the unique atmosphere of Alexandria in an unforgettable day trip.',
      quickInfo: [
        {
          title: 'Departure Location',
          value: 'Ismailia',
          sub: 'View on Map',
          icon: 'map',
        },
        {
          title: 'Transportation',
          value: 'Tourist Bus',
          sub: 'Comfortable & Safe',
          icon: 'bus',
        },
        {
          title: 'Trip Duration',
          value: '1 Day Trip',
          sub: 'Day Trip',
          icon: 'calendar',
        },
        {
          title: 'Trip Schedule',
          value: 'Every Friday',
          sub: 'Join us every week',
          icon: 'clock',
        },
      ],
      featuresGrid: [
        { title: 'قلعة قايتباي', subtitle: 'Qaitbay Citadel', icon: 'castle' },
        {
          title: 'مكتبة الإسكندرية',
          subtitle: 'Alexandria Library',
          icon: 'book',
        },
        { title: 'كورنيش البحر', subtitle: 'Sea Corniche', icon: 'beach' },
        { title: 'جولة حرة', subtitle: 'Free Tour', icon: 'party' },
        { title: 'انتقالات حديثة', subtitle: 'Modern Bus', icon: 'transport' },
        { title: 'مشرف رحلة', subtitle: 'Tour Guide', icon: 'gift' },
      ],
      topThumbnails: [
        '/assets/images/shutterstock_1091479697-1-800x535.webp',
        '/assets/images/shutterstock_466983986-1-800x534.webp',
        '/assets/images/photo-1594808816834-f716b56c4fc6.webp',
        '/assets/images/Miyami-Beach.webp',
        '/assets/images/قلعة-قايتباي-2.webp',
      ],
      aboutSection: {
        title: 'The Bride of the Mediterranean',
        description:
          'Alexandria combines rich history with breathtaking sea views. Explore ancient wonders, stroll along the famous corniche, and enjoy the vibrant coastal culture.',
        bulletPoints: [
          'Visit the historic Qaitbay Citadel',
          'Explore the iconic Alexandria Library',
          'Enjoy scenic walks along the Mediterranean Corniche',
          'Free time for shopping and local seafood',
        ],
        images: [
          '/assets/images/133-225414-alexandria-tourism-qaitbay-castle-4.webp',
          '/assets/images/360_F_1926020779_Hk02ceSLumkEIfUOsCJ5PbnhrO8FetQP.webp',
          '/assets/images/2022082510571791619_.webp',
        ],
      },
      itinerary: [
        {
          activities: [
            'Departure from Ismailia',
            'Arrive in Alexandria',
            'Visit Qaitbay Citadel',
            'Library of Alexandria Tour',
            'Corniche Walk & Free Time',
            'Return to Ismailia',
          ],
        },
      ],
      included: [
        'Transportation (Tourist Bus)',
        'Sightseeing Admissions',
        'Trip Guide',
      ],
    },

    fayoum: {
      name: 'Fayoum',
      arabicName: 'الفيوم',
      badge: 'WEEKLY TRIP',
      duration: '1 Day Trip',
      departurePoint: 'Ismailia',
      subtitle: 'Nature • Desert • Magic',
      bannerImage: '/assets/images/Fayom3.jpg',
      overview:
        'Experience the ultimate desert adventure in Fayoum. Discover the stunning Wadi El Rayan waterfalls, sandboard on golden dunes, and witness the magic of the desert.',
      quickInfo: [
        {
          title: 'Departure Location',
          value: 'Ismailia',
          sub: 'View on Map',
          icon: 'map',
        },
        {
          title: 'Transportation',
          value: 'Tourist Bus',
          sub: 'Adventure Ready',
          icon: 'bus',
        },
        {
          title: 'Trip Duration',
          value: '1 Day Trip',
          sub: 'Day Trip',
          icon: 'calendar',
        },
        {
          title: 'Trip Schedule',
          value: 'Every Weekend',
          sub: 'Join us every weekend',
          icon: 'clock',
        },
      ],
      featuresGrid: [
        {
          title: 'شلالات وادي الريان',
          subtitle: 'Wadi El Rayan Waterfalls',
          icon: 'waterfall',
        },
        {
          title: 'التزحلق على الرمال',
          subtitle: 'Sandboarding Adventure',
          icon: 'mountain',
        },
        { title: 'جبل المدورة', subtitle: 'El Modawara', icon: 'beach' },
        { title: 'قرية تونس', subtitle: 'Tounis Village', icon: 'party' },
        {
          title: 'حفلة ألوان',
          subtitle: 'Color Festival & Safari',
          icon: 'party',
        },
        {
          title: 'شاي بدوي ومارشميلو',
          subtitle: 'Bedouin Tea & Marshmallows',
          icon: 'gift',
        },
      ],
      topThumbnails: [
        '/assets/images/Fayom4.jpg',
        '/assets/images/Fayom6.jpg',
        '/assets/images/Fayom7.jpg',
        '/assets/images/Fayom8.jpg',
        '/assets/images/Fayom9.jpg',
      ],
      aboutSection: {
        title: 'Nature and Desert Oasis',
        description:
          "Fayoum is Egypt's hidden gem. From breathtaking waterfalls in the middle of nature to thrilling sandboarding experiences, it promises an action-packed day.",
        bulletPoints: [
          'Explore Wadi El Rayan waterfalls',
          'Thrill of sandboarding on desert dunes',
          'Visit the magical Magic Lake',
          'Relaxing Bedouin camp atmosphere',
        ],
        images: [
          '/assets/images/Fayom1.jpg',
          '/assets/images/Fayom2.webp',
          '/assets/images/Fayom5.jpg',
        ],
      },
      itinerary: [
        {
          activities: [
            'Departure from Ismailia',
            'Arrive at Wadi El Rayan Waterfalls',
            'Sandboarding Adventure on the Dunes',
            'Visit Magic Lake & El Modawara Mountain',
            'Tounis Village Tour',
            'Color Party & Bedouin Tea with Marshmallows',
            'Return to Ismailia',
          ],
        },
      ],
      included: [
        'Transportation (Round Trip)',
        '4x4 Desert Safari & Wadi El Rayan Entry',
        'Sandboarding Equipment & Instructions',
        'Color Party & Bedouin Camp Access',
        'Professional Trip Guide',
      ],
    },

    portsaid: {
      name: 'Port Said',
      arabicName: 'بورسعيد',
      badge: 'WEEKLY TRIP',
      duration: '1 Day Trip',
      departurePoint: 'Ismailia',
      subtitle: 'Sea • Beauty • Shopping',
      bannerImage: '/assets/images/Portsaidhero.jpeg',
      overview:
        'Enjoy a wonderful trip and create beautiful memories in Port Said, the city of the sea and beauty. Explore Salt Mountain, historical landmarks, and famous local markets on an unforgettable day trip.',
      quickInfo: [
        {
          title: 'Departure Location',
          value: 'Ismailia',
          sub: 'View on Map',
          icon: 'map',
        },
        {
          title: 'Transportation',
          value: 'Tourist Bus',
          sub: 'Comfortable & Safe',
          icon: 'bus',
        },
        {
          title: 'Trip Duration',
          value: '1 Day Trip',
          sub: 'Day Trip',
          icon: 'calendar',
        },
        {
          title: 'Trip Schedule',
          value: 'Every Friday',
          sub: 'Join us every week',
          icon: 'clock',
        },
      ],
      featuresGrid: [
        { title: 'جبل الملح', subtitle: 'Salt Mountain', icon: 'mountain' },
        { title: 'حديقة فريال', subtitle: 'Ferial Garden', icon: 'park' },
        {
          title: 'سوق السمك الجديد',
          subtitle: 'New Fish Market',
          icon: 'fish',
        },
        { title: 'سوق Outlet', subtitle: 'Outlet Shopping', icon: 'shop' },
        {
          title: 'جولة في طرح البحر',
          subtitle: 'El-Tarah Beach Tour',
          icon: 'beach',
        },
        {
          title: 'السوق التجاري والحميدي',
          subtitle: 'Commercial & El-Hamidi Market',
          icon: 'party',
        },
      ],
      topThumbnails: [
        '/assets/images/Port1.jpeg',
        '/assets/images/Port2.jpeg',
        '/assets/images/Port6.jpeg',
        '/assets/images/Port7.jpeg',
        '/assets/images/Port8.jpeg',
      ],
      aboutSection: {
        title: 'The City of Sea and Beauty',
        description:
          'Port Said is the northern gateway to the Suez Canal. It combines the charm of the Mediterranean Sea with a unique shopping experience in traditional and outlet markets.',
        bulletPoints: [
          'Visit the famous Salt Mountain',
          'Stroll through historic Ferial Garden',
          'Explore the New Fish Market and outlet stores',
          'Enjoy a relaxing walk along Tarh El-Bahr',
        ],
        images: [
          '/assets/images/Port3.jpeg',
          '/assets/images/Port4.jpeg',
          '/assets/images/Port9.jpeg',
        ],
      },
      itinerary: [
        {
          activities: [
            'Departure from Ismailia',
            'Visit Salt Mountain',
            'Explore Ferial Garden',
            'Tour at the New Fish Market & Outlet Shopping',
            'Tarh El-Bahr Walk & Commercial Market Tour',
            'Return to Ismailia',
          ],
        },
      ],
      included: [
        'Transportation (Tourist Bus)',
        'Salt Mountain Entry Ticket',
        'Trip Guide',
      ],
    },
  };

  // الترجمات العربية للبيانات الديناميكية.
  // الصور والـ icons تظل من البيانات الأصلية.
  private arabicTripsData: { [key: string]: any } = {
    dahab: {
      badge: 'رحلة أسبوعية',
      duration: '٤ أيام / ٣ ليالٍ',
      departurePoint: 'الإسماعيلية',
      subtitle: 'شواطئ • مغامرات • استرخاء',
      overview:
        'اهرب من روتين الحياة واستمتع برحلة إلى دهب تجمع بين الاسترخاء والمغامرة واللحظات التي لا تُنسى. اكتشف الشواطئ الجميلة، واستمتع بأجواء وادي ستار المميزة، وعِش ليلة مليئة بالترفيه والمرح.',
      quickInfo: [
        {
          title: 'مكان التجمع',
          value: 'الإسماعيلية',
          sub: 'عرض الخريطة',
        },
        {
          title: 'وسيلة المواصلات',
          value: 'أتوبيس سياحي',
          sub: 'مريح وآمن',
        },
        {
          title: 'مدة الرحلة',
          value: '٤ أيام / ٣ ليالٍ',
          sub: 'رحلة أسبوعية',
        },
        {
          title: 'موعد الرحلة',
          value: 'كل أسبوع',
          sub: 'انضم إلينا في عطلة نهاية الأسبوع',
        },
      ],
      featuresGrid: [
        { title: 'غرف مكيفة', subtitle: 'غرف مكيفة الهواء' },
        { title: 'شاطئ اللاجونا', subtitle: 'شاطئ اللاجونا' },
        { title: 'وادي ستار', subtitle: 'وادي ستار' },
        { title: 'حفلة ليلية', subtitle: 'حفلة ليلية' },
        { title: 'انتقالات', subtitle: 'انتقالات سياحية' },
        { title: 'الثري بونز', subtitle: 'رحلة الثري بونز' },
      ],
      aboutSection: {
        title: 'أكثر من مجرد رحلة',
        description:
          'دهب ليست مجرد وجهة سياحية، بل تجربة مميزة. من المياه الصافية والشواطئ الذهبية إلى الجبال الخلابة والحياة الليلية المليئة بالحيوية، تمنحك هذه الرحلة مزيجًا رائعًا من الاسترخاء والمغامرة.',
        bulletPoints: [
          'مياه صافية وشواطئ ساحرة',
          'زيارة وادي ستار الشهير',
          'الاستمتاع بالأجواء البدوية المميزة',
          'صناعة ذكريات لا تُنسى مع أشخاص رائعين',
        ],
      },
      itinerary: [
        {
          activities: [
            'التحرك من الإسماعيلية',
            'زيارة الثري بونز',
            'الاستمتاع بشاطئ اللاجونا',
            'تسجيل الدخول إلى الفندق',
            'حفلة ليلية',
            'وجبة الإفطار',
            'زيارة وادي ستار',
            'وقت حر',
            'العودة إلى الإسماعيلية',
          ],
        },
      ],
      included: [
        'الانتقالات بأتوبيس سياحي',
        'الإقامة في الفندق',
        'غرف مكيفة',
        'دخول الشاطئ',
        'الترفيه والحفلة',
        'مشرف الرحلة',
      ],
    },

    alexandria: {
      badge: 'رحلة أسبوعية',
      duration: 'رحلة يوم واحد',
      departurePoint: 'الإسماعيلية',
      subtitle: 'البحر • التاريخ • الثقافة',
      overview:
        'اكتشف عروس البحر الأبيض المتوسط واستمتع بالمعالم التاريخية والإطلالات الساحرة على البحر والأجواء المميزة لمدينة الإسكندرية في رحلة يوم واحد لا تُنسى.',
      quickInfo: [
        {
          title: 'مكان التجمع',
          value: 'الإسماعيلية',
          sub: 'عرض الخريطة',
        },
        {
          title: 'وسيلة المواصلات',
          value: 'أتوبيس سياحي',
          sub: 'مريح وآمن',
        },
        {
          title: 'مدة الرحلة',
          value: 'رحلة يوم واحد',
          sub: 'رحلة يومية',
        },
        {
          title: 'موعد الرحلة',
          value: 'كل يوم جمعة',
          sub: 'انضم إلينا كل أسبوع',
        },
      ],
      featuresGrid: [
        { title: 'قلعة قايتباي', subtitle: 'قلعة قايتباي التاريخية' },
        { title: 'مكتبة الإسكندرية', subtitle: 'مكتبة الإسكندرية' },
        { title: 'كورنيش البحر', subtitle: 'كورنيش البحر' },
        { title: 'جولة حرة', subtitle: 'وقت حر للاستكشاف' },
        { title: 'انتقالات حديثة', subtitle: 'أتوبيس حديث' },
        { title: 'مشرف رحلة', subtitle: 'مشرف الرحلة' },
      ],
      aboutSection: {
        title: 'عروس البحر الأبيض المتوسط',
        description:
          'تجمع الإسكندرية بين التاريخ العريق والإطلالات البحرية الخلابة. استكشف المعالم التاريخية، وتنزه على الكورنيش الشهير، واستمتع بالأجواء الساحلية المميزة.',
        bulletPoints: [
          'زيارة قلعة قايتباي التاريخية',
          'استكشاف مكتبة الإسكندرية الشهيرة',
          'التنزه على كورنيش البحر الأبيض المتوسط',
          'وقت حر للتسوق وتجربة المأكولات البحرية المحلية',
        ],
      },
      itinerary: [
        {
          activities: [
            'التحرك من الإسماعيلية',
            'الوصول إلى الإسكندرية',
            'زيارة قلعة قايتباي',
            'جولة في مكتبة الإسكندرية',
            'التنزه على الكورنيش ووقت حر',
            'العودة إلى الإسماعيلية',
          ],
        },
      ],
      included: [
        'الانتقالات بأتوبيس سياحي',
        'دخول المعالم السياحية المحددة',
        'مشرف الرحلة',
      ],
    },

    fayoum: {
      badge: 'رحلة أسبوعية',
      duration: 'رحلة يوم واحد',
      departurePoint: 'الإسماعيلية',
      subtitle: 'الطبيعة • الصحراء • السحر',
      overview:
        'عِش مغامرة صحراوية مميزة في الفيوم. اكتشف شلالات وادي الريان الساحرة، وجرب التزحلق على الكثبان الرملية الذهبية، واستمتع بسحر الطبيعة والصحراء.',
      quickInfo: [
        {
          title: 'مكان التجمع',
          value: 'الإسماعيلية',
          sub: 'عرض الخريطة',
        },
        {
          title: 'وسيلة المواصلات',
          value: 'أتوبيس سياحي',
          sub: 'جاهز للمغامرة',
        },
        {
          title: 'مدة الرحلة',
          value: 'رحلة يوم واحد',
          sub: 'رحلة يومية',
        },
        {
          title: 'موعد الرحلة',
          value: 'كل عطلة نهاية أسبوع',
          sub: 'انضم إلينا كل أسبوع',
        },
      ],
      featuresGrid: [
        {
          title: 'شلالات وادي الريان',
          subtitle: 'شلالات وادي الريان',
        },
        {
          title: 'التزحلق على الرمال',
          subtitle: 'مغامرة التزحلق على الرمال',
        },
        { title: 'جبل المدورة', subtitle: 'جبل المدورة' },
        { title: 'قرية تونس', subtitle: 'قرية تونس' },
        { title: 'حفلة ألوان', subtitle: 'حفلة ألوان وسفاري' },
        {
          title: 'شاي بدوي ومارشميلو',
          subtitle: 'شاي بدوي ومارشميلو',
        },
      ],
      aboutSection: {
        title: 'واحة الطبيعة والصحراء',
        description:
          'الفيوم واحدة من كنوز مصر الخفية. من الشلالات الساحرة وسط الطبيعة إلى مغامرات التزحلق على الرمال، ستعيش يومًا مليئًا بالأنشطة والتجارب الممتعة.',
        bulletPoints: [
          'استكشاف شلالات وادي الريان',
          'تجربة التزحلق على الكثبان الرملية',
          'زيارة بحيرة قارون السحرية',
          'الاستمتاع بأجواء المخيم البدوي',
        ],
      },
      itinerary: [
        {
          activities: [
            'التحرك من الإسماعيلية',
            'الوصول إلى شلالات وادي الريان',
            'مغامرة التزحلق على الكثبان الرملية',
            'زيارة بحيرة قارون وجبل المدورة',
            'جولة في قرية تونس',
            'حفلة ألوان وشاي بدوي مع المارشميلو',
            'العودة إلى الإسماعيلية',
          ],
        },
      ],
      included: [
        'الانتقالات ذهابًا وعودة',
        'سفاري بسيارات الدفع الرباعي ودخول وادي الريان',
        'معدات وتعليمات التزحلق على الرمال',
        'دخول حفلة الألوان والمخيم البدوي',
        'مشرف رحلة محترف',
      ],
    },

    portsaid: {
      badge: 'رحلة أسبوعية',
      duration: 'رحلة يوم واحد',
      departurePoint: 'الإسماعيلية',
      subtitle: 'البحر • الجمال • التسوق',
      overview:
        'استمتع برحلة مميزة واصنع ذكريات جميلة في بورسعيد، مدينة البحر والجمال. اكتشف جبل الملح والمعالم التاريخية وأشهر الأسواق المحلية في رحلة يوم واحد لا تُنسى.',
      quickInfo: [
        {
          title: 'مكان التجمع',
          value: 'الإسماعيلية',
          sub: 'عرض الخريطة',
        },
        {
          title: 'وسيلة المواصلات',
          value: 'أتوبيس سياحي',
          sub: 'مريح وآمن',
        },
        {
          title: 'مدة الرحلة',
          value: 'رحلة يوم واحد',
          sub: 'رحلة يومية',
        },
        {
          title: 'موعد الرحلة',
          value: 'كل يوم جمعة',
          sub: 'انضم إلينا كل أسبوع',
        },
      ],
      featuresGrid: [
        { title: 'جبل الملح', subtitle: 'جبل الملح' },
        { title: 'حديقة فريال', subtitle: 'حديقة فريال التاريخية' },
        {
          title: 'سوق السمك الجديد',
          subtitle: 'سوق السمك الجديد',
        },
        { title: 'سوق Outlet', subtitle: 'التسوق في متاجر الأوتليت' },
        {
          title: 'جولة في طرح البحر',
          subtitle: 'جولة على شاطئ طرح البحر',
        },
        {
          title: 'السوق التجاري والحميدي',
          subtitle: 'السوق التجاري وسوق الحميدي',
        },
      ],
      aboutSection: {
        title: 'مدينة البحر والجمال',
        description:
          'بورسعيد هي البوابة الشمالية لقناة السويس، وتجمع بين سحر البحر الأبيض المتوسط وتجربة تسوق مميزة في الأسواق التقليدية وأسواق الأوتليت.',
        bulletPoints: [
          'زيارة جبل الملح الشهير',
          'التنزه في حديقة فريال التاريخية',
          'استكشاف سوق السمك الجديد ومتاجر الأوتليت',
          'الاستمتاع بجولة هادئة في طرح البحر',
        ],
      },
      itinerary: [
        {
          activities: [
            'التحرك من الإسماعيلية',
            'زيارة جبل الملح',
            'استكشاف حديقة فريال',
            'جولة في سوق السمك الجديد والتسوق في الأوتليت',
            'التنزه في طرح البحر وزيارة السوق التجاري',
            'العودة إلى الإسماعيلية',
          ],
        },
      ],
      included: [
        'الانتقالات بأتوبيس سياحي',
        'تذكرة دخول جبل الملح',
        'مشرف الرحلة',
      ],
    },
  };

  // اختيار بيانات الرحلة حسب اللغة الحالية
  private updateTrip(): void {
    if (!this.tripId || !this.tripsData[this.tripId]) {
      this.trip = null;
      return;
    }

    const originalTrip = this.tripsData[this.tripId];
    const isArabic = this.translate.getCurrentLang() === 'ar';

    if (!isArabic) {
      this.trip = originalTrip;
      return;
    }

    const arabicTrip = this.arabicTripsData[this.tripId];

    this.trip = {
      ...originalTrip,
      ...arabicTrip,
      name: originalTrip.arabicName,

      quickInfo: originalTrip.quickInfo.map((info: any, index: number) => ({
        ...info,
        ...arabicTrip.quickInfo[index],
      })),

      featuresGrid: originalTrip.featuresGrid.map(
        (feature: any, index: number) => ({
          ...feature,
          ...arabicTrip.featuresGrid[index],
        }),
      ),

      aboutSection: {
        ...originalTrip.aboutSection,
        ...arabicTrip.aboutSection,
        images: originalTrip.aboutSection.images,
      },

      itinerary: originalTrip.itinerary.map((item: any, index: number) => ({
        ...item,
        ...arabicTrip.itinerary[index],
      })),

      included: arabicTrip.included,
    };
  }

  openWhatsApp(): void {
    const phoneNumber = '201110497240';
    const tripName = this.trip
      ? this.trip.name
      : this.translate.getCurrentLang() === 'ar'
        ? 'رحلة'
        : 'Trip';
    const message = this.translate.instant('DETAILS.WHATSAPP_MESSAGE', {
      tripName,
    });

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.tripId = params.get('id');
      this.updateTrip();
    });

    // تحديث بيانات الرحلة عند تغيير اللغة
    this.translate.onLangChange.subscribe(() => {
      this.updateTrip();
    });
  }
}
