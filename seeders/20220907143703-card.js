'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'cards',
      [
        {
          cardName: 'The Fool',
          cardNumber: '0',
          suit: 'Trump',
          cardImg: 'https://i.ibb.co/YWM2GZm/m00.jpg',
          fortuneTelling: [
            'Watch for new projects and new beginnings',
            'Prepare to take something on faith',
            'Something new comes your way; go for it'
          ],
          keywords: ['freedom', 'faith', 'inexperience', 'innocence'],
          light: [
            'Freeing yourself from limitation',
            'Expressing joy and youthful vigor',
            'Being open-minded',
            'Taking a leap of faith',
            'Attuning yourself to your instincts',
            'Being eager or curious',
            'Exploring your potential',
            'Embracing innovation and change'
          ],
          shadow: [
            'Being gullible and naive',
            'Taking unnecessary risks',
            'Failing to be serious when required',
            'Being silly or distracted',
            'Lacking experience',
            'Failing to honor well-established traditions and limits',
            'Behaving inappropriately'
          ],
          questionsToAsk: [
            'What would I do if I felt free to take a leap?',
            'How willing am I to be vulnerable and open?',
            'How might past experiences help in this new situation?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'The Magician',
          cardNumber: '1',
          suit: 'Trump',
          cardImg: 'https://i.ibb.co/wB86GxR/m01.jpg',
          fortuneTelling: [
            'A powerful man may play a role in your day',
            'Your current situation must be seen as one element of a much larger plan'
          ],
          keywords: ['capability', 'empowerment', 'activity'],
          light: [
            'Taking appropriate action',
            'Receiving guidance from a higher power',
            'Becoming a channel of divine will',
            'Expressing masculine energy in appropriate and constructive ways',
            'Being yourself in every way'
          ],
          shadow: [
            'Inflating your own ego',
            'Abusing talents',
            'Manipulating or deceiving others',
            'Being too aggressive',
            'Using cheap illusions to dazzle others',
            'Refusing to invest the time and effort needed to master your craft',
            'Taking shortcuts'
          ],
          questionsToAsk: [
            'What am I empowered to do?',
            'How might my abilities come into play?',
            'To what extent am I making the most of my talents?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'The High Priestess',
          cardNumber: '2',
          suit: 'Trump',
          cardImg: 'https://i.ibb.co/XFwR1RF/m02.jpg',
          fortuneTelling: [
            'A mysterious woman arrives',
            'A sexual secret may surface',
            'Someone knows more than he or she will reveal'
          ],
          keywords: ['intuition', 'reflection', 'purity', 'initiation'],
          light: [
            'Listening to your feelings and intuitions',
            'Exploring unconventional spirituality',
            'Keeping secrets',
            'Being receptive',
            'Reflecting instead of acting',
            'Observing others',
            'Preserving purity'
          ],
          shadow: [
            'Being aloof',
            'Obsessing on secrets and conspiracies',
            'Rejecting guidance from spirit or intuition',
            'Revealing all',
            'Ignoring gut feelings',
            'Refusing to become involved, even when involvement is appropriate'
          ],
          questionsToAsk: [
            'What might a rebel against tradition do?',
            "What isn't being said or revealed?",
            'What could be achieved by observing and reflecting?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'The Empress',
          cardNumber: '3',
          suit: 'Trump',
          cardImg: 'https://i.ibb.co/gzNxFwY/m03.jpg',
          fortuneTelling: [
            'Pregnancy is in the cards',
            'An opportunity to be involved in luxurious sexuality is coming',
            'Beware a tendency toward addiction'
          ],
          keywords: ['fertility', 'productivity', 'ripeness', 'nurturing'],
          light: [
            'Nurturing yourself and others',
            'Bearing fruit',
            'Celebrating your body',
            'Bearing (literal or figurative) children',
            'Reveling in luxury',
            'Mothering those around you in positive ways',
            'Enjoying your sexuality',
            'Getting things done'
          ],
          shadow: [
            'Overindulging',
            'Being greedy',
            'Smothering someone with attention',
            'Debilitating someone by being overprotective',
            'Inhibiting productivity by obsessing on productivity',
            'Being overcome by addictive behavior'
          ],
          questionsToAsk: [
            'What would a concerned and capable mother do?',
            'What can I do that would emphasize growth?',
            'How can I celebrate my own sensuality and sexuality?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'The Emperor',
          cardNumber: '4',
          suit: 'Trump',
          cardImg: 'https://i.ibb.co/88j517W/m04.jpg',
          fortuneTelling: [
            'A father figure arrives',
            'A new employer or authority figure will give you orders',
            'Expect discipline or correction in the near future'
          ],
          keywords: ['authority', 'regulation', 'direction', 'structure'],
          light: [
            'Exercising authority',
            'Defining limits',
            'Directing the flow of work',
            'Communicating clear guidelines',
            'Being in control of yourself and others',
            'Tempering aggressive masculinity with wisdom and experience'
          ],
          shadow: [
            'Micromanaging',
            'Crushing the creativity of others with a rigid, iron-fisted approach',
            'Insisting on getting your own way',
            'Assuming a dictatorial mindset',
            'Using overt force to achieve your goals and maintain order'
          ],
          questionsToAsk: [
            'How does the issue of control or regulation impact this situation?',
            'What would a compassionate but strict father do?',
            'What needs more control?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'The Hierophant',
          cardNumber: '5',
          suit: 'Trump',
          cardImg: 'https://i.ibb.co/3zh1rWN/m05.jpg',
          fortuneTelling: [
            'Expect to be caught in a misdeed and punished accordingly',
            'Pray for forgiveness and confess wrongdoings',
            'A more experienced man, spiritual leader, or father figure will come into your life'
          ],
          keywords: ['guidance', 'knowledge', 'revelation', 'belief'],
          light: [
            'Teaching or guiding others',
            'Searching for the truth',
            'Asking for guidance from a higher power',
            'Acknowledging the wisdom and experience of others',
            'Taking vows',
            'Engaging in heartfelt rituals',
            'Volunteering'
          ],
          shadow: [
            'Using experience as a means of manipulating or misguiding others',
            'Being dogmatic',
            'Favoring tradition over what is expedient or necessary',
            'Going through the motions of empty rituals',
            'Concealing wisdom',
            'Restricting access to spiritual truths or the gods'
          ],
          questionsToAsk: [
            'What role might tradition or religion play in this situation?',
            'Who authored the rules? Who enforces them? Why?',
            'How might an experienced guide impact this situation?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'The Lovers',
          cardNumber: '6',
          suit: 'Trump',
          cardImg: 'https://i.ibb.co/tcNCzJf/m06.jpg',
          fortuneTelling: [
            'A new personal or professional relationship blossoms',
            'Sexual opportunities abound',
            'Unexpectedly, a friend becomes a lover'
          ],
          keywords: ['love', 'passion', 'unity', 'choice'],
          light: [
            'Being in love',
            'Showing your love to others',
            'Expressing passion or romantic feelings',
            'Aligning yourself with groups or like-minded others',
            'Bringing people together',
            'Making well-informed decisions'
          ],
          shadow: [
            'Debilitating passion',
            'Allowing an unhealthy desire for love to motivate destructive behavior',
            'Disrupting unity',
            'Working against the best interests of those who care about you',
            'Ill-informed decisions'
          ],
          questionsToAsk: [
            'What guides my choices?',
            'What is my heart leading me to do?',
            'How might this decision transform me as a person?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'The Chariot',
          cardNumber: '7',
          suit: 'Trump',
          cardImg: 'https://i.ibb.co/MCNZvfz/m07.jpg',
          fortuneTelling: [
            'Victory is a certainty',
            'Move ahead with all plans',
            'Beware the jealousy of others'
          ],
          keywords: ['advancement', 'victory', 'triumph', 'success'],
          light: [
            'Breaking through barriers',
            'Moving forward with confidence and authority',
            'Reaching the pinnacle of success',
            'Basking in the glory of achievement',
            'Guiding an effort to total victory',
            'Establishing yourself as a worthy leader'
          ],
          shadow: [
            'Resting on laurels',
            'Riding roughshod over the feelings or expectations of others',
            'Focusing more on past successes than future opportunities',
            'Failing to rein in impulsive behavior'
          ],
          questionsToAsk: [
            'To what extent have I arrived? What will my next challenge be?',
            'How can I use past achievements to their best advantage?',
            'What would the criteria for real and meaningful success be?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Strength',
          cardNumber: '8',
          suit: 'Trump',
          cardImg: 'https://i.ibb.co/8DrhFBy/m08.jpg',
          fortuneTelling: [
            'Your self-control will be tested',
            'A woman will seek to change her partner or lover',
            'You are a strong, capable person'
          ],
          keywords: [
            'discipline',
            'boldness',
            'self-discipline',
            'power',
            'vitality'
          ],
          light: [
            'Imposing restrictions on yourself for your own benefit',
            'Bringing your passions under the control of reason',
            'Resisting impulses that work against your best interests',
            'Taking bold action'
          ],
          shadow: [
            'Indulging weakness, even when you know it will damage your health and happiness',
            'Languishing in addiction',
            'Allowing your instincts to tame and conquer you',
            'Failing to take a stand when necessary'
          ],
          questionsToAsk: [
            'To what extent is your life (or work) balanced?',
            'How can you achieve greater objectivity?',
            'What course of action would be fair to everyone concerned?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'The Hermit',
          cardNumber: '9',
          suit: 'Trump',
          cardImg: 'https://i.ibb.co/cwWG7bt/m09.jpg',
          fortuneTelling: [
            'A period of loneliness begins',
            'One partner in a relationship departs',
            'A search for love or money proves fruitless'
          ],
          keywords: ['solitude', 'experience', 'stillness', 'withdrawal'],
          light: [
            'Becoming or seeking out a guru',
            'Going on a retreat',
            'Recharging spiritual or creative batteries',
            'Lighting the way for those with less experience',
            'Stepping back to gain perspective'
          ],
          shadow: [
            'Being a loner',
            'Fearing contact with others',
            'Becoming a know-it-all',
            'Inflating claims of expertise',
            'Hiding your skills and talents out of fear of unworthiness'
          ],
          questionsToAsk: [
            'What would happen if I simply withdrew and took no action?',
            'How can I get some perspective on the situation?',
            'Who has walked this path before me? How can I enlist his or her help?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Wheel of Fortune',
          cardNumber: '10',
          suit: 'Trump',
          cardImg: 'https://i.ibb.co/28pyYfW/m10.jpg',
          fortuneTelling: [
            'Some events are in the hands of heaven',
            "You've lived through this before",
            'What happened then?'
          ],
          keywords: [
            'luck',
            'randomness',
            'cycles',
            'karma',
            'fate',
            'revolution'
          ],
          light: [
            'Allowing events to unfold',
            'Seeing the larger pattern in everyday events',
            'Trusting your luck',
            'Watching for cycles',
            'Believing that "what goes around, comes around"'
          ],
          shadow: [
            'Losing money gambling',
            'Refusing to do your part to bring a plan to fruition',
            'Taking a fatalistic approach to life',
            'Fighting the natural course of events'
          ],
          questionsToAsk: [
            'How does this challenge fit into a larger pattern?',
            'What role does luck play in my circumstances?',
            'What can I control? How should I know when to relinquish control?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Justice',
          cardNumber: '11',
          suit: 'Trump',
          cardImg: 'https://i.ibb.co/bJ3Zpq5/m11.jpg',
          fortuneTelling: [
            'A legal verdict will be rendered soon',
            'Someone is making a decision',
            'You need to get the facts'
          ],
          keywords: ['balance', 'law', 'fairness', 'objectivity'],
          light: [
            'Making an objective decision',
            'Weighing an issue carefully before taking action',
            'Appropriately scaling your reaction to a situation',
            'Getting all the facts',
            'Considering evidence',
            'Deliberating'
          ],
          shadow: [
            'Delivering harsh criticism',
            'Obsessing on rules and regulations',
            'Playing by the book even when it is destructive or counterproductive to do so',
            'Confusing snap decisions with timely action',
            'Playing favorites'
          ],
          questionsToAsk: [
            'How can I enhance my self-discipline?',
            'What behaviors tempt me? How can I resist?',
            'What instincts do I continue to struggle with today?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'The Hanged Man',
          cardNumber: '12',
          suit: 'Trump',
          cardImg: 'https://i.ibb.co/XsZdBGM/m12.jpg',
          fortuneTelling: [
            'A traitor is revealed',
            'One of your friends is working against you',
            'Change your ways or suffer the consequences'
          ],
          keywords: [
            'enlightenment',
            'sacrifice',
            'perspective',
            'suspension',
            'reversals'
          ],
          light: [
            'Seeing growth opportunities in unpleasant events',
            'Experiencing a dramatic change in personal perspective',
            'Making the best of an unforeseen change in your life or work',
            'Suspending disbelief',
            'Making sacrifices'
          ],
          shadow: [
            'Being untrue to yourself and your values',
            'Refusing to make sacrifices when appropriate',
            'Refusing to adapt to new situations',
            'Blaming others',
            'Profiting at the expense of others'
          ],
          questionsToAsk: [
            'How can I radically alter my perspective?',
            'How might being stuck actually be a blessing in disguise?',
            'How can I help myself see the glass as half full?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Death',
          cardNumber: '13',
          suit: 'Trump',
          cardImg: 'https://i.ibb.co/k1jQ6gN/m13.jpg',
          fortuneTelling: [
            'A relationship or illness ends suddenly',
            'Limit travel and risk-taking',
            'General gloom and doom'
          ],
          keywords: [
            'ending',
            'conclusion',
            'transition',
            'passage',
            'departure'
          ],
          light: [
            'Bringing an unpleasant phase of life to an end',
            'Recognizing and celebrating the conclusion of something',
            'Putting bad habits to rest',
            'Becoming a new person',
            'Leaving one person, place, or thing for another',
            'Letting go'
          ],
          shadow: [
            'Obsessing on death and dying',
            'Refusing to give up old habits or unhealthy relationships',
            'Insisting that everything and everyone should stay the same forever',
            'Failing to take good care of yourself'
          ],
          questionsToAsk: [
            'What needs to end?',
            'How might an ending actually be a blessing in this situation?',
            "What's next?"
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Temperance',
          cardNumber: '14',
          suit: 'Trump',
          cardImg: 'https://i.ibb.co/4jVs1mr/m14.jpg',
          fortuneTelling: [
            "Someone's using drugs or alcohol to excess",
            "It's time to get back on that diet"
          ],
          keywords: [
            'blending',
            'synthesis',
            'mediation',
            'combination',
            'harmony'
          ],
          light: [
            'Bringing opposites together',
            'Moderating your actions or emotions',
            'Finding middle ground',
            'Reaching compromises',
            'Synthesizing solutions that please everyone involved',
            'Using the old to make something new'
          ],
          shadow: [
            'Going to extremes',
            'Disrupting group efforts',
            'Ignoring healthy approaches to life',
            'Becoming an addict',
            'Practicing gluttony',
            'Tearing something or someone apart',
            'Breaking alliances'
          ],
          questionsToAsk: [
            'How can I avoid extremes?',
            'What does everyone involved have in common?',
            'How might combining familiar things help me create something new?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'The Devil',
          cardNumber: '15',
          suit: 'Trump',
          cardImg: 'https://i.ibb.co/FzJL01k/m15.jpg',
          fortuneTelling: [
            'Adultery and unfaithfulness',
            'A string of extremely bad luck is coming your way',
            "Beware evil influences and wolves in sheep's clothing"
          ],
          keywords: ['shadow', 'materialism', 'bondage', 'delusion'],
          light: [
            'Appreciating the luxuries that life has to offer',
            'Being comfortable in your own skin',
            'Enjoying your sexuality',
            'Splurging on an expensive personal item',
            'Embracing the fact that everyone has a darker side',
            'Dealing with unhealthy impulses in healthy ways'
          ],
          shadow: [
            'Putting excessive emphasis on appearances',
            'Always wanting more',
            'Valuing possessions more than people or relationships',
            'Allowing base instincts to govern your life',
            'Being selfish',
            'Attributing your own dark impulses to outside forces or other people'
          ],
          questionsToAsk: [
            'What enslaves me? How can I set myself free?',
            'How can I re-evaluate the importance I assign to material things?',
            'To what extent do my cravings define me?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'The Tower',
          cardNumber: '16',
          suit: 'Trump',
          cardImg: 'https://i.ibb.co/GMtJ8cw/m16.jpg',
          fortuneTelling: [
            'Impending disaster',
            'Cancel plans and reverse decisions',
            'Someone wants to take you down a notch or two',
            "Don't hold back; say what you really mean"
          ],
          keywords: [
            'demolition',
            'upheaval',
            'deconstruction',
            'disaster',
            'destruction'
          ],
          light: [
            'Breaking out of old, confining habits and mindsets',
            'Clearing the way for new growth',
            'Dispelling the influence of an inflated ego',
            'Getting back to basics',
            'Stripping away harmful illusions',
            'Receiving sudden insight'
          ],
          shadow: [
            'Clinging to traditions that repress growth',
            'Engaging in willful blindness',
            'Rejecting evidence that change is needed',
            'Ignoring guidance from a higher power',
            'Maliciously engaging in destructive behavior'
          ],
          questionsToAsk: [
            'How might the current situation dramatically alter my perspective?',
            'How might this loss open the door for new growth?',
            'What attitudes need to be struck down before I proceed?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'The Star',
          cardNumber: '17',
          suit: 'Trump',
          cardImg: 'https://i.ibb.co/B2yVkB7/m17.jpg',
          fortuneTelling: [
            'Get an astrology chart drawn up',
            'Someone is a little too starstruck',
            "What's happening now has long been fore-ordained"
          ],
          keywords: [
            'hope',
            'optimism',
            'openness',
            'certainty',
            'faith',
            'longing',
            'truth'
          ],
          light: [
            'Hoping for the best',
            'Believing good things happen to good people',
            'Seeing events in the best possible light',
            'Adopting a generous spirit',
            'Seeking guidance from above',
            'Embracing possibility over probability'
          ],
          shadow: [
            'Denying unpleasant truths',
            'Denying personal accountability and saying, "Things just happen!"',
            'Ignoring signs and omens',
            'Preferring illusion to reality',
            'Spreading pessimism and stinginess of spirit'
          ],
          questionsToAsk: [
            'What would my higher power direct me to do?',
            'How can I be less self-conscious and guarded?',
            "How can I better attune myself to the abundance of life's blessings?"
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'The Moon',
          cardNumber: '18',
          suit: 'Trump',
          cardImg: 'https://i.ibb.co/CbWRvth/m18.jpg',
          fortuneTelling: [
            'Watch for problems at the end of the month',
            'Someone you know needs to howl at the moon more often',
            'Someone is about to change his or her mind about an important decision'
          ],
          keywords: [
            'mystery',
            'fantasy',
            'imagination',
            'dreams',
            'uncertainty'
          ],
          light: [
            'Enjoying healthy fantasies and daydreams',
            'Using your imagination',
            'Practicing magic or celebrating the magic of everyday life',
            'Attuning yourself to the cycles of nature',
            'Embracing the unknown'
          ],
          shadow: [
            'Becoming unable to separate fantasy from reality',
            'Suffering from delusions',
            'Losing your appreciation for the fantastic or magical',
            'Adopting a ruthlessly logical mindset',
            "Failing to appreciate life's mysteries"
          ],
          questionsToAsk: [
            'How can I face my fears and move forward?',
            'What helpers can serve me as guides through my personal darkness?',
            'How can I deal with the unknown in healthy ways?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'The Sun',
          cardNumber: '19',
          suit: 'Trump',
          cardImg: 'https://i.ibb.co/xMPbxgS/m19.jpg',
          fortuneTelling: [
            "Everything's coming up roses (or sunflowers, whatever the case may be)",
            "Whatever's on your mind, go for it because you can't lose today"
          ],
          keywords: ['joy', 'brilliance', 'validation', 'attention', 'energy'],
          light: [
            'Seeing things clearly',
            'Experiencing intense joy',
            'Celebrating your own successes',
            "Knowing you're good at what you do",
            'Gaining recognition for your personal genius'
          ],
          shadow: [
            'Being dazzled by your own accomplishments',
            'Becoming absorbed in your own self-image',
            'Feeling rushed and distracted',
            'Exerting yourself to the point of exhaustion',
            'Overstating your abilities or misrepresenting your achievements'
          ],
          questionsToAsk: [
            'How can I take best advantage of the attention coming my way?',
            'What are my highest spiritual goals?',
            'How can I avoid being bedazzled by the energy swirling around me?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Judgement',
          cardNumber: '20',
          suit: 'Trump',
          cardImg: 'https://i.ibb.co/4FhQCZ5/m20.jpg',
          fortuneTelling: [
            'An old issue you thought was over will come up again today',
            'Get ready for huge changes: break-ups, sudden calls from old friends, and unexpected setbacks',
            "God's trying to get your attention"
          ],
          keywords: [
            'revival',
            'renewal',
            'resurrection',
            'evaluation',
            'invitation'
          ],
          light: [
            'Receiving a wake-up call',
            'Discovering a new purpose in life',
            'Becoming totally and completely yourself',
            'Receiving a well-deserved reward',
            'Passing an evaluation or examination',
            'Welcoming the start of a new phase of life'
          ],
          shadow: [
            'Being weighed in the balances and found wanting',
            'Failing to measure up to a well-defined standard',
            'Being caught goofing off or misbehaving',
            'Failing to prepare for an examination you know is coming',
            'Rejecting an opportunity to reinvent yourself'
          ],
          questionsToAsk: [
            'What is the main thing I need to realize about myself?',
            'In what way might the universe be trying to get my attention?',
            'If I were to reinvent myself, what would I become?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'The World',
          cardNumber: '21',
          suit: 'Trump',
          cardImg: 'https://i.ibb.co/JxNJwZQ/m21.jpg',
          fortuneTelling: [
            'Winning the lottery',
            "Getting your heart's desire",
            'Having everything you ever imagined having'
          ],
          keywords: [
            'wholeness',
            'integration',
            'totality',
            'completeness',
            'fullness'
          ],
          light: [
            'Having it all',
            'Knowing and loving yourself as completely as possible',
            'Seeing the interconnection of all things and people',
            'Enhancing your perspective',
            'Living life to its fullest',
            'Understanding the meaning of life'
          ],
          shadow: [
            'Allowing greed and envy to prevent you from enjoying what you do possess',
            'Failing to see the larger design in ordinary events',
            'Believing that everything that exists can be touched, counted, or measured',
            'Failing to see the divine reflected in those around you'
          ],
          questionsToAsk: [
            'For me, what would having it all mean?',
            'How aware am I of my own connectedness to the world around me?',
            'What keeps me from having it all right now, today?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Ace of Cups',
          cardNumber: 'C1',
          suit: 'Cups',
          cardImg: 'https://i.ibb.co/Kykz2YY/c01.jpg',
          fortuneTelling: [
            'Romance is in the cards',
            'A new relationship or marriage is just around the corner',
            'Prayers are answered'
          ],
          keywords: ['intuition', 'spirituality', 'affection', 'motivation'],
          light: [
            'Trusting your feelings',
            'Opening yourself to spirit',
            'Accepting and returning affection',
            'Getting in touch with what motivates you',
            'Taking advantage of an opportunity to express love to others',
            'Listening to the still, small voice'
          ],
          shadow: [
            'Hiding your feelings',
            'Spurning an opportunity to love or be loved',
            'Numbing yourself to spiritual yearnings',
            'Rejecting the counsel of your heart',
            'Becoming a puppet of your own emotions',
            'Indulging in hysteria or obsession'
          ],
          questionsToAsk: [
            'What am I feeling right now?',
            'How would I go about opening myself to spiritual guidance?',
            'What motivates me the most - pleasure or pain? Why?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Two of Cups',
          cardNumber: 'C2',
          suit: 'Cups',
          cardImg: 'https://i.ibb.co/ctDnhTh/c02.jpg',
          fortuneTelling: [
            'Someone has a secret crush on you',
            'Relationships should be mutual; get rid of a leech'
          ],
          keywords: ['union', 'attraction', 'combination', 'affection'],
          light: [
            'Being drawn to someone',
            'Longing for someone or something',
            'Acting on your desires',
            'Discovering a feeling is mutual',
            'Doing what makes you feel good',
            'Merging',
            'Healing broken ties',
            'Admitting two people feel differently about each other and moving on'
          ],
          shadow: [
            'Burning bridges',
            'Becoming caught up in unhealthy codependency',
            'Shutting out anyone but your chosen few',
            'Obsessing on someone who does not return your affections',
            'Despairing over finding "The One"',
            'Deceiving yourself about your true orientation'
          ],
          questionsToAsk: [
            'How can I make sure that what I\'m feeling is mutual?","When was the last time I felt "in love" with someone or something?',
            'What do you need in order to feel emotionally stable?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Three of Cups',
          cardNumber: 'C3',
          suit: 'Cups',
          cardImg: 'https://i.ibb.co/n6fKzJT/c03.jpg',
          fortuneTelling: [
            "Unconventional romance is coming your way: a love affair with someone you've always dismissed"
          ],
          keywords: ['celebration', 'expression', 'community', 'friendliness'],
          light: [
            'Celebrating your feelings or connections with others',
            'Expressing joy through song, dance, or physical affection',
            'Working together with others who share your feelings',
            'Performing acts of service as a way of saying, "I love you"',
            'Embracing unconventional romantic arrangements'
          ],
          shadow: [
            'Mistaking giddiness for true affection',
            'Being dominated by manic emotions',
            'Expecting everyone to always feel the same way you do',
            'Demanding unreasonable support from friends or family',
            'Partying to a dangerous or unhealthy extent'
          ],
          questionsToAsk: [
            "What's worth celebrating in my life?",
            'How can I demonstrate my feelings in appropriate ways?',
            'What can I do to show my partner how I really feel?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Four of Cups',
          cardNumber: 'C4',
          suit: 'Cups',
          cardImg: 'https://i.ibb.co/L1fx2vx/c04.jpg',
          fortuneTelling: [
            'A lover is getting restless',
            'Find out what he or she needs, or new opportunities may lure your partner away'
          ],
          keywords: [
            'boredom',
            'listlessness',
            'lethargy',
            'stability',
            'ingratitude'
          ],
          light: [
            'Maintaining your emotional stability',
            'Refusing to give in to overwhelming emotions',
            'Appreciating what you have and refusing to take it for granted',
            'Seeing the value of long-term commitments'
          ],
          shadow: [
            'Being bored',
            'Daydreaming at the expense of your work',
            'Refusing to be engaged by opportunity',
            'Taking people and relationships for granted',
            'Ignoring romantic or spiritual opportunities',
            'Spurning inspiration',
            'Feeling everything should stay "just like it is"'
          ],
          questionsToAsk: [
            'How can I use this "downtime" to my best advantage?',
            "How can I show my partner that I don't take him or her for granted?",
            'To what extent is my mood blinding me to new opportunities?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Five of Cups',
          cardNumber: 'C5',
          suit: 'Cups',
          cardImg: 'https://i.ibb.co/crZTLMQ/c05.jpg',
          fortuneTelling: [
            'A breakup looms',
            "Don't cry over spilt milk",
            'Take your lumps and get back in the saddle'
          ],
          keywords: [
            'loss',
            'despair',
            're-evaluation',
            'regret',
            'uncertainty',
            'repentance'
          ],
          light: [
            'Acknowledging loss and moving on',
            'Focusing on how the glass remains "half-full"',
            'Finding the silver lining in a dark cloud',
            'Recognizing that loss is a natural part of life',
            'Embracing healthy grief',
            'Learning lessons from harsh consequences'
          ],
          shadow: [
            'Wallowing in unhealthy grief or self-pity',
            'Refusing to move on and let go',
            'Clinging to the past',
            'Obsessing on past lives and past loves',
            'Failing to live in the present',
            'Beating yourself up over past mistakes',
            'Allowing fear of failure to limit your efforts'
          ],
          questionsToAsk: [
            'How do I tend to deal with loss?',
            'What life lesson might I be learning now?',
            'How can I shift my attention from the past to the future?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Six of Cups',
          cardNumber: 'C6',
          suit: 'Cups',
          cardImg: 'https://i.ibb.co/nzJZnVf/c06.jpg',
          fortuneTelling: [
            'A stingy spirit is strangling your enjoyment of life',
            "Loosen up and think of others for once, why don't you?"
          ],
          keywords: [
            'charity',
            'sharing',
            'sacrifice',
            'cooperation',
            'fairness'
          ],
          light: [
            'Donating your time and talents to others',
            'Taking satisfaction in knowing how your efforts will aid others',
            'Creating a "win-win" scenario',
            'Giving even when you know repayment is not possible',
            'Being motivated to do a good deed'
          ],
          shadow: [
            'Linking your sense of self-worth to the appraisals of others',
            'Striving to appear more needy than you really are',
            'Taking undeserved or unmerited charity',
            'Bragging about your charitable efforts',
            'Profiteering in times of distress',
            'Refusing to share a burden'
          ],
          questionsToAsk: [
            'What gifts do I possess? How freely do I give them?',
            'How can I practice unconditional giving?',
            'How would things change if I became a more charitable person?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Seven of Cups',
          cardNumber: 'C7',
          suit: 'Cups',
          cardImg: 'https://i.ibb.co/SvjXMNZ/c07.jpg',
          fortuneTelling: [
            "You're being fed a line",
            'Rather than be dazzled by fancy words and promises, demand something real'
          ],
          keywords: ['imagination', 'dreams', 'illusions', 'goals'],
          light: [
            'Motivating yourself with images of future success',
            'Using visualization to encourage progress',
            'Taking an imaginative or creative approach to problem solving',
            'Making dreams come true',
            'Gleaning insight from personal visions'
          ],
          shadow: [
            'Obsessing on imaginary fears or uncertain consequences',
            'Giving in to emotional or political terrorism',
            'Spending more time dreaming than working',
            'Failing to envision the possible repercussions of your choices',
            'Being controlled by fear'
          ],
          questionsToAsk: [
            'What do you want most? What do you fear most? How are these related?',
            'How is your imagination working for you? Against you?',
            'How might a clearer personal vision help you choose a single cup from the many available?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Eight of Cups',
          cardNumber: 'C8',
          suit: 'Cups',
          cardImg: 'https://i.ibb.co/5v6zmJk/c08.jpg',
          fortuneTelling: [
            'Someone\'s "stepping out" on you, now or in the near future',
            "Maybe it's time to quit talking about the problem and just move on"
          ],
          keywords: [
            'longing',
            'dissatisfaction',
            'quest',
            'departure',
            'withdrawal'
          ],
          light: [
            'Wanting something better',
            'Blazing your own trail',
            'Realizing there must be more to life',
            'Leaving an unhealthy situation behind',
            'Starting your own business',
            'Going on a retreat',
            'Seeking the "still, small voice"'
          ],
          shadow: [
            'Being implacable',
            'Finding fault',
            'Nitpicking',
            'Refusing to settle down',
            'Running away from problems or confrontations',
            'Saying, "It\'s my way or the highway!"',
            'Harping on past mistakes and disappointments',
            'Threatening to quit as a strategy to get your way'
          ],
          questionsToAsk: [
            'What do I need to leave behind once and for all?',
            'If I left in search of "more," what would I be looking for, exactly?',
            'How might a retreat enhance my perspective?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Nine of Cups',
          cardNumber: 'C9',
          suit: 'Cups',
          cardImg: 'https://i.ibb.co/xgZ2NL6/c09.jpg',
          fortuneTelling: ["Whatever you want, you'll get it"],
          keywords: ['satisfaction', 'sensuality', 'luxury', 'pleasure'],
          light: [
            'Being delighted with your own achievements',
            'Recognizing your own talents and abilities',
            'Reveling in the good things life has to offer',
            'Indulging yourself',
            'Relaxing and unwinding',
            'Having everything you need in order to feel complete'
          ],
          shadow: [
            'Being smug',
            'Satisfying yourself at the expense of others',
            'Being selfish',
            'Over-indulging',
            'Avoiding work that needs to be done',
            'Claiming achievements or skills you do not possess',
            'Never being satisfied, no matter how much you have'
          ],
          questionsToAsk: [
            'What is true happiness?',
            'If I could have anything, what would I have?',
            'What is my attitude toward luxury? Do I deserve it?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Ten of Cups',
          cardNumber: 'C10',
          suit: 'Cups',
          cardImg: 'https://i.ibb.co/s2pnBbf/c10.jpg',
          fortuneTelling: [
            'Marriage and family are in the cards',
            'Expect a friendship to blossom into a romance'
          ],
          keywords: ['joy', 'fulfillment', 'overwhelming emotion', 'giddiness'],
          light: [
            'Having more than you ever dreamed',
            "Being deeply thankful for all you've been given",
            'Recognizing the Hand of God in the gifts the Universe brings your way',
            'Experiencing transcendent joy',
            'Achieving domestic bliss'
          ],
          shadow: [
            'Comparing your achievements or relationships to unrealistic fantasy standards',
            'Experiencing emotions so intense they blunt your ability to cope with reality',
            'Feeling overwhelmed',
            'Envying the achievements and happiness of others'
          ],
          questionsToAsk: [
            'Who gets to define what "joy" consists of?',
            'What course of action is available when you feel overwhelmed?',
            'How might vows or promises play a role in achieving a greater level of joy in your life?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Page of Cups',
          cardNumber: 'C11',
          suit: 'Cups',
          cardImg: 'https://i.ibb.co/BPsx3Qk/c11.jpg',
          fortuneTelling: [
            'This card represents a young man or woman with a watery, dreamy demeanor, likely born a Libra, Scorpio, or Sagittarius, who wants to start a new relationship with you'
          ],
          keywords: [
            'enthusiasm',
            'first impressions',
            'romanticism',
            'superficiality'
          ],
          light: [
            'Showing your emotions freely',
            'Throwing yourself into romance',
            'Nursing a secret crush',
            'Indulging in romantic fantasy',
            'Starting a new relationship',
            'Recalling your first love',
            'Experiencing love for the first time',
            'Converting to a new religion'
          ],
          shadow: [
            'Mistaking a crush for true love',
            'Reading romantic intention into innocent action',
            'Frantically trying to impress others',
            'Indulging in overly-sweet sentimentality',
            'Pretending to more romantic or spiritual experience than you possess'
          ],
          questionsToAsk: [
            'How worried are you that others will see you as foolish or inexperienced?',
            'To what extent can you be honest about your lack of experience in love and faith?',
            'How can you maintain enthusiasm over time?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Knight of Cups',
          cardNumber: 'C12',
          suit: 'Cups',
          cardImg: 'https://i.ibb.co/j5nBwdb/c12.jpg',
          fortuneTelling: [
            'This card represents a man with an emotional, sensitive personality, likely born between October 13th and November 11th, who wants you to rally around his latest passionate cause'
          ],
          keywords: ['fervor', 'zeal', 'moodiness', 'illumination'],
          light: [
            'Being deeply committed to a cause',
            'Giving in to strong emotions, from excitement to depression',
            'Acting on intuition alone',
            'Solving problems intuitively',
            'Believing in and basing decisions on ideals instead of realities',
            'Bringing intuition or passion to the table'
          ],
          shadow: [
            'Becoming a fanatic',
            'Rejecting information that suggests your intuitions are misguided',
            'Allowing your emotions to control you',
            'Giving in to jealousy, confrontation, and peer pressure',
            'Hiding or ignoring intuitive insights'
          ],
          questionsToAsk: [
            'How prone to emotional extremes are you?',
            "What's the difference in driving passion and blind zeal?",
            'How can you inspire others without inciting a riot?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Queen of Cups',
          cardNumber: 'C13',
          suit: 'Cups',
          cardImg: 'https://i.ibb.co/Cnc5FLs/c13.jpg',
          fortuneTelling: [
            'This card represents a woman with an emotional, deeply spiritual nature, likely born between June 11th and July 11th, who uses emotional and spiritual appeals to sway others to her point of view'
          ],
          keywords: [
            'insightfulness',
            'spirituality',
            'compassion',
            'empathy',
            'instinct'
          ],
          light: [
            'Allowing yourself to be moved by the plight of others',
            'Feeling strong emotions',
            'Possessing unusual sympathy or empathy',
            'Trusting your feelings to guide you',
            'Calling on psychic abilities',
            'Achieving unity with Spirit'
          ],
          shadow: [
            'Becoming so caught up in matters of Spirit, you become detached from the world',
            'Allowing empathy to disable you (instead of inspire action)',
            'Using psychic abilities to wield covert influence',
            'Wallowing in emotionalism, sentiment, or self-pity'
          ],
          questionsToAsk: [
            'How do I handle strong emotions?',
            'To what extent am I a victim of my own feelings?',
            'How can I move from reflection to action?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'King of Cups',
          cardNumber: 'C14',
          suit: 'Cups',
          cardImg: 'https://i.ibb.co/Rgb0whs/c14.jpg',
          fortuneTelling: [
            'This card represents an older man with a gentle, sensitive presence, likely born between February 9th and March 10th, who is known for his fairness and tolerance'
          ],
          keywords: ['wisdom', 'diplomacy', 'restraint', 'composure'],
          light: [
            'Keeping a stiff upper lip',
            'Being brave and clear in the face of adverse circumstances',
            'Sharing experience as a way of comforting others',
            'Making fair and empathetic decisions',
            'Honoring the spirit, not just the letter, of the law'
          ],
          shadow: [
            'Allowing yourself to become rigid and unemotional',
            'Making unfair decisions based on a hidden agenda',
            'Making decisions without regard for their emotional impact on others',
            'Abusing spiritual authority',
            'Using emotional or spiritual leverage to exercise unhealthy control over others'
          ],
          questionsToAsk: [
            'What wise person could be consulted for good advice?',
            "How can I make sure I'm being as objective and fair as possible?",
            'To what extent am I capable of keeping a "stiff upper lip?"'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Ace of Swords',
          cardNumber: 'S1',
          suit: 'Swords',
          cardImg: 'https://i.ibb.co/xL3m5TB/s01.jpg',
          fortuneTelling: [
            'The time to make a choice is now',
            'Stop wavering and do what you know is best'
          ],
          keywords: ['logic', 'objectivity', 'intellect', 'choice'],
          light: [
            'Making objective decisions',
            'Applying logic',
            'Reasoning your way out of a difficult situation',
            'Solving puzzles',
            'Thinking things through',
            'Emphasizing the facts',
            'Clearing your mind',
            'Seeking clarity'
          ],
          shadow: [
            'Applying ruthless or twisted logic',
            'Gloating over your own superior intellect',
            'Using quick thinking to deceive or confuse others',
            'Confusing snap judgments with quick thinking',
            'Making decisions without thinking through consequences'
          ],
          questionsToAsk: [
            'If I made my decision purely based on reason and logic, what would my decision be?',
            'What do I think about my own problem-solving ability?',
            'Who can supply me with the pure and simple facts?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Two of Swords',
          cardNumber: 'S2',
          suit: 'Swords',
          cardImg: 'https://i.ibb.co/cg4ghrV/s02.jpg',
          fortuneTelling: [
            'Sometimes, the only way to win is to refuse to fight',
            "You're stuck for now; let time pass before taking action"
          ],
          keywords: ['denial', 'debate', 'impasse', 'truce'],
          light: [
            'Refusing to make a decision without getting the facts',
            'Exploring both sides of an argument',
            'Arguing passionately for what you believe in',
            'Weighing the issues',
            'Encouraging the open exchange of ideas',
            'Discussing political or religious issues without getting "hot under the collar"'
          ],
          shadow: [
            'Rejecting evidence that conflicts with dearly-held beliefs',
            'Arguing with others just for the sake of doing so',
            'Nit-picking',
            "Putting off a decision because you're afraid to face the consequences",
            'Preventing others from getting the information they need to make good decisions'
          ],
          questionsToAsk: [
            'What information do I need to get past this impasse?',
            'How can I get past being defensive and see the facts?',
            'What viewpoints, other than my own, play a role in this situation?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Three of Swords',
          cardNumber: 'S3',
          suit: 'Swords',
          cardImg: 'https://i.ibb.co/d7kMPsq/s03.jpg',
          fortuneTelling: [
            'Breakups and infidelity abound',
            'What hurts now, though, will turn out to be good for you later on'
          ],
          keywords: [
            'variance',
            'difference',
            'dissatisfaction',
            'heartache',
            'rejection'
          ],
          light: [
            'Being brave enough to see things as they really are',
            'Exercising your critical eye',
            'Being your own best critic',
            "Acknowledging that things don't always turn out as planned",
            'Moving past heartbreak to embrace a painful truth'
          ],
          shadow: [
            'Wallowing in despair',
            'Allowing yourself to be completely crushed by the thoughts, words, or deeds of another',
            'Judging yourself too harshly',
            'Holding yourself to an unrealistic standard of excellence',
            'Wearing your heart on your sleeve while carrying a chip on your shoulder'
          ],
          questionsToAsk: [
            'How can I get past my depression?',
            'To what extent are my emotions a matter of choice?',
            'How can I learn from the mistakes of the past?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Four of Swords',
          cardNumber: 'S4',
          suit: 'Swords',
          cardImg: 'https://i.ibb.co/6gR0yQ3/s04.jpg',
          fortuneTelling: [
            "Don't make any decision now",
            "Wait, and you'll be glad you did"
          ],
          keywords: ['meditation', 'contemplation', 'perspective', 'mindset'],
          light: [
            'Thinking over your plans before putting them into action',
            'Pausing to meditate or clear your mind',
            'Taking time to understand someone or something before criticizing it',
            'Resting',
            'Occupying your thoughts with a healthy distraction'
          ],
          shadow: [
            'Failing to think things through',
            'Mistaking procrastination for thoughtfulness',
            'Adopting a point of view and refusing to reconsider your conclusions, even when presented with refuting evidence',
            'Allowing chaos and whimsy to dominate your thoughts'
          ],
          questionsToAsk: [
            'How long has it been since you deliberately took a "time out?"',
            'How difficult is it for you to meditate?',
            'What would happen if you simply refused to make a decision today?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Five of Swords',
          cardNumber: 'S5',
          suit: 'Swords',
          cardImg: 'https://i.ibb.co/DwxnjZy/s05.jpg',
          fortuneTelling: [
            'Someone is stealing from you, financially or romantically',
            'Be wary of friends who talk behind your back'
          ],
          keywords: [
            'selfishness',
            'hostility',
            'irrationality',
            'self-preservation'
          ],
          light: [
            'Acting in your own best interest',
            'Choosing to stand up for yourself',
            'Not backing down from disagreement and discord',
            'Taking a stand',
            'Refusing to go along with an unethical plan',
            'Knowing when to bend the rules'
          ],
          shadow: [
            'Taking advantage of others',
            'Intimidating others',
            'Acting in an unethical manner',
            'Picking fights',
            'Using words to goad others into violence and irrationality',
            "Ignoring rules you've agreed to abide by",
            'Looking out for yourself while allowing harm to come to others',
            'Gloating over victory'
          ],
          questionsToAsk: [
            'How do I behave when I win? What does that say about me?',
            "How can I do what's necessary without making others feel defeated?",
            "What's the difference between selfish action and acting in my own best interest?"
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Six of Swords',
          cardNumber: 'S6',
          suit: 'Swords',
          cardImg: 'https://i.ibb.co/n6YxyYB/s06.jpg',
          fortuneTelling: [
            "You'll soon go on a long journey over water",
            'Actions have unexpected consequences, so be prepared'
          ],
          keywords: ['adaptation', 'adjustments', 'science', 'travel'],
          light: [
            'Making the best of a bad situation',
            'Recovering from defeat',
            'Resetting expectations',
            'Making allowances for unexpected circumstances',
            'Helping others who find themselves in dire circumstances',
            'Changing the way you see the world',
            'Broadening your perspective through study or travel'
          ],
          shadow: [
            'Refusing to accept that things have changed',
            'Playing the victim',
            'Rejecting the idea that your actions have consequences',
            'Applying scientific criteria to matters of faith, or confusing faith with science',
            'Believing the whole world should be like your small corner of it'
          ],
          questionsToAsk: [
            'What assumptions govern my thinking?',
            'How willing am I to lend aid to others? To request it when I need it?',
            'How prepared am I to deal with change? With unexpected outcomes?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Seven of Swords',
          cardNumber: 'S7',
          suit: 'Swords',
          cardImg: 'https://i.ibb.co/2WFLBBH/s07.jpg',
          fortuneTelling: [
            "Don't assume people around you are worthy of your trust",
            "Ask for an accounting of where people have been, and what they've been doing"
          ],
          keywords: ['dishonesty', 'presumption', 'sneakiness', 'assumptions'],
          light: [
            "Refusing to do something dishonest, even when there's no chance of ever being caught",
            'Handling a difficult situation with finesse',
            'Pointing out assumptions',
            'Acting ethically in public and in private',
            'Living a life that is beyond reproach'
          ],
          shadow: [
            'Stealing or lying',
            'Doing whatever you can get away with, simply because you can',
            'Looking for a way around consequences',
            'Justifying wicked behavior by focusing on the wickedness of others',
            'Failing to examine your own motives and prejudices'
          ],
          questionsToAsk: [
            'What assumptions am I making?',
            'How well-defined is my sense of ethics?',
            'How should I respond when I know others are breaking the rules?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Eight of Swords',
          cardNumber: 'S8',
          suit: 'Swords',
          cardImg: 'https://i.ibb.co/Gs2hkBG/s08.jpg',
          fortuneTelling: [
            'Get over playing the victim',
            'Once you realize you are your own biggest obstacle, nothing can hold you back'
          ],
          keywords: [
            'restriction',
            'limitation',
            'confinement',
            'helplessness'
          ],
          light: [
            'Honoring limits',
            'Respecting the rules',
            "Deciding to go on a diet for your health's sake",
            'Recognizing you cannot always be in control',
            'Identifying obstacles to further progress',
            'Refusing to think about unhealthy or unethical options',
            'Asking for assistance'
          ],
          shadow: [
            'Feeling trapped',
            'Being lost in a maze of rules and regulations',
            'Giving in to despair',
            'Playing the victim',
            'Allowing others to dictate what you can and cannot do',
            'Being rendered helpless',
            'Having very few options',
            'Failing to look for a way out'
          ],
          questionsToAsk: [
            "Who's empowered to cut through the red tape?",
            'What, exactly, are the obstacles? What resources, exactly, are needed to move them?',
            'To what extent is your powerlessness a matter of attitude?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Nine of Swords',
          cardNumber: 'S9',
          suit: 'Swords',
          cardImg: 'https://i.ibb.co/MPb2xPg/s09.jpg',
          fortuneTelling: [
            "If you take the action you're considering now, you'll be sorry in the future"
          ],
          keywords: ['remorse', 'worry', 'distraught', 'conclusion'],
          light: [
            'Refusing to worry about what you cannot control',
            'Rejecting anxiety',
            'Judging your own performance with kindness and gentleness',
            'Using meditation to quiet a troubled mind',
            'Confronting nightmares and fears',
            'Drawing a conclusion and putting an issue out of your mind'
          ],
          shadow: [
            'Torturing yourself with regrets',
            'Second-guessing your every move',
            'Beating yourself up for your mistakes',
            'Depression',
            'Obsessing on errors and overlooked details',
            'Refusing to handle stress in healthy ways',
            'Ruining your ability to appreciate the present by dwelling on the past',
            'Debating irreversible decisions'
          ],
          questionsToAsk: [
            'What role does worry play in your current situation?',
            "To what other ends might you devote the energy you're giving to anxiety?",
            "How can you know when it's time to stop thinking and start acting?"
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Ten of Swords',
          cardNumber: 'S10',
          suit: 'Swords',
          cardImg: 'https://i.ibb.co/pLK5JVh/s10.jpg',
          fortuneTelling: [
            'Disaster',
            'Put off plans and do not take action until omens are better'
          ],
          keywords: ['exhaustion', 'ruin', 'disaster', 'stamina', 'obsession'],
          light: [
            "Seeing the signs that you've reached your limits",
            'Paying attention to what your body is trying to tell you',
            'Giving in to the need for rest and renewal',
            "Acknowledging that you've hit bottom",
            'Committing to a turnaround',
            'Knowing the worst is over'
          ],
          shadow: [
            'Accepting defeat prematurely',
            'Driving yourself to total exhaustion, especially mentally',
            'Experiencing a mental breakdown',
            'Obsessing on a problem to the breaking point',
            'Giving up',
            'Refusing to move from thought to action',
            'Deeply unhealthy thoughts'
          ],
          questionsToAsk: [
            'What are the signs that the time for debate is over?',
            'How can you tell when interest has given way to obsession?',
            'When your own limits are reached, where can you turn for aid?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Page of Swords',
          cardNumber: 'S11',
          suit: 'Swords',
          cardImg: 'https://i.ibb.co/q55GxRv/s11.jpg',
          fortuneTelling: [
            'This card represents a young man or woman with an airy, intellectual demeanor, likely born a Capricorn, Aquarius, or Pisces, who wants to learn something new from you or have a discussion with you'
          ],
          keywords: ['student', 'apprentice', 'scholarship', 'information'],
          light: [
            'Pursuing a course of study',
            'Asking good questions',
            'Investing time in study and practice',
            'Doing research',
            'Making a habit of learning new things',
            'Starting an investigation',
            'Outlining what you need to know',
            'Finding a mentor or teacher'
          ],
          shadow: [
            'Pretending to knowledge or sophistication you do not possess',
            'Cheating on an exam',
            'Feigning interest as a way of gaining favor',
            "Considering only the evidence that supports conclusions you've already drawn",
            'Rejecting the wise counsel of experienced teachers'
          ],
          questionsToAsk: [
            'How comfortable are you with revealing your own ignorance?',
            'What are the marks of a good student?',
            'To what extent are you open to new information?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Knight of Swords',
          cardNumber: 'S12',
          suit: 'Swords',
          cardImg: 'https://i.ibb.co/0nC7V9X/s12.jpg',
          fortuneTelling: [
            'A blunder leads someone to say something he or she regrets',
            'If this was you, be prepared to apologize and move on'
          ],
          keywords: [
            'bluntness',
            'intelligence',
            'incisiveness',
            'investigation'
          ],
          light: [
            'Speaking your mind',
            'Making your opinions known',
            'Offering constructive criticism',
            'Sharing your knowledge',
            'Making insightful observations',
            'Pinpointing the problem',
            'Clarifying what others have said',
            'Giving clear direction to others',
            'Uncovering the truth'
          ],
          shadow: [
            'Stating your opinions as fact',
            'Picking fights',
            'Starting arguments',
            'Using clever insults to undermine the confidence of others',
            'Tossing reason out the window',
            'Speaking without taking the feelings of others into account',
            'Going on a witch hunt',
            'Distorting evidence'
          ],
          questionsToAsk: [
            'What do I really need to know?',
            'To what extent have I investigated the facts behind my situation?',
            'How can I share what I know without alienating others?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Queen of Swords',
          cardNumber: 'S13',
          suit: 'Swords',
          cardImg: 'https://i.ibb.co/sCWFJJ5/s13.jpg',
          fortuneTelling: [
            'This card represents a woman with an artistic, intellectual nature, likely born between September 12th and October 12th, who uses clever, positive communication to sway others to her point of view'
          ],
          keywords: ['grace', 'skill', 'wit', 'charm', 'aptitude'],
          light: [
            'Exercising tact or using diplomacy',
            'Defusing a tense situation',
            'Knowing what to say and how to say it',
            'Making others feel comfortable and confident',
            'Bringing out the best in everyone',
            'Having a way with words',
            'Telling jokes',
            'Possessing a knack for music, math, art, or science'
          ],
          shadow: [
            'Knowing exactly what to say to destroy another person',
            'Withholding critical information',
            'Using a barbed tongue to upset others',
            'Employing sarcasm',
            'Mimicking others unkindly',
            'Making light of the less fortunate',
            'Being disrespectful',
            "Failing to use the talent you've been given"
          ],
          questionsToAsk: [
            'What do I have a knack for? How might my special gift prove useful now?',
            'To what extent am I capable of saying what needs to be said?',
            'What is the best possible way to say what I want to say?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'King of Swords',
          cardNumber: 'S14',
          suit: 'Swords',
          cardImg: 'https://i.ibb.co/3NS03W0/s14.jpg',
          fortuneTelling: [
            'This card represents an older man with an insightful, deliberate spirit, likely born between May 11th and June 10th, who is known for his integrity and sharp decision-making ability'
          ],
          keywords: ['genius', 'expertise', 'decision', 'verdict'],
          light: [
            'Expressing yourself with firmness and authority',
            'Rendering a final decision',
            'Consulting an expert',
            'Calling in advisors and consultants',
            'Coming to a final conclusion',
            'Reaching a beneficial agreement based on sound information'
          ],
          shadow: [
            'Insisting on having the last word',
            'Flaunting your intellectual capability',
            'Talking "over the heads" of others',
            'Waffling on an important decision',
            'Constantly changing your mind',
            'Refusing to make choices that are in your own best interest',
            "Wishing in vain you could take back what's been said"
          ],
          questionsToAsk: [
            'What would your decision be if you had to render a binding verdict right now?',
            'How comfortable are you saying exactly what you mean? How often do you temper what you have to say for fear of offending others?',
            'If you were to ask others, "What\'s my area of expertise?" what would they say?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Ace of Wands',
          cardNumber: 'W1',
          suit: 'Wands',
          cardImg: 'https://i.ibb.co/Y0hTSXf/w01.jpg',
          fortuneTelling: [
            'Someone has the "hots" for you',
            'A new job offer is coming your way',
            'Walk softly, and carry a big stick'
          ],
          keywords: [
            'desire',
            'inspiration',
            'vision',
            'creation',
            'invention'
          ],
          light: [
            'Being inspired',
            'Identifying an important goal',
            'Being given the opportunity to do whatever you want to do',
            'Giving or receiving direction',
            'Seeing a solution',
            'Creating something new',
            'Being aroused, sexually or creatively'
          ],
          shadow: [
            'Failing to take advantage of a great opportunity',
            'Being ineffectual or lazy',
            'Making an inadequate effort',
            'Working toward a goal, but lacking the resources or initiative to achieve success',
            'Setting inappropriate goals',
            'Failing to take a stand'
          ],
          questionsToAsk: [
            'What do I really want, more than anything else?',
            'What happens if I let this opportunity pass me by?',
            'How clearly have I defined my directions, values, and goals?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Two of Wands',
          cardNumber: 'W2',
          suit: 'Wands',
          cardImg: 'https://i.ibb.co/Lt8TZx7/w02.jpg',
          fortuneTelling: [
            'Beware false friends',
            "Don't be mealy-mouthed; say what you think and do what you want to do"
          ],
          keywords: ['conflict', 'decision', 'option', 'individuality'],
          light: [
            'Having a choice',
            'Offering or being offered an option',
            "Seeing the value of another person's approach",
            'Understanding there\'s more than one way to "skin a cat"',
            'Successfully doing more than one thing at a time',
            'Being empowered to make a choice'
          ],
          shadow: [
            'Misrepresenting your intentions',
            'Doing one thing while desiring another',
            'Changing course mid-stream for no good reason',
            'Refusing to change your goal even when pursuing it no longer makes sense',
            'Disregarding the input of others'
          ],
          questionsToAsk: [
            'In a conflict, how do you decide who wins?',
            'What values govern your decision-making process?',
            'What choice will you make if you make no choice at all?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Three of Wands',
          cardNumber: 'W3',
          suit: 'Wands',
          cardImg: 'https://i.ibb.co/cgRzDWC/w03.jpg',
          fortuneTelling: [
            "You'll be planning a trip soon",
            'Be on the lookout: your ship is coming in'
          ],
          keywords: ['implementation', 'action', 'exploration'],
          light: [
            'Putting a plan into motion',
            'Taking that critical first step',
            'Making good things happen',
            'Going beyond your limits',
            'Blazing new trails',
            'Hitting the ground running',
            'Seeing your plans come to fruition'
          ],
          shadow: [
            'Procrastinating',
            'Knowing what to do, but refusing to do it',
            'Launching a project without a clear definition of who should do what',
            'Rejecting an opportunity to try something new',
            'Failing to finish what you start'
          ],
          questionsToAsk: [
            'How can you make a habit of breaking your habits?',
            'How can you be a decisive leader in this circumstance?',
            "What's your action plan for the next week, month, year, or decade?"
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Four of Wands',
          cardNumber: 'W4',
          suit: 'Wands',
          cardImg: 'https://i.ibb.co/pJnDCN3/w04.jpg',
          fortuneTelling: [
            'Someone is watching and evaluating your work',
            'You may get a wedding invitation soon'
          ],
          keywords: [
            'celebration',
            'jubilation',
            'community',
            'teamwork',
            'completion'
          ],
          light: [
            'Sharing in a great celebration',
            'Sharing in a communal sense of achievement and success',
            'Preparing for a party',
            'Working together toward a common goal',
            'Giving or winning awards'
          ],
          shadow: [
            'Keeping your nose to the grindstone',
            'Recognizing good work by demanding more work',
            'Failing to share in a group celebration',
            'Allowing sour grapes to poison your moment in the sun',
            'Refusing to do your part'
          ],
          questionsToAsk: [
            'To what extent am I doing my part?',
            'What kind of recognition would be most meaningful?',
            'How might a celebration now impact community morale?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Five of Wands',
          cardNumber: 'W5',
          suit: 'Wands',
          cardImg: 'https://i.ibb.co/pWQRkbw/w05.jpg',
          fortuneTelling: [
            'Prepare for a fight with your best friend',
            "Remember: once you let words loose, you can't take them back"
          ],
          keywords: [
            'confrontation',
            'disruption',
            'distinction',
            'objection',
            'strife'
          ],
          light: [
            'Calmly expressing a dissenting opinion',
            'Allowing someone to use his or her own methods to get a job done',
            'Opening the floor for discussion or debate',
            'Comparing progress made so far to standards set earlier'
          ],
          shadow: [
            'Berating others for their ridiculous opinions',
            'Picking fights',
            'Offering destructive criticism',
            'Baiting people with barbed remarks',
            'Disrupting progress with an endless stream of pointless objections'
          ],
          questionsToAsk: [
            'To what extent is your current issue worth fighting for?',
            'What alternatives are there to outright conflict?',
            'What happens in a "fair fight?" How can you keep this fight fair?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Six of Wands',
          cardNumber: 'W6',
          suit: 'Wands',
          cardImg: 'https://i.ibb.co/H2vq2T7/w06.jpg',
          fortuneTelling: [
            'Someone is planning a party for you, but not everyone feels so good about your recent success',
            'Watch out for envious friends'
          ],
          keywords: ['victory', 'achievement', 'success', 'triumph'],
          light: [
            'Outperforming your peers',
            'Winning a competition',
            'Being recognized as a capable person',
            'Having your "moment in the spotlight"',
            'Being cheered on by the crowd',
            'Getting an award',
            'Earning the admiration of others',
            'Telling someone, "Good job!"'
          ],
          shadow: [
            'Being a bad winner',
            'Allowing your achievements to inflate your ego',
            'Looking down on people who seem less capable',
            'Craving to be the center of attention',
            'Giving or receiving insincere praise',
            'Envying the achievements of others'
          ],
          questionsToAsk: [
            'What kind of recognition do I crave? Why?',
            'How freely do I praise the achievements of others?',
            'What happens when the parade is over?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Seven of Wands',
          cardNumber: 'W7',
          suit: 'Wands',
          cardImg: 'https://i.ibb.co/Z10RxSC/w07.jpg',
          fortuneTelling: [
            "Don't be surprised by a personal attack",
            'Prepare to defend yourself or someone you love'
          ],
          keywords: ['bravery', 'resolve', 'determination'],
          light: [
            'Refusing to be silenced through fear or intimidation',
            'Continuing a fight against all odds',
            'Being fierce',
            'Defending yourself against physical and emotional attacks',
            'Refusing to put up with abuse',
            'Clinging to your values despite all pressure to abandon them'
          ],
          shadow: [
            'Having a chip on your shoulder',
            'Taking unnecessary risks as a means of proving your fearlessness',
            'Looking for an opportunity to take offense',
            'Responding to constructive criticism with defensiveness',
            'Refusing to stand up for yourself and your beliefs'
          ],
          questionsToAsk: [
            'When do you feel most threatened? When do you get defensive?',
            'How capable are you of defending yourself?',
            'What kinds of beliefs are worth defending?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Eight of Wands',
          cardNumber: 'W8',
          suit: 'Wands',
          cardImg: 'https://i.ibb.co/PgXKQDH/w08.jpg',
          fortuneTelling: [
            'Watch for a surprising letter in the mail',
            'Your whole world is about to be turned on its ear'
          ],
          keywords: ['speed', 'swiftness', 'responsiveness', 'change'],
          light: [
            'Taking swift action',
            'Moving forward with a plan as quickly as possible',
            'Energizing yourself',
            'Adapting to sudden changes',
            'Taking setbacks in stride',
            'Embracing the idea that nothing stays the same forever',
            'Reacting quickly and appropriately to unforeseen problems'
          ],
          shadow: [
            'Giving in to panic',
            'Running in circles and screaming',
            'Insisting things must always stay the same',
            'Stirring the pot just to see what will happen',
            'Rushing others',
            "Refusing to re-evaluate a schedule or program, even when it's clearly no longer appropriate"
          ],
          questionsToAsk: [
            'How quickly to you adapt to change?',
            'What would your response be to overwhelming, sudden change?',
            'What changes are on your horizon? How well have you prepared for them?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Nine of Wands',
          cardNumber: 'W9',
          suit: 'Wands',
          cardImg: 'https://i.ibb.co/Kwjg4mp/w09.jpg',
          fortuneTelling: [
            "Don't relax yet; there's more to come",
            "The test you're facing now is happening for one reason: to show you who your real friends are"
          ],
          keywords: [
            'toughness',
            'persistence',
            'stamina',
            'loyalty',
            'release'
          ],
          light: [
            'Sticking with it for the duration',
            'Fulfilling your promises and obligations',
            'Bearing up under incredible duress',
            'Dragging yourself across the finish line',
            'Picking yourself up by your own bootstraps',
            'Refusing to quit',
            'Going as far as you can go and being satisfied with your performance'
          ],
          shadow: [
            'Making yourself a martyr',
            'Abandoning your post',
            'Giving up at the first sign of opposition',
            'Being prevented from fulfilling an obligation',
            'Failing to be dependable',
            'Refusing to let something go that needs to be released',
            'Beating a dead horse'
          ],
          questionsToAsk: [
            'How do you cope when things get really tough?',
            'When you get low, what encourages you to go on?',
            'At what point should you be able to let this situation go?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Ten of Wands',
          cardNumber: 'W10',
          suit: 'Wands',
          cardImg: 'https://i.ibb.co/nC1dkyj/w10.jpg',
          fortuneTelling: [
            "You're worn out",
            'Back off, take a time out, and let someone else handle things for a while'
          ],
          keywords: ['exhaustion', 'resistance', 'burden', 'oppression'],
          light: [
            'Holding your own in extreme circumstances',
            'Helping others carry their burdens',
            'Coming to the aid of the oppressed',
            'Knowing and being honest about your own limits',
            'Recognizing when you are not well-suited for a particular task'
          ],
          shadow: [
            'Taking on more work than you know you can handle',
            'Refusing to say "No" when you\'re already overloaded',
            'Making a habit of working overtime',
            'Shielding others from facing the consequences of their own poor judgment',
            'Over-extending yourself on a regular basis'
          ],
          questionsToAsk: [
            'How will you know when you reach the end of your rope?',
            'How easily do you say no to new projects and requests?',
            'What projects could you delegate...or eliminate?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Page of Wands',
          cardNumber: 'W11',
          suit: 'Wands',
          cardImg: 'https://i.ibb.co/mSm8YbV/w11.jpg',
          fortuneTelling: [
            'This card represents a young man or woman with a fiery, enthusiastic demeanor, likely born a Cancer, Leo, or Virgo, who wants to start a new relationship with you'
          ],
          keywords: [
            'enthusiasm',
            'eagerness',
            'confidence',
            'validation',
            'affirmation'
          ],
          light: [
            'Leaping at a new opportunity',
            'Being a cheerleader or ardent advocate for your cause',
            'Being a True Believer',
            'Taking first steps toward independence',
            'Trusting in your own abilities',
            'Asking for feedback'
          ],
          shadow: [
            'Basing your entire self-image on what others think',
            'Seizing every new idea that comes your way without question',
            'Habitually discounting input or feedback from others',
            'Being so eager to "do it yourself" that you hinder your own progress'
          ],
          questionsToAsk: [
            'How easily do you admit your own inexperience?',
            'How can you be a better student or employee?',
            "What qualities would make a total beginner's voyage of discovery easier?"
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Knight of Wands',
          cardNumber: 'W12',
          suit: 'Wands',
          cardImg: 'https://i.ibb.co/fpBrsYw/w12.jpg',
          fortuneTelling: [
            'This card represents a man with a bold, passionate personality, likely born between July 12th and August 11th, who wants to sweep you off your feet'
          ],
          keywords: [
            'boldness',
            'bravado',
            'passion',
            'persuasion',
            'advocacy'
          ],
          light: [
            'Charging ahead',
            'Making rapid progress',
            'Refusing limits',
            'Dazzling those around you with your wit and charm',
            'Convincing others of your right to leadership',
            'Convincing others to follow you',
            'Being a catalyst for change'
          ],
          shadow: [
            'Blundering forward with inadequate skill or information',
            'Running roughshod over the feelings of others',
            'Using sex appeal to manipulate others',
            'Forcing your leadership or ideology on others',
            'Beginning many projects without finishing any'
          ],
          questionsToAsk: [
            'To what extent have you defined your ultimate goal?',
            "What's the fastest way to get the job done? Is this necessarily the best way?",
            'How long has it been since you looked back to see if others really are following your lead?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Queen of Wands',
          cardNumber: 'W13',
          suit: 'Wands',
          cardImg: 'https://i.ibb.co/RDVH1P9/w13.jpg',
          fortuneTelling: [
            'This card represents a woman with an attractive, appealing personality, likely born between March 11th and April 20th, who wants to charm you into doing things her way'
          ],
          keywords: ['attention', 'attraction', 'unification', 'collaboration'],
          light: [
            'Paying close attention',
            'Helping others focus on the issue at hand',
            'Getting everyone to work together',
            'Identifying common ground',
            'Bringing people together, despite their differences',
            'Using reverse psychology'
          ],
          shadow: [
            'Being distracted, or using your charms or skills to distract others from the goal',
            'Calling attention to yourself with negative or unhealthy behaviors',
            'Disrupting group activities as a means of feeding your own ego'
          ],
          questionsToAsk: [
            'How attentive am I?',
            "How can I draw people's attention to what we have in common?",
            'To what extent am I able to convince people to do what I want them to do?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'King of Wands',
          cardNumber: 'W14',
          suit: 'Wands',
          cardImg: 'https://i.ibb.co/BtxjySs/w14.jpg',
          fortuneTelling: [
            'This card represents an older man with a commanding, charismatic personality, likely born between November 13th and December 12th, who prefers to give directions and have them followed'
          ],
          keywords: ['creativity', 'ingenuity', 'achievement', 'direction'],
          light: [
            'Putting old things together in new and exciting ways',
            'Coming up with unexpected solutions',
            'Using your experience to solve puzzles and problems',
            'Doing what you set out to do',
            'Directing the efforts of others'
          ],
          shadow: [
            'Using your creativity to get out of honest work',
            'Investing great energy in avoiding responsibility',
            'Boasting about achievements without putting your expertise to practical use',
            'Lording it over others'
          ],
          questionsToAsk: [
            'How confident a leader am I?',
            'How can I project more confidence?',
            'How can I offer my expertise in ways that inspire others to follow me?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Ace of Pentacles',
          cardNumber: 'P1',
          suit: 'Pentacles',
          cardImg: 'https://i.ibb.co/fNbGT9Q/p01.jpg',
          fortuneTelling: [
            'Your health will improve',
            "The check you're looking for really is in the mail"
          ],
          keywords: ['health', 'wealth', 'practicality', 'receiving'],
          light: [
            'Outlining a plan for achieving prosperity',
            'Becoming aware of opportunities to improve income or health',
            'Realizing you have everything you need',
            'Appreciating everything the Universe has given you',
            'Receiving the perfect gift at the perfect time'
          ],
          shadow: [
            'Indulging in relentless consumerism',
            'Wanting more, no matter how much you have',
            'Obsessing on your account balance',
            'Suffering from hypochondria',
            'Consuming blessings without expressing gratitude',
            'Taking what you want without concern for the needs of others'
          ],
          questionsToAsk: [
            'If I made my decision based solely on practical concerns, what would my decision be?',
            'What resources are available to me?',
            'What will be the physical and financial impact of my decisions?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Two of Pentacles',
          cardNumber: 'P2',
          suit: 'Pentacles',
          cardImg: 'https://i.ibb.co/xGcwNNx/p02.jpg',
          fortuneTelling: [
            "It's time to balance the budget",
            'Avoid the temptation to spend critical funds on frivolous goods'
          ],
          keywords: ['evaluation', 'decision', 'budgeting', 'diagnosis'],
          light: [
            'Weighing options',
            'Comparing prices',
            'Determining the value of one option over another',
            'Juggling resources to make ends meet',
            "Making difficult choices based on what's best for your body or your bankbook",
            'Looking at the bottom line',
            'Asking for a second opinion on health issues'
          ],
          shadow: [
            'Engaging in endless price comparison',
            'Putting off a buying decision for fear of finding a slightly better value later on',
            'Buying something without regard for value',
            'Breaking your budget with unnecessary expenses',
            'Engaging in behavior with no regard for how your body or bankbook will be impacted'
          ],
          questionsToAsk: [
            'What values govern my decisions?',
            'How willing am I to sacrifice a little pleasure now in order to have more pleasure later on?',
            'Given my current situation, which course of action will give me more of what I really need?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Three of Pentacles',
          cardNumber: 'P3',
          suit: 'Pentacles',
          cardImg: 'https://i.ibb.co/P9zqn2z/p03.jpg',
          fortuneTelling: [
            'A high-dollar contract is in your future',
            "If you work hard, you'll succeed"
          ],
          keywords: ['expression', 'production', 'work', 'contribution'],
          light: [
            'Finishing a project',
            'Setting and meeting standards',
            'Performing according to specifications',
            'Making something others value',
            'Creating something new',
            'Doing your part in a group project',
            'Delivering exactly what others have asked for'
          ],
          shadow: [
            'Pandering to the tastes of others',
            "Failing to deliver what you've promised",
            'Not delivering your best work unless closely supervised',
            'Ignoring or breaking agreements with those who have invested in you',
            'Refusing to do your part',
            'Failing to abide by a clearly-outlined agreement with yourself or others'
          ],
          questionsToAsk: [
            'How can I get more done?',
            "What's expected of me? How large a role do I play in controlling those expectations?",
            "What's been agreed to? How well has that agreement been followed?"
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Four of Pentacles',
          cardNumber: 'P4',
          suit: 'Pentacles',
          cardImg: 'https://i.ibb.co/V9CNR2H/p04.jpg',
          fortuneTelling: ["A rainy day is coming\u2014it's time to save"],
          keywords: ['protection', 'conservation', 'preservation', 'safety'],
          light: [
            'Saving for a rainy day',
            'Fasting as part of a spiritual practice',
            'Dieting in an effort to improve your body',
            'Abstaining from sex as a way of honoring a spiritual tradition or personal promise',
            'Being financially conservative',
            'Establishing a trust fund',
            'Opening a savings account'
          ],
          shadow: [
            'Being stingy',
            'Refusing to spend money that needs to be spent',
            'Withholding sex from your partner',
            'Taking care of your own needs exclusively, without regard for the needs of others',
            'Spending a dollar to save a penny',
            "Failing to be a good manager of the blessings you've been given"
          ],
          questionsToAsk: [
            'What factors determine how conservative or generous you are?',
            'What kinds of things must be preserved at all costs?',
            'When is greediness or stinginess a good trait to have? When might generosity work against you?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Five of Pentacles',
          cardNumber: 'P5',
          suit: 'Pentacles',
          cardImg: 'https://i.ibb.co/4Zj0qHT/p05.jpg',
          fortuneTelling: [
            'Finances are getting tighter',
            'Prepare for a setback'
          ],
          keywords: ['poverty', 'destitution', 'need', 'crisis'],
          light: [
            'Recognizing your needs and taking action to fulfill them',
            'Doing as much as you can do with what little you have',
            'Admitting you need help',
            'Embracing the aid that comes your way',
            "Focusing on what you have versus what you don't",
            'Looking for the light at the end of the tunnel'
          ],
          shadow: [
            'Exaggerating your financial or physical needs',
            'Adopting a poverty mentality',
            'Refusing to support yourself',
            'Refusing offers of support',
            'Playing the martyr',
            'Turning down opportunities to improve your health or finances',
            'Wallowing in misery'
          ],
          questionsToAsk: [
            'What critical resources do I lack?',
            'What people or groups would come to my aid if I asked?',
            'How might an impoverished spirit be impacting my physical or financial condition?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Six of Pentacles',
          cardNumber: 'P6',
          suit: 'Pentacles',
          cardImg: 'https://i.ibb.co/LZxXB4N/p06.jpg',
          fortuneTelling: [
            'When you need help, ask for it',
            "Remember, though: what you receive may be limited by what you've given to others in the past"
          ],
          keywords: ['charity', 'fairness', 'cooperation', 'sharing'],
          light: [
            'Giving time, money, or effort to a charity',
            'Taking part in a group effort',
            'Lending your resources to others without expecting anything in return',
            'Making sure everyone is treated equally',
            'Working together toward a common goal',
            'Redistributing wealth, time, or attention',
            'Tithing',
            'Sharing credit for your success'
          ],
          shadow: [
            'Making a loan as a means of gaining control over someone',
            'Using charitable acts to draw attention to yourself',
            'Dividing work or resources unfairly',
            'Failing to do your part in a group effort',
            'Ignoring obligations and commitments'
          ],
          questionsToAsk: [
            'How do I feel about charity? About giving it? About receiving it?',
            "How can I know if I'm treating others fairly?",
            'What could I give that no one else can?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Seven of Pentacles',
          cardNumber: 'P7',
          suit: 'Pentacles',
          cardImg: 'https://i.ibb.co/ZSks9zJ/p07.jpg',
          fortuneTelling: [
            "Things won't work out as expected",
            'Pick up the pieces and prepare to move on'
          ],
          keywords: ['assessment', 'evaluation', 're-evaluation', 'reflection'],
          light: [
            'Measuring progress toward your goal',
            'Looking at results with an eye toward improving performance',
            'Asking, "How happy am I?"',
            'Coming up with ideas for improving your health or prosperity',
            "Deciding it's time for a change",
            'Expressing an honest opinion'
          ],
          shadow: [
            'Becoming distracted by melancholy thoughts',
            'Longing for "the good old days"',
            'Beating yourself up over lost opportunities',
            'Judging your own work harshly',
            'Holding others to inappropriate standards',
            'Refusing to take part in a project, then whining about the quality of the outcome'
          ],
          questionsToAsk: [
            'To what extent have I fulfilled my own expectations?',
            'What are the terms of success?',
            "How can I be happier with the progress I've made?"
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Eight of Pentacles',
          cardNumber: 'P8',
          suit: 'Pentacles',
          cardImg: 'https://i.ibb.co/tcRxx6v/p08.jpg',
          fortuneTelling: [
            'Stop over-analyzing, researching, and outlining',
            'Buckle down and get the work done'
          ],
          keywords: ['effort', 'work diligence', 'skill'],
          light: [
            'Doing your best',
            'Bringing enthusiasm and zeal to your work',
            'Making an effort to be the best you can be',
            'Finding the work that is right for you',
            'Taking care of the small details',
            'Becoming a finely skilled craftsperson',
            'Building something with your hands',
            'Making a handmade gift'
          ],
          shadow: [
            'Working yourself to death',
            'Doing a half-hearted or sloppy job',
            'Continuing in a job you hate',
            'Buying thoughtless gifts',
            'Producing work with shoddy craftsmanship',
            'Rushing through your work',
            'Rejecting opportunities to learn more about your craft'
          ],
          questionsToAsk: [
            'How long has it been since you were "lost in your work?"',
            'How can you improve your level of dedication and focus?',
            'What work do you do best? What about that work appeals to you?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Nine of Pentacles',
          cardNumber: 'P9',
          suit: 'Pentacles',
          cardImg: 'https://i.ibb.co/gyFrhq3/p09.jpg',
          fortuneTelling: [
            "Until you appreciate what you have, you won't have any luck getting more"
          ],
          keywords: ['training', 'discipline', 'confidence', 'enough'],
          light: [
            'Investing time in learning or teaching a difficult task',
            'Restraining yourself from physical or financial extremes',
            'Making sacrifices as a way of achieving larger goals',
            'Breaking a complex task down into simple steps',
            'Wanting what you have',
            'Knowing the difference between needs and wants'
          ],
          shadow: [
            'Being assigned to a task without being trained to perform it',
            'Pursuing a position for which you are not qualified',
            'Disregarding requirements',
            'Refusing to dedicate adequate time or attention when learning about something or someone new',
            'Always craving more'
          ],
          questionsToAsk: [
            'If you could not have what you want, how would you make do?',
            'Could you make a complex task easier by breaking it down into smaller steps?',
            'How patient are you during the learning process? With yourself? With others?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Ten of Pentacles',
          cardNumber: 'P10',
          suit: 'Pentacles',
          cardImg: 'https://i.ibb.co/0y9WtBW/p10.jpg',
          fortuneTelling: [
            'Big money is in the near future',
            'Expect a powerful blessing to come your way'
          ],
          keywords: ['wealth', 'abundance', 'acquisition', 'greed'],
          light: [
            'Celebrating your physical and financial blessings',
            'Realizing how lucky or how blessed you are',
            'Being satisfied with your physical and financial achievements',
            'Taking best advantage of "times of plenty"',
            'Enjoying a feast',
            'Showering friends or family with gifts'
          ],
          shadow: [
            'Spending all of your money on extravagant gifts and possessions',
            'Trying too hard to impress others with your wealth or physique',
            'Giving an inappropriately expensive gift as a means of currying favor',
            'Obsessing on matters of weight, health, or finance',
            'Always asking, "What\'s in it for me?"'
          ],
          questionsToAsk: [
            'How much stuff do I really need?',
            'How do I feel about wealth and abundance? How do I define these terms?',
            'How might shedding some possessions open room for growth?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Page of Pentacles',
          cardNumber: 'P11',
          suit: 'Pentacles',
          cardImg: 'https://i.ibb.co/Mnnbd1v/p11.jpg',
          fortuneTelling: [
            'This card represents a young man or woman with an earthy, practical demeanor, likely born an Aries, Taurus, or Gemini, who playfully encourages you to take financial or sexual risks'
          ],
          keywords: [
            'practicality',
            'prosperity',
            'learning',
            'growth',
            'adolescence'
          ],
          light: [
            'Learning the value of a dollar',
            'Starting a savings plan',
            'Taking the first steps toward getting out of debt',
            'Learning new physical tasks',
            'Discovering your sexuality',
            'Launching a diet, a weight-lifting program, or a health-related effort',
            'Learning by doing'
          ],
          shadow: [
            'Trying to appear healthier or wealthier than you really are',
            'Spending money carelessly',
            'Living strictly for today, with no thought of tomorrow',
            'Possessing immature attitudes toward sex and sexuality',
            'Using wealth or beauty as an excuse for not having to learn and grow'
          ],
          questionsToAsk: [
            'How can you get more financial or sexual experience without risking your livelihood or health?',
            'How might hands-on learning play a role in your situation?',
            "What's the most practical choice you could make?"
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Knight of Pentacles',
          cardNumber: 'P12',
          suit: 'Pentacles',
          cardImg: 'https://i.ibb.co/2jbjFZ7/p12.jpg',
          fortuneTelling: [
            'A stingy person may chide you for spending money',
            'Be prepared to defend an economic or sexual decision'
          ],
          keywords: ['caution', 'focus', 'realism', 'invention'],
          light: [
            'Spending money wisely',
            'Saving for a rainy day',
            'Paying close attention to physical or financial details',
            'Knowing where every dollar goes',
            'Having safe sex',
            'Preferring facts to "good feelings"',
            'Finding creative ways to "make do" with resources on hand',
            'Completing a new invention'
          ],
          shadow: [
            'Throwing caution to the four winds',
            'Spending without regard for consequence',
            'Spending on luxury when necessities are lacking',
            'Escaping stress by spending money',
            'Obsessing on tiny physical or financial details',
            'Perpetually chasing after some new bauble',
            "Copying another's work and claiming it as your own"
          ],
          questionsToAsk: [
            "What's the difference between caution and fear?",
            'How can I evaluate the practicality of my own ideas and methods?',
            'How realistic are my goals?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'Queen of Pentacles',
          cardNumber: 'P13',
          suit: 'Pentacles',
          cardImg: 'https://i.ibb.co/XSjPs4y/p13.jpg',
          fortuneTelling: [
            'This card represents a woman with an expansive, sensual nature, likely born between December 13th and 31st, who uses sensual appeal and the promise of reward to sway others to her point of view'
          ],
          keywords: [
            'luxury',
            'comfort',
            'resourcefulness',
            'generosity',
            'prosperity'
          ],
          light: [
            'Appreciating fine food, fine wine, beautiful art, beautiful bodies, or any of the better things in life',
            'Reveling in healthy sexuality',
            'Treating yourself',
            'Splurging on the occasional "nice to have" item',
            'Rewarding someone with compensation above and beyond expectations',
            'Having it all'
          ],
          shadow: [
            'Indulging in gluttony or greediness',
            'Becoming insatiable',
            'Blunting the impact of treats by indulging in them too often',
            'Providing physical comfort without providing for emotional needs',
            "Allowing a feeling of entitlement to distort your gratitude for what you're given"
          ],
          questionsToAsk: [
            'How do I define luxury?',
            'To what extent am I capable of reveling in sensual pleasure?',
            'What would I have to give up in order to "have it all?"'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          cardName: 'King of Pentacles',
          cardNumber: 'P14',
          suit: 'Pentacles',
          cardImg: 'https://i.ibb.co/dr6GgCN/p14.jpg',
          fortuneTelling: [
            'This card represents an older man with a financially, socially, and politically conservative spirit, likely born between August 12th and September 11th, who is known for putting his money where his mouth is'
          ],
          keywords: [
            'stability',
            'dependability',
            'confidence',
            'intervention'
          ],
          light: [
            'Becoming debt-free',
            'Having more than enough to get by',
            'Making contributions to a savings plan',
            'Taking a new job with an eye toward advancing your career',
            'Buying life or health insurance',
            'Being confident in the bedroom',
            'Taking on the role of enforcer when called upon to do so'
          ],
          shadow: [
            'Becoming so conservative you resist all change on principle alone',
            'Ignoring innovations in the cardName of preserving tradition',
            'Being smug or cocky',
            'Becoming ruthlessly dedicated to profit or pleasure',
            'Being sexually selfish',
            "Bossing others around, especially when you're not empowered to do so"
          ],
          questionsToAsk: [
            'How can you handle expenses with greater confidence and maturity?',
            'How dependable are you? How dependable would others say you are?',
            'To what extent is a conservative viewpoint valuable? At what point does it become more of a burden than a blessing?'
          ],
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cards', null, {})
  }
}
