const quizSets = [
    [
        // Quiz Set 1: Vocabulary and Grammar Questions for English Teaching Assistants
        {
            question: "The new curriculum aims to __________ students' critical thinking skills.",
            options: ["enhance", "amplify", "magnify", "extend"],
            correct: 0,
            explanation: "'Enhance' means to improve the quality, value, or extent of something (Thai: พัฒนา, ปรับปรุง). In this context, it refers to improving critical thinking skills.",
            justification: "‘Amplify’ means to increase the volume or intensity (Thai: เพิ่มเสียง). ‘Magnify’ means to make something appear larger than it is (Thai: ขยาย). ‘Extend’ means to make something longer or larger in area (Thai: ขยาย, ยืดออก). None of these fit the context of improving skills as precisely as ‘enhance’."
        },
        {
            question: "It's __________ that students participate actively in class discussions to foster a dynamic learning environment.",
            options: ["imperative", "optional", "trivial", "secondary"],
            correct: 0,
            explanation: "'Imperative' means of vital importance; crucial (Thai: จำเป็นอย่างยิ่ง). Active participation is crucial for a dynamic learning environment.",
            justification: "‘Optional’ means available as a choice (Thai: เป็นทางเลือก). ‘Trivial’ means of little value or importance (Thai: เล็กน้อย, ไม่สำคัญ). ‘Secondary’ means less important than something else (Thai: รอง). These do not convey the necessary importance."
        },
        {
            question: "Despite facing numerous challenges, she remained __________ in her pursuit of higher education.",
            options: ["hesitant", "resolute", "fragile", "wavering"],
            correct: 1,
            explanation: "'Resolute' means admirably purposeful, determined, and unwavering (Thai: มุ่งมั่น, แน่วแน่). It describes someone who is firm in their decision or purpose.",
            justification: "‘Hesitant’ means tentative, unsure, or slow in acting or speaking (Thai: ลังเล). ‘Fragile’ means easily broken or damaged (Thai: เปราะบาง). ‘Wavering’ means to be undecided or to fluctuate (Thai: ลังเล, คลอนแคลน). These words are antonyms or do not fit the context of determination."
        },
        {
            question: "The teacher tried to __________ the complex concept by using simple analogies.",
            options: ["obfuscate", "elucidate", "complicate", "bewilder"],
            correct: 1,
            explanation: "'Elucidate' means to make (something) clear; explain (Thai: ชี้แจง, ทำให้ชัดเจน). The teacher's goal was to clarify the concept.",
            justification: "‘Obfuscate’ means to make obscure, unclear, or unintelligible (Thai: ทำให้สับสน). ‘Complicate’ means to make something more difficult or complex (Thai: ทำให้ยุ่งยาก). ‘Bewilder’ means to cause someone to become perplexed and confused (Thai: ทำให้สับสน). These are the opposite of the intended meaning."
        },
        {
            question: "His __________ for teaching was evident in the way he inspired his students.",
            options: ["apathy", "indifference", "passion", "reluctance"],
            correct: 2,
            explanation: "'Passion' refers to a strong and barely controllable emotion, or an intense enthusiasm for something (Thai: ความหลงใหล). In this case, it's a strong enthusiasm for teaching.",
            justification: "‘Apathy’ means a lack of interest, enthusiasm, or concern (Thai: ความไม่สนใจ). ‘Indifference’ is a lack of interest, concern, or sympathy (Thai: ความไม่แยแส). ‘Reluctance’ means unwillingness or disinclination (Thai: ความไม่เต็มใจ). These words describe a lack of positive feeling towards teaching."
        },
        {
            question: "The school encourages students to __________ in extracurricular activities to develop a well-rounded personality.",
            options: ["abstain", "refrain", "partake", "deter"],
            correct: 2,
            explanation: "'Partake' means to take part in (an activity) (Thai: เข้าร่วม). It fits the context of participating in activities.",
            justification: "‘Abstain’ means to restrain oneself from doing or enjoying something (Thai: งดเว้น). ‘Refrain’ means to stop oneself from doing something (Thai: หลีกเลี่ยง). ‘Deter’ means to discourage someone from doing something (Thai: ขัดขวาง). These words suggest avoiding or preventing participation."
        },
        {
            question: "It is important to __________ cultural differences when teaching English to non-native speakers.",
            options: ["disregard", "acknowledge", "ignore", "dismiss"],
            correct: 1,
            explanation: "'Acknowledge' means to accept or admit the existence or truth of (Thai: ยอมรับ). Recognizing cultural differences is crucial for effective teaching.",
            justification: "‘Disregard’ means to pay no attention to; ignore (Thai: ไม่สนใจ). ‘Ignore’ means to intentionally not take notice of or consider (Thai: เมินเฉย). ‘Dismiss’ means to treat something as unworthy of serious consideration (Thai: ปล่อยทิ้ง). These words suggest not considering cultural differences."
        },
        {
            question: "The principal gave a __________ speech about the importance of perseverance in academic life.",
            options: ["tedious", "monotonous", "stirring", "dull"],
            correct: 2,
            explanation: "'Stirring' means arousing strong emotion or excitement (Thai: น่าตื่นเต้น). A speech that inspires perseverance would be stirring.",
            justification: "‘Tedious’ means too long, slow, or dull; tiresome or monotonous (Thai: น่าเบื่อ). ‘Monotonous’ means dull, tedious, and repetitious (Thai: ซ้ำซาก). ‘Dull’ means lacking interest or excitement (Thai: น่าเบื่อ). These words describe a boring speech."
        },
        {
            question: "Effective communication requires the ability to __________ your thoughts clearly and concisely.",
            options: ["mumble", "articulate", "stammer", "whisper"],
            correct: 1,
            explanation: "'Articulate' means to express (an idea or feeling) fluently and coherently (Thai: ชัดเจน). This is essential for clear communication.",
            justification: "‘Mumble’ means to say something indistinctly and quietly (Thai: พูดพึมพำ). ‘Stammer’ means to speak with sudden involuntary pauses and a tendency to repeat the initial letters of words (Thai: พูดติดอ่าง). ‘Whisper’ means to speak very softly using one's breath rather than one's vocal cords (Thai: กระซิบ). These describe unclear or quiet speaking."
        },
        {
            question: "The teacher's __________ approach to grammar made the lessons engaging and easy to understand.",
            options: ["rigid", "dogmatic", "innovative", "conventional"],
            correct: 2,
            explanation: "'Innovative' means featuring new methods; advanced and original (Thai: ใหม่และสร้างสรรค์). An innovative approach would make lessons engaging and easy to understand.",
            justification: "‘Rigid’ means unable to bend or be forced out of shape; not flexible (Thai: แข็งทื่อ). ‘Dogmatic’ means inclined to lay down principles as undeniably true (Thai: ดื้อด้าน). ‘Conventional’ means based on or in accordance with what is generally accepted or believed (Thai: ตามธรรมเนียม). These words suggest a less flexible or less engaging approach."
        },
        {
            question: "Students are encouraged to __________ their own learning by setting personal goals.",
            options: ["relinquish", "undermine", "take charge of", "neglect"],
            correct: 2,
            explanation: "'Take charge of' is a phrasal verb meaning to take control or responsibility for something (Thai: รับผิดชอบ). This encourages students to be responsible for their learning.",
            justification: "‘Relinquish’ means voluntarily cease to keep or claim; give up (Thai: สละ). ‘Undermine’ means to damage or weaken (someone or something), especially gradually or insidiously (Thai: ทำลาย). ‘Neglect’ means to fail to care for properly (Thai: ละเลย). These are the opposite of taking responsibility."
        },
        {
            question: "The university offers a wide __________ of courses in various disciplines.",
            options: ["narrow", "limited", "array", "scarce"],
            correct: 2,
            explanation: "'Array' means an impressive display or range of a particular type of thing (Thai: ชุด, กลุ่ม). It fits the context of a wide selection of courses.",
            justification: "‘Narrow’ means of small width in relation to length (Thai: แคบ). ‘Limited’ means restricted in size, amount, or extent (Thai: จำกัด). ‘Scarce’ means insufficient for the demand (Thai: ขาดแคลน). These words imply a small or insufficient selection."
        },
        {
            question: "It is important for teachers to provide __________ feedback to students to help them improve.",
            options: ["vague", "constructive", "ambiguous", "general"],
            correct: 1,
            explanation: "'Constructive' means serving a useful purpose; tending to build up (Thai: สร้างสรรค์). Constructive feedback helps students improve.",
            justification: "‘Vague’ means uncertain or unclear (Thai: คลุมเครือ). ‘Ambiguous’ means open to more than one interpretation (Thai: กำกวม). ‘General’ means not specific (Thai: ทั่วไป). These types of feedback would not be helpful for improvement."
        },
        {
            question: "The school has a strict policy against __________ in exams.",
            options: ["integrity", "honesty", "plagiarism", "originality"],
            correct: 2,
            explanation: "'Plagiarism' is the practice of taking someone else's work or ideas and passing them off as one's own (Thai: การลอกเลียนแบบ). It is a common issue in academic settings that schools have policies against.",
            justification: "‘Integrity’ means the quality of being honest and having strong moral principles (Thai: ความซื่อสัตย์). ‘Honesty’ is the quality of being truthful and upright (Thai: ความซื่อสัตย์). ‘Originality’ is the quality of being new and inventive (Thai: ความเป็นต้นฉบับ). These are positive attributes, not something a school would have a policy against."
        },
        {
            question: "Learning a new language can be a challenging but ultimately __________ experience.",
            options: ["futile", "unrewarding", "gratifying", "pointless"],
            correct: 2,
            explanation: "'Gratifying' means pleasing or satisfying (Thai: น่าพอใจ). A challenging experience that leads to positive results would be gratifying.",
            justification: "‘Futile’ means incapable of producing any useful result; pointless (Thai: ไร้ประโยชน์). ‘Unrewarding’ means not providing satisfaction or benefit (Thai: ไม่มีผลตอบแทน). ‘Pointless’ means having no purpose or meaning (Thai: ไร้สาระ). These words suggest a negative or useless experience."
        },
        {
            question: "The teacher decided to __________ the lesson with a fun, interactive activity.",
            options: ["conclude", "commence", "introduce", "prolong"],
            correct: 0,
            explanation: "'Conclude' means to bring (something) to an end (Thai: สรุป). Ending a lesson with an activity is a common practice.",
            justification: "‘Commence’ means to begin (Thai: เริ่มต้น). ‘Introduce’ means to bring (something) into use or operation for the first time (Thai: แนะนำ). ‘Prolong’ means to extend the duration of (Thai: ยืดเวลา). These words do not fit the context of ending a lesson."
        },
        {
            question: "Students should be encouraged to __________ their opinions respectfully, even if they differ from others.",
            options: ["suppress", "stifle", "express", "conceal"],
            correct: 2,
            explanation: "'Express' means to convey (a thought or feeling) in words or by gestures and conduct (Thai: แสดงออก). Encouraging students to share their opinions is important.",
            justification: "‘Suppress’ means forcibly put an end to (Thai: ปราบปราม). ‘Stifle’ means to prevent or constrain (an activity or idea) (Thai: ห้ามปราม). ‘Conceal’ means to keep from sight; hide (Thai: ซ่อน). These words imply preventing the sharing of opinions."
        },
        {
            question: "The new teaching methodology proved to be highly __________ in improving student performance.",
            options: ["ineffective", "detrimental", "effective", "useless"],
            correct: 2,
            explanation: "'Effective' means successful in producing a desired or intended result (Thai: มีประสิทธิผล). It describes something that works well.",
            justification: "‘Ineffective’ means not producing the desired effect (Thai: ไม่มีประสิทธิภาพ). ‘Detrimental’ means tending to cause harm (Thai: เป็นอันตราย). ‘Useless’ means not fulfilling a purpose or need (Thai: ไร้ประโยชน์). These words suggest a negative or unproductive outcome."
        },
        {
            question: "It is essential to __________ a positive learning environment in the classroom.",
            options: ["dismantle", "cultivate", "demolish", "eradicate"],
            correct: 1,
            explanation: "'Cultivate' means to try to acquire or develop (a quality, sentiment, or skill) (Thai: เพาะปลูก, ปลูกฝัง). In this context, it means to foster and develop a positive environment.",
            justification: "‘Dismantle’ means to take (a machine or structure) to pieces (Thai: รื้อถอน). ‘Demolish’ means to pull or knock down (a building) (Thai: ทำลายทิ้ง). ‘Eradicate’ means to destroy completely; put an end to (Thai: กำจัดให้สิ้นซาก). These words are the opposite of building or fostering something positive."
        },
        {
            question: "The teacher's clear instructions helped to __________ any confusion among the students.",
            options: ["exacerbate", "alleviate", "intensify", "complicate"],
            correct: 1,
            explanation: "'Alleviate' means to make (suffering, deficiency, or a problem) less severe (Thai: บรรเทา). Clear instructions would reduce confusion.",
            justification: "‘Exacerbate’ means to make (a problem, bad situation, or negative feeling) worse (Thai: ทำให้แย่ลง). ‘Intensify’ means to become or make more intense (Thai: เพิ่มความรุนแรง). ‘Complicate’ means to make (something) more difficult or complex (Thai: ทำให้ซับซ้อน). These words suggest making the confusion worse."
        }
    ],

    [
        // Quiz Set 2: Science & Technology
        {
            question: "Scientists are working to __________ a sustainable energy source.",
            options: ["devise", "destroy", "dispel", "divert"],
            correct: 0,
            explanation: "'Devise' means to plan or invent (a complex procedure, system, or mechanism) by careful thought (Thai: ออกแบบ, คิดค้น).",
            justification: "‘Destroy’ means to put an end to the existence of (something) by damaging or attacking it (Thai: ทำลาย). ‘Dispel’ means to make (a doubt, feeling, or belief) disappear (Thai: ขจัด). ‘Divert’ means to cause (someone or something) to change course or turn from one direction to another (Thai: เบี่ยงเบน)."
        },
        {
            question: "The new software aims to __________ complex data into easily understandable visuals.",
            options: ["transform", "transcribe", "transplant", "transgress"],
            correct: 0,
            explanation: "'Transform' means to make a thorough or dramatic change in the form, appearance, or character of (Thai: เปลี่ยนแปลง, แปลงโฉม).",
            justification: "‘Transcribe’ means to put (thoughts, speech, or data) into written or printed form (Thai: ถอดความ). ‘Transplant’ means to move (something) from one place to another (Thai: ย้าย). ‘Transgress’ means to go beyond the bounds of (a moral principle or other established standard of behaviour) (Thai: ฝ่าฝืนกฎเกณฑ์)."
        },
        {
            question: "The company plans to __________ its research and development efforts.",
            options: ["curtail", "expand", "contract", "diminish"],
            correct: 1,
            explanation: "'Expand' means to become or make larger or more extensive (Thai: ขยาย, เพิ่ม).",
            justification: "‘Curtail’ means to reduce in extent or quantity; impose a restriction on (Thai: ลด). ‘Contract’ means to decrease in size, number, or range (Thai: หดตัว). ‘Diminish’ means to make or become less (Thai: ลดลง)."
        },
        {
            question: "The engineer had to __________ a solution to the unexpected technical issue.",
            options: ["fabricate", "concoct", "improvise", "meditate"],
            correct: 2,
            explanation: "'Improvise' means to create and perform spontaneously or without preparation; to produce or make from whatever is available (Thai: ด้นสด, ปรับเปลี่ยนได้ทันที).",
            justification: "‘Fabricate’ means to invent or concoct something, typically with deceitful intent (Thai: สร้างขึ้นโดยโกหก). ‘Concoct’ means to create or devise, often an elaborate story or plan (Thai: ประดิษฐ์). ‘Meditate’ means to think deeply or focus the mind (Thai: ทำสมาธิ)."
        },
        {
            question: "The device is designed to __________ energy efficiency.",
            options: ["optimize", "obstruct", "deteriorate", "impair"],
            correct: 0,
            explanation: "'Optimize' means to make the best or most effective use of (a situation, opportunity, or resource) (Thai: ปรับปรุงประสิทธิภาพ).",
            justification: "‘Obstruct’ means to block or make difficult (Thai: ขวางกั้น). ‘Deteriorate’ means to become progressively worse (Thai: เสื่อมลง). ‘Impair’ means to weaken or damage (Thai: ทำให้เสื่อม)."
        },
        {
            question: "The new discovery could __________ our understanding of the universe.",
            options: ["undermine", "revolutionize", "stabilize", "hinder"],
            correct: 1,
            explanation: "'Revolutionize' means to change (something) fundamentally or completely, especially in a positive way (Thai: ปฏิวัติ, เปลี่ยนแปลงอย่างรุนแรง).",
            justification: "‘Undermine’ means to damage or weaken (someone or something), especially gradually or insidiously (Thai: ทำลาย). ‘Stabilize’ means to make or become firm and steady (Thai: ทำให้มั่นคง). ‘Hinder’ means to create difficulties that result in delay or obstruction (Thai: ขัดขวาง)."
        },
        {
            question: "The company is investing heavily in __________ technologies.",
            options: ["obsolete", "emerging", "stagnant", "redundant"],
            correct: 1,
            explanation: "'Emerging' means in the process of coming into being or becoming important (Thai: กำลังเกิดขึ้นใหม่).",
            justification: "‘Obsolete’ means no longer produced or used; out of date (Thai: ล้าสมัย). ‘Stagnant’ means not flowing or moving, stale (Thai: นิ่งเฉย). ‘Redundant’ means no longer needed or superfluous (Thai: เหลือเกินความจำเป็น)."
        },
        {
            question: "The system is designed to __________ seamlessly with existing infrastructure.",
            options: ["clash", "integrate", "isolate", "segregate"],
            correct: 1,
            explanation: "'Integrate' means to combine parts so that they work together as a whole (Thai: รวมเข้าด้วยกัน).",
            justification: "‘Clash’ means to come into conflict or be incompatible (Thai: ขัดแย้ง). ‘Isolate’ means to separate from others (Thai: แยก). ‘Segregate’ means to separate or set apart (Thai: แบ่งแยก)."
        },
        {
            question: "The new algorithm can __________ large datasets quickly.",
            options: ["process", "prohibit", "prevent", "postpone"],
            correct: 0,
            explanation: "'Process' means to work on or handle data systematically (Thai: ประมวลผล).",
            justification: "‘Prohibit’ means to forbid by law or rule (Thai: ห้าม). ‘Prevent’ means to stop something from happening (Thai: ป้องกัน). ‘Postpone’ means to delay until a later time (Thai: เลื่อนเวลา)."
        },
        {
            question: "The company aims to __________ its market share in the tech industry.",
            options: ["cede", "relinquish", "dominate", "surrender"],
            correct: 2,
            explanation: "'Dominate' means to have a commanding influence or control over something (Thai: ครอบงำ).",
            justification: "‘Cede’ means to give up power or territory (Thai: สละสิทธิ์). ‘Relinquish’ means to voluntarily give up (Thai: ละทิ้ง). ‘Surrender’ means to give up completely (Thai: ยอมแพ้)."
        },
        {
            question: "The research team hopes to __________ a breakthrough in renewable energy.",
            options: ["impede", "achieve", "obstruct", "frustrate"],
            correct: 1,
            explanation: "'Achieve' means to successfully bring about or reach a goal (Thai: สำเร็จ).",
            justification: "‘Impede’ means to slow or block progress (Thai: ขัดขวาง). ‘Obstruct’ means to block or hinder (Thai: ขวางกั้น). ‘Frustrate’ means to prevent from succeeding (Thai: ทำให้ล้มเหลว)."
        },
        {
            question: "The new technology will __________ the way we communicate.",
            options: ["stagnate", "transform", "regress", "deteriorate"],
            correct: 1,
            explanation: "'Transform' means to change completely in form or character (Thai: เปลี่ยนแปลงอย่างมาก).",
            justification: "‘Stagnate’ means to stop developing (Thai: หยุดนิ่ง). ‘Regress’ means to move backward (Thai: ถอยหลัง). ‘Deteriorate’ means to worsen (Thai: แย่ลง)."
        },
        {
            question: "The company is known for its __________ approach to innovation.",
            options: ["cautious", "conservative", "pioneering", "hesitant"],
            correct: 2,
            explanation: "'Pioneering' means introducing new ideas or methods (Thai: บุกเบิก).",
            justification: "‘Cautious’ means careful to avoid danger (Thai: ระมัดระวัง). ‘Conservative’ means averse to change (Thai: ดั้งเดิม). ‘Hesitant’ means unsure or slow to act (Thai: ลังเล)."
        },
        {
            question: "The system's __________ allows for easy upgrades and maintenance.",
            options: ["fragility", "rigidity", "modularity", "complexity"],
            correct: 2,
            explanation: "'Modularity' means consisting of separate components which can be combined (Thai: แยกเป็นส่วนๆได้).",
            justification: "‘Fragility’ means easily broken (Thai: เปราะบาง). ‘Rigidity’ means stiffness; not flexible (Thai: แข็งทื่อ). ‘Complexity’ means the state of being complicated (Thai: ความซับซ้อน)."
        },
        {
            question: "The new device offers __________ connectivity options.",
            options: ["limited", "diverse", "restricted", "sparse"],
            correct: 1,
            explanation: "'Diverse' means showing variety, wide-ranging (Thai: หลากหลาย).",
            justification: "‘Limited’ means restricted in amount (Thai: จำกัด). ‘Restricted’ means confined within limits (Thai: จำกัด). ‘Sparse’ means thinly dispersed (Thai: น้อยและกระจัดกระจาย)."
        },
        {
            question: "The research aims to __________ the underlying mechanisms of the disease.",
            options: ["obscure", "elucidate", "complicate", "confuse"],
            correct: 1,
            explanation: "'Elucidate' means to make clear; explain (Thai: ชี้แจง, อธิบาย).",
            justification: "‘Obscure’ means to make unclear (Thai: คลุมเครือ). ‘Complicate’ means to make more difficult (Thai: ทำให้ยุ่งยาก). ‘Confuse’ means to bewilder or perplex (Thai: ทำให้สับสน)."
        },
        {
            question: "The company needs to __________ its cybersecurity measures.",
            options: ["weaken", "fortify", "compromise", "dilute"],
            correct: 1,
            explanation: "'Fortify' means to strengthen or reinforce (Thai: เสริมกำลัง).",
            justification: "‘Weaken’ means to make weak (Thai: ทำให้อ่อนแอ). ‘Compromise’ means to weaken by making concessions (Thai: ประนีประนอม). ‘Dilute’ means to make thinner or weaker by adding water (Thai: เจือจาง)."
        },
        {
            question: "The new technology has the potential to __________ human capabilities.",
            options: ["diminish", "augment", "restrict", "impair"],
            correct: 1,
            explanation: "'Augment' means to increase or enhance (Thai: เพิ่มขึ้น, ขยาย).",
            justification: "‘Diminish’ means to reduce (Thai: ลดลง). ‘Restrict’ means to limit (Thai: จำกัด). ‘Impair’ means to weaken or damage (Thai: ทำให้เสื่อม)."
        },
        {
            question: "The team had to __________ their approach to solve the problem.",
            options: ["adhere", "modify", "maintain", "preserve"],
            correct: 1,
            explanation: "'Modify' means to change or alter (Thai: ปรับเปลี่ยน).",
            justification: "‘Adhere’ means to stick to (Thai: ยึดติด). ‘Maintain’ means to keep (Thai: รักษา). ‘Preserve’ means to keep safe (Thai: สงวน)."
        },
        {
            question: "The new device offers a __________ range of features.",
            options: ["meager", "comprehensive", "insufficient", "scanty"],
            correct: 1,
            explanation: "'Comprehensive' means complete and broad in scope (Thai: ครอบคลุม).",
            justification: "‘Meager’ means lacking (Thai: ขาดแคลน). ‘Insufficient’ means not enough (Thai: ไม่เพียงพอ). ‘Scanty’ means barely sufficient (Thai: ขาดแคลน)."
        }
    ],

    [
        // Quiz Set 3: Travel & Culture
        {
            question: "It's important to __________ local customs when travelling abroad.",
            options: ["disregard", "observe", "ignore", "defy"],
            correct: 1,
            explanation: "'Observe' means to conform to or comply with (a custom, rule, or law) (Thai: ปฏิบัติตาม).",
            justification: "‘Disregard’ means to pay no attention to; ignore (Thai: ไม่สนใจ). ‘Ignore’ means to intentionally not notice (Thai: เมินเฉย). ‘Defy’ means to openly resist or refuse to obey (Thai: ต่อต้าน)."
        },
        {
            question: "The ancient ruins are a __________ of the region's rich history.",
            options: ["detriment", "testament", "impediment", "hindrance"],
            correct: 1,
            explanation: "'Testament' means something that serves as a sign or evidence (Thai: หลักฐานแสดงให้เห็น).",
            justification: "‘Detriment’ means harm or damage (Thai: ความเสียหาย). ‘Impediment’ means obstacle or hindrance (Thai: อุปสรรค). ‘Hindrance’ means something that delays or obstructs (Thai: สิ่งที่ขัดขวาง)."
        },
        {
            question: "The city's vibrant nightlife is a major tourist __________.",
            options: ["deterrent", "attraction", "repellent", "obstacle"],
            correct: 1,
            explanation: "'Attraction' means a place or feature that draws visitors (Thai: สถานที่ดึงดูด).",
            justification: "‘Deterrent’ means a thing that discourages (Thai: สิ่งที่ขัดขวาง). ‘Repellent’ means causing disgust (Thai: ที่ต่อต้าน). ‘Obstacle’ means a thing that blocks the way (Thai: อุปสรรค)."
        },
        {
            question: "Many tourists are drawn to the __________ beauty of the coastline.",
            options: ["drab", "stunning", "mundane", "unremarkable"],
            correct: 1,
            explanation: "'Stunning' means extremely impressive or attractive (Thai: น่าทึ่ง, สวยงาม).",
            justification: "‘Drab’ means dull or lacking brightness (Thai: หม่นหมอง). ‘Mundane’ means ordinary or dull (Thai: ธรรมดา, ไม่น่าสนใจ). ‘Unremarkable’ means not special or notable (Thai: ธรรมดา)."
        },
        {
            question: "The museum offers a __________ collection of artifacts from various cultures.",
            options: ["limited", "extensive", "sparse", "meager"],
            correct: 1,
            explanation: "'Extensive' means covering a large area or amount (Thai: กว้างขวาง, ครอบคลุม).",
            justification: "‘Limited’ means restricted (Thai: จำกัด). ‘Sparse’ means thinly spread or scattered (Thai: กระจัดกระจาย). ‘Meager’ means lacking quantity or quality (Thai: ขาดแคลน)."
        },
        {
            question: "The local cuisine is a __________ of different culinary traditions.",
            options: ["segregation", "fusion", "separation", "division"],
            correct: 1,
            explanation: "'Fusion' means the process of combining different things to form a single entity (Thai: การผสมผสาน).",
            justification: "‘Segregation’ means separation (Thai: การแบ่งแยก). ‘Separation’ means the act of moving apart (Thai: การแยก). ‘Division’ means the act of dividing (Thai: การแบ่ง)."
        },
        {
            question: "The ancient city was __________ by a powerful earthquake.",
            options: ["preserved", "demolished", "restored", "maintained"],
            correct: 1,
            explanation: "'Demolished' means destroyed or torn down (Thai: ทำลาย, รื้อถอน).",
            justification: "‘Preserved’ means kept intact (Thai: รักษาไว้). ‘Restored’ means brought back to a former condition (Thai: ฟื้นฟู). ‘Maintained’ means kept in good condition (Thai: ดูแล)."
        },
        {
            question: "The tour guide provided a __________ overview of the city's landmarks.",
            options: ["cursory", "thorough", "superficial", "brief"],
            correct: 1,
            explanation: "'Thorough' means complete and detailed (Thai: รอบคอบ, ละเอียด).",
            justification: "‘Cursory’ means hasty and not thorough (Thai: ผิวเผิน). ‘Superficial’ means shallow or lacking depth (Thai: ผิวเผิน). ‘Brief’ means short in duration (Thai: สั้น)."
        },
        {
            question: "The festival aims to __________ cultural understanding between nations.",
            options: ["hinder", "promote", "impede", "obstruct"],
            correct: 1,
            explanation: "'Promote' means to encourage or advance (Thai: ส่งเสริม).",
            justification: "‘Hinder’ means to create difficulty (Thai: ขัดขวาง). ‘Impede’ means to delay or obstruct (Thai: ขัดขวาง). ‘Obstruct’ means to block (Thai: ขวางกั้น)."
        },
        {
            question: "The remote village is almost __________ to tourists.",
            options: ["accessible", "inaccessible", "reachable", "open"],
            correct: 1,
            explanation: "'Inaccessible' means unable to be reached or entered (Thai: เข้าไม่ถึง).",
            justification: "‘Accessible’ means able to be reached (Thai: เข้าถึงได้). ‘Reachable’ means able to be reached (Thai: สามารถเข้าถึงได้). ‘Open’ means allowing access (Thai: เปิด)."
        },
        {
            question: "The monument stands as a __________ to those who lost their lives.",
            options: ["disregard", "tribute", "neglect", "apathy"],
            correct: 1,
            explanation: "'Tribute' means a statement or act showing respect or admiration (Thai: เครื่องแสดงความเคารพ).",
            justification: "‘Disregard’ means ignoring (Thai: ไม่สนใจ). ‘Neglect’ means failing to care for (Thai: ละเลย). ‘Apathy’ means lack of interest (Thai: ไม่ใส่ใจ)."
        },
        {
            question: "The local artisans are known for their __________ craftsmanship.",
            options: ["inferior", "exquisite", "mediocre", "poor"],
            correct: 1,
            explanation: "'Exquisite' means extremely beautiful and delicate (Thai: งดงาม).",
            justification: "‘Inferior’ means lower in quality (Thai: ต่ำกว่า). ‘Mediocre’ means average or moderate quality (Thai: ธรรมดา). ‘Poor’ means bad quality (Thai: แย่)."
        },
        {
            question: "The journey through the mountains was __________ but rewarding.",
            options: ["effortless", "arduous", "simple", "easy"],
            correct: 1,
            explanation: "'Arduous' means involving strenuous effort; difficult and tiring (Thai: ยากลำบาก).",
            justification: "‘Effortless’ means requiring no effort (Thai: ง่ายดาย). ‘Simple’ means easy to do or understand (Thai: ง่าย). ‘Easy’ means not difficult (Thai: ง่าย)."
        },
        {
            question: "The ancient city's architecture is truly __________.",
            options: ["unimpressive", "magnificent", "ordinary", "dull"],
            correct: 1,
            explanation: "'Magnificent' means impressively beautiful or grand (Thai: ตระการตา).",
            justification: "‘Unimpressive’ means not impressive (Thai: ไม่น่าประทับใจ). ‘Ordinary’ means common (Thai: ธรรมดา). ‘Dull’ means uninteresting (Thai: น่าเบื่อ)."
        },
        {
            question: "The local market offers a __________ of fresh produce.",
            options: ["dearth", "plethora", "scarcity", "lack"],
            correct: 1,
            explanation: "'Plethora' means an excess or large amount (Thai: จำนวนมาก).",
            justification: "‘Dearth’ means lack (Thai: ขาดแคลน). ‘Scarcity’ means shortage (Thai: ความขาดแคลน). ‘Lack’ means absence (Thai: ขาด)."
        },
        {
            question: "The tour provided a __________ insight into the local culture.",
            options: ["superficial", "profound", "shallow", "cursory"],
            correct: 1,
            explanation: "'Profound' means very deep or intense (Thai: ลึกซึ้ง).",
            justification: "‘Superficial’ means shallow (Thai: ผิวเผิน). ‘Shallow’ means not deep (Thai: ตื้น). ‘Cursory’ means brief and hasty (Thai: ผิวเผิน)."
        },
        {
            question: "The country's diverse landscapes __________ visitors from all over the world.",
            options: ["repel", "attract", "deter", "discourage"],
            correct: 1,
            explanation: "'Attract' means to draw or pull towards (Thai: ดึงดูด).",
            justification: "‘Repel’ means to drive away (Thai: ดันให้ห่าง). ‘Deter’ means to discourage (Thai: ขัดขวาง). ‘Discourage’ means to dissuade (Thai: ทำให้ท้อใจ)."
        },
        {
            question: "The festival is a __________ of local traditions.",
            options: ["negation", "celebration", "rejection", "denial"],
            correct: 1,
            explanation: "'Celebration' means the act of marking a special event (Thai: งานเฉลิมฉลอง).",
            justification: "‘Negation’ means denial (Thai: การปฏิเสธ). ‘Rejection’ means refusal (Thai: การปฏิเสธ). ‘Denial’ means refusing truth (Thai: การปฏิเสธ)."
        },
        {
            question: "The ancient ruins have been carefully __________.",
            options: ["destroyed", "preserved", "neglected", "abandoned"],
            correct: 1,
            explanation: "'Preserved' means maintained in good condition (Thai: รักษาไว้).",
            justification: "‘Destroyed’ means ruined (Thai: ถูกทำลาย). ‘Neglected’ means not cared for (Thai: ถูกละเลย). ‘Abandoned’ means left behind (Thai: ถูกทอดทิ้ง)."
        },
        {
            question: "The city's history is __________ in its architecture.",
            options: ["concealed", "manifest", "hidden", "obscured"],
            correct: 1,
            explanation: "'Manifest' means obvious or clear (Thai: ชัดเจน).",
            justification: "‘Concealed’ means hidden (Thai: ถูกปกปิด). ‘Hidden’ means not visible (Thai: ซ่อนอยู่). ‘Obscured’ means made unclear (Thai: คลุมเครือ)."
        }
    ],
    
    [
        // Quiz Set 4: Business & Economics
        {
            question: "The company aims to __________ its profits by reducing costs.",
            options: ["diminish", "maximize", "minimize", "reduce"],
            correct: 1,
            explanation: "'Maximize' means to make as great or large as possible (Thai: ทำให้มากที่สุด).",
            justification: "‘Diminish’ means to make or become less (Thai: ลดลง). ‘Minimize’ means to reduce to the smallest possible amount (Thai: ลดให้น้อยที่สุด). ‘Reduce’ means to make smaller or less (Thai: ลด)."
        },
        {
            question: "Effective leadership is __________ for business success.",
            options: ["superfluous", "dispensable", "crucial", "unnecessary"],
            correct: 2,
            explanation: "'Crucial' means decisive or critical, especially in success or failure (Thai: สำคัญมาก).",
            justification: "‘Superfluous’ means unnecessary (Thai: ฟุ่มเฟือย). ‘Dispensable’ means able to be done without (Thai: ที่ไม่จำเป็น). ‘Unnecessary’ means not needed (Thai: ไม่จำเป็น)."
        },
        {
            question: "The market is experiencing a period of economic __________.",
            options: ["stagnation", "growth", "decline", "recession"],
            correct: 1,
            explanation: "'Growth' means the process of increasing in size or importance (Thai: การเติบโต).",
            justification: "‘Stagnation’ means lack of development (Thai: การหยุดนิ่ง). ‘Decline’ means gradual loss (Thai: การลดลง). ‘Recession’ means a period of economic decline (Thai: ภาวะถดถอยของเศรษฐกิจ)."
        },
        {
            question: "The company needs to __________ its strategy to adapt to new market conditions.",
            options: ["adhere", "revise", "maintain", "preserve"],
            correct: 1,
            explanation: "'Revise' means to re-examine and make alterations to (Thai: ทบทวนและแก้ไข).",
            justification: "‘Adhere’ means to stick fast to (Thai: ยึดติด). ‘Maintain’ means to keep in good condition (Thai: รักษา). ‘Preserve’ means to keep in original state (Thai: รักษาไว้)."
        },
        {
            question: "Investors are looking for opportunities to __________ their capital.",
            options: ["squander", "invest", "waste", "deplete"],
            correct: 1,
            explanation: "'Invest' means to put money into something to gain a profit (Thai: ลงทุน).",
            justification: "‘Squander’ means to waste recklessly (Thai: ใช้จ่ายสุรุ่ยสุร่าย). ‘Waste’ means to use carelessly (Thai: เสียเปล่า). ‘Deplete’ means to use up (Thai: ใช้จนหมด)."
        },
        {
            question: "The company faces __________ competition in the global market.",
            options: ["minimal", "fierce", "negligible", "slight"],
            correct: 1,
            explanation: "'Fierce' means very strong or intense (Thai: รุนแรง).",
            justification: "‘Minimal’ means very small (Thai: น้อยมาก). ‘Negligible’ means so small as to be not worth considering (Thai: เล็กน้อยจนไม่น่าสนใจ). ‘Slight’ means small in degree (Thai: เล็กน้อย)."
        },
        {
            question: "The new regulations aim to __________ fair trade practices.",
            options: ["hinder", "promote", "obstruct", "discourage"],
            correct: 1,
            explanation: "'Promote' means to support or improve (Thai: ส่งเสริม).",
            justification: "‘Hinder’ means to create difficulties (Thai: ขัดขวาง). ‘Obstruct’ means to block (Thai: กีดขวาง). ‘Discourage’ means to cause loss of confidence (Thai: ทำให้ท้อใจ)."
        },
        {
            question: "The company needs to __________ its operations to increase efficiency.",
            options: ["complicate", "streamline", "confuse", "muddle"],
            correct: 1,
            explanation: "'Streamline' means to improve efficiency by simplifying (Thai: ปรับปรุงให้คล่องตัว).",
            justification: "‘Complicate’ means to make difficult (Thai: ทำให้ยุ่งยาก). ‘Confuse’ means to cause disorder (Thai: สับสน). ‘Muddle’ means to mix up (Thai: ทำให้ยุ่งเหยิง)."
        },
        {
            question: "The economic forecast indicates a period of __________.",
            options: ["prosperity", "decline", "recession", "stagnation"],
            correct: 0,
            explanation: "'Prosperity' means success and wealth (Thai: ความรุ่งเรือง).",
            justification: "‘Decline’ means decrease (Thai: การลดลง). ‘Recession’ means economic downturn (Thai: ภาวะถดถอย). ‘Stagnation’ means no growth (Thai: หยุดนิ่ง)."
        },
        {
            question: "The board of directors will __________ the new business proposal.",
            options: ["reject", "approve", "veto", "dismiss"],
            correct: 1,
            explanation: "'Approve' means to accept or agree to (Thai: อนุมัติ).",
            justification: "‘Reject’ means to refuse (Thai: ปฏิเสธ). ‘Veto’ means to forbid officially (Thai: ใช้สิทธิ์คัดค้าน). ‘Dismiss’ means to throw out (Thai: ไม่รับพิจารณา)."
        },
        {
            question: "The company aims to __________ its brand image.",
            options: ["tarnish", "enhance", "damage", "undermine"],
            correct: 1,
            explanation: "'Enhance' means to improve or increase (Thai: ปรับปรุง).",
            justification: "‘Tarnish’ means to spoil the reputation (Thai: ทำให้เสื่อมเสีย). ‘Damage’ means to harm (Thai: ทำลาย). ‘Undermine’ means to weaken (Thai: ทำให้เสื่อมลง)."
        },
        {
            question: "The CEO gave a __________ speech about the company's future.",
            options: ["discouraging", "optimistic", "pessimistic", "gloomy"],
            correct: 1,
            explanation: "'Optimistic' means hopeful about the future (Thai: มองโลกในแง่ดี).",
            justification: "‘Discouraging’ means causing loss of confidence (Thai: ทำให้ท้อใจ). ‘Pessimistic’ means expecting the worst (Thai: มองโลกในแง่ร้าย). ‘Gloomy’ means dark and depressing (Thai: มืดมน)."
        },
        {
            question: "The company needs to __________ its resources effectively.",
            options: ["mismanage", "allocate", "waste", "squander"],
            correct: 1,
            explanation: "'Allocate' means to distribute for a specific purpose (Thai: จัดสรร).",
            justification: "‘Mismanage’ means to manage badly (Thai: จัดการผิดพลาด). ‘Waste’ means to use carelessly (Thai: เสียเปล่า). ‘Squander’ means to waste recklessly (Thai: ใช้จ่ายสุรุ่ยสุร่าย)."
        },
        {
            question: "The new product launch was a __________ success.",
            options: ["partial", "resounding", "minor", "limited"],
            correct: 1,
            explanation: "'Resounding' means very loud or unmistakable success (Thai: ประสบความสำเร็จอย่างมาก).",
            justification: "‘Partial’ means incomplete (Thai: บางส่วน). ‘Minor’ means small or unimportant (Thai: เล็กน้อย). ‘Limited’ means restricted (Thai: จำกัด)."
        },
        {
            question: "The company is facing a __________ challenge in the market.",
            options: ["insignificant", "formidable", "trivial", "minor"],
            correct: 1,
            explanation: "'Formidable' means very powerful or difficult (Thai: น่ากลัว, เข้มแข็ง).",
            justification: "‘Insignificant’ means unimportant (Thai: ไม่มีความสำคัญ). ‘Trivial’ means not important (Thai: เล็กน้อย). ‘Minor’ means less important (Thai: รอง)."
        },
        {
            question: "The board decided to __________ the project due to budget constraints.",
            options: ["initiate", "postpone", "accelerate", "expedite"],
            correct: 1,
            explanation: "'Postpone' means to delay until a later time (Thai: เลื่อนออกไป).",
            justification: "‘Initiate’ means to start (Thai: เริ่มต้น). ‘Accelerate’ means to speed up (Thai: เร่ง). ‘Expedite’ means to make something happen sooner (Thai: เร่งรัด)."
        },
        {
            question: "The company needs to __________ its competitive advantage.",
            options: ["erode", "sustain", "undermine", "lose"],
            correct: 1,
            explanation: "'Sustain' means to maintain or continue (Thai: รักษาไว้).",
            justification: "‘Erode’ means to gradually wear away (Thai: กัดกร่อน). ‘Undermine’ means to weaken (Thai: ทำลาย). ‘Lose’ means to fail to keep (Thai: สูญเสีย)."
        },
        {
            question: "The new policy will __________ the company's growth.",
            options: ["impede", "facilitate", "obstruct", "hinder"],
            correct: 1,
            explanation: "'Facilitate' means to make easier (Thai: ช่วยอำนวยความสะดวก).",
            justification: "‘Impede’ means to delay or obstruct (Thai: ขัดขวาง). ‘Obstruct’ means to block (Thai: กีดขวาง). ‘Hinder’ means to create difficulties (Thai: ขัดขวาง)."
        },
        {
            question: "The company aims to __________ its operations globally.",
            options: ["contract", "expand", "shrink", "reduce"],
            correct: 1,
            explanation: "'Expand' means to grow larger or more extensive (Thai: ขยายตัว).",
            justification: "‘Contract’ means to become smaller (Thai: หดตัว). ‘Shrink’ means to reduce size (Thai: หด). ‘Reduce’ means to make smaller (Thai: ลด)."
        },
        {
            question: "The business plan requires a __________ analysis of the market.",
            options: ["superficial", "in-depth", "cursory", "shallow"],
            correct: 1,
            explanation: "'In-depth' means thorough and detailed (Thai: ละเอียดถี่ถ้วน).",
            justification: "‘Superficial’ means shallow or surface level (Thai: ผิวเผิน). ‘Cursory’ means hasty and not thorough (Thai: ผิวเผิน). ‘Shallow’ means lacking depth (Thai: ตื้น)."
        }
    ],
    
    [
        // Quiz Set 5: Health & Well-being
        {
            question: "Regular exercise is __________ for maintaining good health.",
            options: ["detrimental", "beneficial", "harmful", "adverse"],
            correct: 1,
            explanation: "'Beneficial' means resulting in good; favourable or advantageous (Thai: มีประโยชน์).",
            justification: "‘Detrimental’ means causing harm (Thai: ที่เป็นอันตราย). ‘Harmful’ means causing likely harm (Thai: เป็นพิษ). ‘Adverse’ means unfavourable (Thai: เป็นปฏิปักษ์)."
        },
        {
            question: "A balanced diet can __________ the risk of chronic diseases.",
            options: ["increase", "mitigate", "exacerbate", "aggravate"],
            correct: 1,
            explanation: "'Mitigate' means to make something less severe or painful (Thai: บรรเทา).",
            justification: "‘Increase’ means to become greater (Thai: เพิ่ม). ‘Exacerbate’ means to make worse (Thai: ทำให้แย่ลง). ‘Aggravate’ means to worsen (Thai: ทำให้รุนแรงขึ้น)."
        },
        {
            question: "Stress can have a __________ impact on mental well-being.",
            options: ["positive", "negative", "neutral", "beneficial"],
            correct: 1,
            explanation: "'Negative' means not hopeful or constructive; harmful (Thai: เชิงลบ).",
            justification: "‘Positive’ means constructive or optimistic (Thai: เชิงบวก). ‘Neutral’ means impartial or neither positive nor negative (Thai: กลาง ๆ). ‘Beneficial’ means advantageous (Thai: มีประโยชน์)."
        },
        {
            question: "It's important to __________ adequate sleep for overall health.",
            options: ["neglect", "ensure", "disregard", "overlook"],
            correct: 1,
            explanation: "'Ensure' means to make certain that something will happen (Thai: รับรอง, ทำให้แน่ใจ).",
            justification: "‘Neglect’ means to fail to care for properly (Thai: ละเลย). ‘Disregard’ means to pay no attention to (Thai: ไม่สนใจ). ‘Overlook’ means to fail to notice (Thai: มองข้าม)."
        },
        {
            question: "Mindfulness practices can help to __________ anxiety.",
            options: ["intensify", "alleviate", "aggravate", "worsen"],
            correct: 1,
            explanation: "'Alleviate' means to make less severe (Thai: บรรเทา).",
            justification: "‘Intensify’ means to make more intense (Thai: เพิ่มความรุนแรง). ‘Aggravate’ means to worsen (Thai: ทำให้แย่ลง). ‘Worsen’ means to become worse (Thai: แย่ลง)."
        },
        {
            question: "The doctor advised her to __________ from smoking for better health.",
            options: ["indulge", "refrain", "continue", "persist"],
            correct: 1,
            explanation: "'Refrain' means to stop oneself from doing something (Thai: ระงับ, งดเว้น).",
            justification: "‘Indulge’ means to allow oneself to enjoy something (Thai: ปล่อยใจตาม). ‘Continue’ means to persist (Thai: ดำเนินต่อ). ‘Persist’ means to continue firmly or obstinately (Thai: ยืนหยัด)."
        },
        {
            question: "Maintaining a healthy lifestyle requires __________ effort.",
            options: ["intermittent", "consistent", "sporadic", "occasional"],
            correct: 1,
            explanation: "'Consistent' means steady and regular (Thai: สม่ำเสมอ).",
            justification: "‘Intermittent’ means occurring at irregular intervals (Thai: เป็นระยะ). ‘Sporadic’ means scattered or isolated (Thai: เป็นครั้งคราว). ‘Occasional’ means infrequent (Thai: เป็นครั้งคราว)."
        },
        {
            question: "The new health initiative aims to __________ public awareness.",
            options: ["decrease", "raise", "lower", "reduce"],
            correct: 1,
            explanation: "'Raise' means to increase (Thai: เพิ่มขึ้น).",
            justification: "‘Decrease’ means to reduce (Thai: ลดลง). ‘Lower’ means to move down (Thai: ลดลง). ‘Reduce’ means to make smaller (Thai: ลด)."
        },
        {
            question: "Adequate hydration is __________ for proper bodily function.",
            options: ["unimportant", "essential", "trivial", "secondary"],
            correct: 1,
            explanation: "'Essential' means absolutely necessary (Thai: สำคัญจำเป็น).",
            justification: "‘Unimportant’ means not important (Thai: ไม่สำคัญ). ‘Trivial’ means of little importance (Thai: เล็กน้อย). ‘Secondary’ means less important (Thai: รอง)."
        },
        {
            question: "The therapist helps patients to __________ with their emotional challenges.",
            options: ["struggle", "cope", "avoid", "ignore"],
            correct: 1,
            explanation: "'Cope' means to manage or deal with difficulties effectively (Thai: รับมือ).",
            justification: "‘Struggle’ means to fight or try hard (Thai: ดิ้นรน). ‘Avoid’ means to keep away from (Thai: หลีกเลี่ยง). ‘Ignore’ means to pay no attention to (Thai: เพิกเฉย)."
        },
        {
            question: "Eating nutritious food can __________ your energy levels.",
            options: ["deplete", "boost", "drain", "reduce"],
            correct: 1,
            explanation: "'Boost' means to increase or improve (Thai: เพิ่ม).",
            justification: "‘Deplete’ means to use up (Thai: ใช้จนหมด). ‘Drain’ means to remove (Thai: ไหลออก). ‘Reduce’ means to make smaller (Thai: ลด)."
        },
        {
            question: "The doctor emphasized the __________ of early detection in disease.",
            options: ["irrelevance", "significance", "unimportance", "triviality"],
            correct: 1,
            explanation: "'Significance' means importance (Thai: ความสำคัญ).",
            justification: "‘Irrelevance’ means not related (Thai: ไม่เกี่ยวข้อง). ‘Unimportance’ means lack of importance (Thai: ไม่สำคัญ). ‘Triviality’ means insignificance (Thai: ความเล็กน้อย)."
        },
        {
            question: "Regular check-ups can help to __________ potential health issues.",
            options: ["overlook", "identify", "miss", "ignore"],
            correct: 1,
            explanation: "'Identify' means to recognise (Thai: ระบุ).",
            justification: "‘Overlook’ means to fail to notice (Thai: มองข้าม). ‘Miss’ means to fail to detect (Thai: พลาด). ‘Ignore’ means to pay no attention to (Thai: เพิกเฉย)."
        },
        {
            question: "The new wellness program aims to __________ a holistic approach to health.",
            options: ["discourage", "foster", "inhibit", "prevent"],
            correct: 1,
            explanation: "'Foster' means to encourage development (Thai: ส่งเสริม).",
            justification: "‘Discourage’ means to dishearten (Thai: ทำให้ท้อใจ). ‘Inhibit’ means to restrain (Thai: ยับยั้ง). ‘Prevent’ means to stop (Thai: ป้องกัน)."
        },
        {
            question: "Sleep deprivation can __________ cognitive function.",
            options: ["enhance", "impair", "improve", "boost"],
            correct: 1,
            explanation: "'Impair' means to weaken (Thai: ทำให้เสื่อม).",
            justification: "‘Enhance’ means to improve (Thai: ปรับปรุง). ‘Improve’ means to get better (Thai: ดีขึ้น). ‘Boost’ means to increase (Thai: เพิ่ม)."
        },
        {
            question: "It's important to __________ a positive mindset for mental well-being.",
            options: ["abandon", "cultivate", "neglect", "discard"],
            correct: 1,
            explanation: "'Cultivate' means to develop or nurture (Thai: เพาะปลูก).",
            justification: "‘Abandon’ means to give up (Thai: ละทิ้ง). ‘Neglect’ means to fail to care for (Thai: ละเลย). ‘Discard’ means to throw away (Thai: ทิ้ง)."
        },
        {
            question: "Physical activity is __________ for maintaining a healthy weight.",
            options: ["irrelevant", "crucial", "unimportant", "optional"],
            correct: 1,
            explanation: "'Crucial' means very important (Thai: สำคัญมาก).",
            justification: "‘Irrelevant’ means not related (Thai: ไม่สำคัญ). ‘Unimportant’ means not important (Thai: ไม่สำคัญ). ‘Optional’ means not required (Thai: เป็นทางเลือก)."
        },
        {
            question: "The therapist helps individuals to __________ emotional resilience.",
            options: ["diminish", "build", "weaken", "erode"],
            correct: 1,
            explanation: "'Build' means to develop or increase (Thai: สร้าง).",
            justification: "‘Diminish’ means to reduce (Thai: ลด). ‘Weaken’ means to become weaker (Thai: ทำให้แย่ลง). ‘Erode’ means to wear away (Thai: สึกกร่อน)."
        },
        {
            question: "A healthy diet can __________ the body's immune system.",
            options: ["compromise", "strengthen", "weaken", "undermine"],
            correct: 1,
            explanation: "'Strengthen' means to make stronger (Thai: เสริมกำลัง).",
            justification: "‘Compromise’ means to weaken (Thai: ประนีประนอม). ‘Weaken’ means to reduce strength (Thai: ทำให้แย่ลง). ‘Undermine’ means to weaken gradually (Thai: ทำลาย)."
        },
        {
            question: "The public health campaign aims to __________ healthy habits.",
            options: ["deter", "encourage", "discourage", "prevent"],
            correct: 1,
            explanation: "'Encourage' means to support or promote (Thai: ส่งเสริม).",
            justification: "‘Deter’ means to discourage (Thai: ขัดขวาง). ‘Discourage’ means to dishearten (Thai: ทำให้ท้อใจ). ‘Prevent’ means to stop (Thai: ป้องกัน)."
        }
    ],
    
    [
        // Quiz Set 6: Environment & Nature
        {
            question: "Deforestation can __________ the natural habitats of many species.",
            options: ["preserve", "destroy", "restore", "protect"],
            correct: 1,
            explanation: "'Destroy' means to put an end to the existence of (something) by damaging or attacking it (Thai: ทำลาย).",
            justification: "‘Preserve’ means to maintain (something) in its original or existing state (Thai: รักษาไว้). ‘Restore’ means to bring back (a previous right, practice, custom, or situation); reinstate (Thai: ฟื้นฟู). ‘Protect’ means to keep safe from harm or injury (Thai: ปกป้อง)."
        },
        {
            question: "It is crucial to __________ renewable energy sources to combat climate change.",
            options: ["abandon", "utilize", "neglect", "ignore"],
            correct: 1,
            explanation: "'Utilize' means to make practical and effective use of (Thai: ใช้ประโยชน์).",
            justification: "‘Abandon’ means to cease to support or look after (someone); desert (Thai: ละทิ้ง). ‘Neglect’ means to fail to care for properly (Thai: ละเลย). ‘Ignore’ means to intentionally not take notice of or consider (Thai: เมินเฉย)."
        },
        {
            question: "Pollution can have a __________ effect on ecosystems.",
            options: ["beneficial", "detrimental", "positive", "harmless"],
            correct: 1,
            explanation: "'Detrimental' means tending to cause harm (Thai: เป็นอันตราย).",
            justification: "‘Beneficial’ means resulting in good; favourable or advantageous (Thai: มีประโยชน์). ‘Positive’ means constructive or optimistic (Thai: เชิงบวก). ‘Harmless’ means not causing or likely to cause any damage or injury (Thai: ไม่มีอันตราย)."
        },
        {
            question: "Conservation efforts aim to __________ endangered species.",
            options: ["eradicate", "protect", "threaten", "harm"],
            correct: 1,
            explanation: "'Protect' means to keep safe from harm or injury (Thai: ปกป้อง).",
            justification: "‘Eradicate’ means to destroy completely; put an end to (Thai: กำจัด). ‘Threaten’ means to state one's intention to take hostile action against (someone) (Thai: ข่มขู่). ‘Harm’ means physical injury, especially that which is deliberately inflicted (Thai: ทำร้าย)."
        },
        {
            question: "The melting glaciers are a clear __________ of global warming.",
            options: ["contradiction", "indication", "refutation", "disproof"],
            correct: 1,
            explanation: "'Indication' means a sign or piece of information that indicates something (Thai: สัญญาณ).",
            justification: "‘Contradiction’ means a combination of statements that are opposed to one another (Thai: ความขัดแย้ง). ‘Refutation’ means the act of proving a statement to be wrong (Thai: การหักล้าง). ‘Disproof’ means evidence that disproves something (Thai: การพิสูจน์ว่าไม่จริง)."
        },
        {
            question: "Sustainable practices are essential to __________ natural resources.",
            options: ["deplete", "conserve", "waste", "exploit"],
            correct: 1,
            explanation: "'Conserve' means to protect from harm or waste (Thai: รักษา, อนุรักษ์).",
            justification: "‘Deplete’ means to use up (resources) (Thai: หมดไป). ‘Waste’ means to use carelessly (Thai: สิ้นเปลือง). ‘Exploit’ means to use selfishly or unethically (Thai: เอาเปรียบ)."
        },
        {
            question: "The government is implementing policies to __________ air quality.",
            options: ["worsen", "improve", "deteriorate", "degrade"],
            correct: 1,
            explanation: "'Improve' means to make or become better (Thai: ปรับปรุง).",
            justification: "‘Worsen’ means to become worse (Thai: แย่ลง). ‘Deteriorate’ means to decline in quality (Thai: เสื่อมโทรม). ‘Degrade’ means to lower in quality or value (Thai: ลดคุณภาพ)."
        },
        {
            question: "Biodiversity is crucial for the __________ of ecosystems.",
            options: ["instability", "stability", "fragility", "vulnerability"],
            correct: 1,
            explanation: "'Stability' means the state of being stable; not easily changed or disturbed (Thai: ความมั่นคง).",
            justification: "‘Instability’ means the state of being unstable (Thai: ความไม่มั่นคง). ‘Fragility’ means the quality of being easily broken (Thai: ความเปราะบาง). ‘Vulnerability’ means the state of being open to harm (Thai: ความเปราะบาง, ทำร้ายง่าย)."
        },
        {
            question: "The environmental group aims to __________ awareness about plastic pollution.",
            options: ["suppress", "raise", "lower", "conceal"],
            correct: 1,
            explanation: "'Raise' means to increase or bring up (something) (Thai: เพิ่มขึ้น; ยกขึ้น).",
            justification: "‘Suppress’ means to put an end to (Thai: ระงับ). ‘Lower’ means to reduce or move down (Thai: ลดลง). ‘Conceal’ means to hide (Thai: ปกปิด)."
        },
        {
            question: "Protecting national parks helps to __________ natural landscapes.",
            options: ["destroy", "preserve", "damage", "spoil"],
            correct: 1,
            explanation: "'Preserve' means to maintain in its original or existing state (Thai: รักษาไว้).",
            justification: "‘Destroy’ means to damage completely (Thai: ทำลาย). ‘Damage’ means to cause harm (Thai: ทำร้าย). ‘Spoil’ means to ruin (Thai: เสื่อมเสีย)."
        },
        {
            question: "The rising sea levels are a __________ threat to coastal communities.",
            options: ["minor", "significant", "trivial", "insignificant"],
            correct: 1,
            explanation: "'Significant' means sufficiently great or important to be worthy of attention (Thai: สำคัญ).",
            justification: "‘Minor’ means less important (Thai: เล็กน้อย). ‘Trivial’ means of little value (Thai: ไม่สำคัญ). ‘Insignificant’ means too small to be important (Thai: ไม่มีนัยสำคัญ)."
        },
        {
            question: "Recycling efforts can help to __________ waste.",
            options: ["increase", "reduce", "accumulate", "generate"],
            correct: 1,
            explanation: "'Reduce' means to make something smaller or less in amount (Thai: ลดลง).",
            justification: "‘Increase’ means to make larger (Thai: เพิ่มขึ้น). ‘Accumulate’ means to collect (Thai: สะสม). ‘Generate’ means to produce (Thai: ผลิต)."
        },
        {
            question: "The ecosystem's delicate balance can be easily __________.",
            options: ["strengthened", "disrupted", "stabilized", "fortified"],
            correct: 1,
            explanation: "'Disrupted' means interrupted or disturbed (Thai: ขัดขวาง).",
            justification: "‘Strengthened’ means made stronger (Thai: เสริมความแข็งแรง). ‘Stabilized’ means made stable (Thai: ทำให้มั่นคง). ‘Fortified’ means strengthened with defensive structures (Thai: เสริมกำลัง)."
        },
        {
            question: "Many species are facing __________ due to habitat loss.",
            options: ["proliferation", "extinction", "growth", "survival"],
            correct: 1,
            explanation: "'Extinction' means the process of a species disappearing completely (Thai: การสูญพันธุ์).",
            justification: "‘Proliferation’ means rapid increase (Thai: การเพิ่มจำนวนอย่างรวดเร็ว). ‘Growth’ means increase in size (Thai: การเติบโต). ‘Survival’ means continuing to live or exist (Thai: การอยู่รอด)."
        },
        {
            question: "The long-term effects of climate change are still being __________.",
            options: ["ignored", "studied", "dismissed", "neglected"],
            correct: 1,
            explanation: "'Studied' means closely examined or researched (Thai: ศึกษา).",
            justification: "‘Ignored’ means deliberately not noticed (Thai: เมินเฉย). ‘Dismissed’ means rejected (Thai: ปฏิเสธ). ‘Neglected’ means failed to care for (Thai: ละเลย)."
        },
        {
            question: "Renewable energy offers a __________ alternative to fossil fuels.",
            options: ["unsustainable", "viable", "unfeasible", "impractical"],
            correct: 1,
            explanation: "'Viable' means capable of working successfully (Thai: ที่ใช้ได้จริง).",
            justification: "‘Unsustainable’ means not able to be maintained long-term (Thai: ที่ไม่ยั่งยืน). ‘Unfeasible’ means not practical (Thai: ที่ทำได้ไม่ดี). ‘Impractical’ means not sensible or realistic (Thai: ที่ไม่เหมาะสม)."
        },
        {
            question: "The government is urging industries to __________ their carbon emissions.",
            options: ["increase", "reduce", "maintain", "expand"],
            correct: 1,
            explanation: "'Reduce' means to make less in quantity or degree (Thai: ลด).",
            justification: "‘Increase’ means to make greater (Thai: เพิ่ม). ‘Maintain’ means to keep the same (Thai: รักษา). ‘Expand’ means to make larger (Thai: ขยาย)."
        },
        {
            question: "Protecting marine life is __________ for ocean health.",
            options: ["unimportant", "paramount", "trivial", "insignificant"],
            correct: 1,
            explanation: "'Paramount' means more important than anything else (Thai: สำคัญยิ่ง).",
            justification: "‘Unimportant’ means not important (Thai: ไม่สำคัญ). ‘Trivial’ means of little importance (Thai: เล็กน้อย). ‘Insignificant’ means too small to be important (Thai: ไม่มีนัยสำคัญ)."
        },
        {
            question: "The natural landscape was __________ by the new development.",
            options: ["enhanced", "marred", "improved", "beautified"],
            correct: 1,
            explanation: "'Marred' means spoiled or damaged the appearance of (Thai: ทำให้เสียหาย).",
            justification: "‘Enhanced’ means improved (Thai: ปรับปรุง). ‘Improved’ means made better (Thai: ดีขึ้น). ‘Beautified’ means made beautiful (Thai: ทำให้สวยงาม)."
        },
        {
            question: "The park serves as a __________ for various bird species.",
            options: ["deterrent", "sanctuary", "obstacle", "barrier"],
            correct: 1,
            explanation: "'Sanctuary' means a place of refuge or safety (Thai: เขตอนุรักษ์).",
            justification: "‘Deterrent’ means something that discourages (Thai: สิ่งที่ขัดขวาง). ‘Obstacle’ means something that blocks the way (Thai: อุปสรรค). ‘Barrier’ means a physical structure preventing movement (Thai: สิ่งกีดขวาง)."
        }
    ],
    
    [
        // Quiz Set 7: Arts & Entertainment
        {
            question: "The artist's work is known for its __________ use of colour.",
            options: ["dull", "vibrant", "monotonous", "subdued"],
            correct: 1,
            explanation: "'Vibrant' means full of energy and enthusiasm; (of colour) bright and striking (Thai: สดใส, มีชีวิตชีวา).",
            justification: "‘Dull’ means lacking interest or excitement (Thai: จืดชืด). ‘Monotonous’ means dull, tedious, and repetitious (Thai: ซ้ำซาก). ‘Subdued’ means softened or restrained (Thai: เบาบาง, นุ่มนวล)."
        },
        {
            question: "The novel's plot was so __________ that I couldn't put it down.",
            options: ["boring", "gripping", "tedious", "dull"],
            correct: 1,
            explanation: "'Gripping' means firmly holding the attention or interest; fascinating (Thai: น่าติดตาม).",
            justification: "‘Boring’ means not interesting (Thai: น่าเบื่อ). ‘Tedious’ means too long, slow, or dull (Thai: น่าเบื่อ). ‘Dull’ means lacking interest or excitement (Thai: น่าเบื่อ)."
        },
        {
            question: "The director's latest film received __________ reviews.",
            options: ["scathing", "favourable", "negative", "critical"],
            correct: 1,
            explanation: "'Favourable' means expressing approval (Thai: เห็นด้วย, ชื่นชม).",
            justification: "‘Scathing’ means severely critical (Thai: วิจารณ์อย่างรุนแรง). ‘Negative’ means not hopeful or constructive (Thai: เชิงลบ). ‘Critical’ means expressing disapproval (Thai: วิจารณ์)."
        },
        {
            question: "The musician's performance was truly __________.",
            options: ["mediocre", "extraordinary", "ordinary", "unremarkable"],
            correct: 1,
            explanation: "'Extraordinary' means very unusual or remarkable (Thai: เหนือธรรมดา).",
            justification: "‘Mediocre’ means of moderate quality (Thai: ธรรมดา). ‘Ordinary’ means normal (Thai: ธรรมดา). ‘Unremarkable’ means not special (Thai: ธรรมดา)."
        },
        {
            question: "The play explores __________ themes of love and loss.",
            options: ["superficial", "profound", "shallow", "trivial"],
            correct: 1,
            explanation: "'Profound' means very great or intense; showing great knowledge (Thai: ลึกซึ้ง).",
            justification: "‘Superficial’ means on the surface only (Thai: ผิวเผิน). ‘Shallow’ means lacking depth (Thai: ตื้น). ‘Trivial’ means of little importance (Thai: เล็กน้อย)."
        },
        {
            question: "The painting is a __________ of the artist's unique style.",
            options: ["deviation", "masterpiece", "flaw", "mistake"],
            correct: 1,
            explanation: "'Masterpiece' means a work of outstanding skill or artistry (Thai: ผลงานชิ้นเอก).",
            justification: "‘Deviation’ means departure from standard (Thai: การเบี่ยงเบน). ‘Flaw’ means a fault or defect (Thai: ข้อบกพร่อง). ‘Mistake’ means an error (Thai: ความผิดพลาด)."
        },
        {
            question: "The concert was a __________ success, attracting a huge crowd.",
            options: ["minor", "resounding", "limited", "partial"],
            correct: 1,
            explanation: "'Resounding' means unmistakable and emphatic (Thai: ชัดเจน, ยิ่งใหญ่).",
            justification: "‘Minor’ means small or unimportant (Thai: เล็กน้อย). ‘Limited’ means restricted (Thai: จำกัด). ‘Partial’ means incomplete (Thai: บางส่วน)."
        },
        {
            question: "The actor delivered a __________ performance that captivated the audience.",
            options: ["uninspired", "compelling", "dull", "weak"],
            correct: 1,
            explanation: "'Compelling' means evoking interest or admiration (Thai: น่าประทับใจ).",
            justification: "‘Uninspired’ means lacking inspiration (Thai: ไร้แรงบันดาลใจ). ‘Dull’ means uninteresting (Thai: น่าเบื่อ). ‘Weak’ means lacking strength (Thai: อ่อนแอ)."
        },
        {
            question: "The film's special effects were truly __________.",
            options: ["unimpressive", "spectacular", "ordinary", "poor"],
            correct: 1,
            explanation: "'Spectacular' means beautiful in a dramatic and striking way (Thai: งดงามตระการตา).",
            justification: "‘Unimpressive’ means not notable (Thai: ไม่น่าประทับใจ). ‘Ordinary’ means normal (Thai: ธรรมดา). ‘Poor’ means low quality (Thai: แย่)."
        },
        {
            question: "The author's writing style is both __________ and eloquent.",
            options: ["clumsy", "concise", "verbose", "rambling"],
            correct: 1,
            explanation: "'Concise' means giving a lot of information clearly in a few words (Thai: กระชับ).",
            justification: "‘Clumsy’ means awkward (Thai: งุ่มง่าม). ‘Verbose’ means using too many words (Thai: พูดมาก). ‘Rambling’ means lengthy and confused (Thai: เล่าเรื่องยืดยาว)."
        },
        {
            question: "The gallery features a __________ array of contemporary art.",
            options: ["limited", "diverse", "narrow", "restricted"],
            correct: 1,
            explanation: "'Diverse' means showing a great deal of variety (Thai: หลากหลาย).",
            justification: "‘Limited’ means restricted (Thai: จำกัด). ‘Narrow’ means not wide (Thai: แคบ). ‘Restricted’ means limited in extent (Thai: จำกัด)."
        },
        {
            question: "The play's ending was quite __________ and left the audience thinking.",
            options: ["predictable", "ambiguous", "clear", "obvious"],
            correct: 1,
            explanation: "'Ambiguous' means open to more than one interpretation (Thai: กำกวม).",
            justification: "‘Predictable’ means able to be foreseen (Thai: ทำนายได้). ‘Clear’ means easy to understand (Thai: ชัดเจน). ‘Obvious’ means apparent (Thai: ชัดเจน)."
        },
        {
            question: "The film received __________ for its powerful storytelling.",
            options: ["criticism", "acclaim", "condemnation", "disapproval"],
            correct: 1,
            explanation: "'Acclaim' means praises enthusiastically and publicly (Thai: การยกย่อง).",
            justification: "‘Criticism’ means analysis of merits and faults (Thai: การวิจารณ์). ‘Condemnation’ means strong disapproval (Thai: การประณาม). ‘Disapproval’ means lack of approval (Thai: การไม่เห็นด้วย)."
        },
        {
            question: "The sculptor is known for his __________ attention to detail.",
            options: ["negligent", "meticulous", "careless", "sloppy"],
            correct: 1,
            explanation: "'Meticulous' means showing great attention to detail (Thai: รอบคอบ, ละเอียด).",
            justification: "‘Negligent’ means failing to take proper care (Thai: ประมาท). ‘Careless’ means not giving sufficient attention (Thai: ไม่รอบคอบ). ‘Sloppy’ means careless and untidy (Thai: โลเล)."
        },
        {
            question: "The band's new album is a __________ departure from their previous work.",
            options: ["slight", "radical", "minor", "subtle"],
            correct: 1,
            explanation: "'Radical' means affecting the fundamental nature; thorough (Thai: รุนแรง, แบบพื้นฐาน).",
            justification: "‘Slight’ means small in degree (Thai: เล็กน้อย). ‘Minor’ means lesser in importance (Thai: รอง). ‘Subtle’ means delicate or precise (Thai: บางเบา)."
        },
        {
            question: "The film's soundtrack perfectly __________ the mood of the scenes.",
            options: ["contrasted", "complemented", "clashed", "detracted"],
            correct: 1,
            explanation: "'Complemented' means added to in a way that enhances (Thai: เสริม).",
            justification: "‘Contrasted’ means set in opposition (Thai: ตัดกัน). ‘Clashed’ means came into conflict (Thai: ขัดแย้ง). ‘Detracted’ means reduced value (Thai: ลดคุณค่า)."
        },
        {
            question: "The comedian's jokes were incredibly __________.",
            options: ["unfunny", "hilarious", "dull", "boring"],
            correct: 1,
            explanation: "'Hilarious' means extremely amusing (Thai: น่าขบขันมาก).",
            justification: "‘Unfunny’ means not amusing (Thai: ไม่น่าขำ). ‘Dull’ means lacking interest (Thai: น่าเบื่อ). ‘Boring’ means not interesting (Thai: น่าเบื่อ)."
        },
        {
            question: "The play received a standing __________ from the audience.",
            options: ["rejection", "ovation", "dismissal", "criticism"],
            correct: 1,
            explanation: "'Ovation' means a sustained and enthusiastic show of appreciation (Thai: การโห่ร้องต้อนรับ).",
            justification: "‘Rejection’ means refusal (Thai: การปฏิเสธ). ‘Dismissal’ means the act of sending away (Thai: การปลดออก). ‘Criticism’ means analysis and judgement (Thai: การวิจารณ์)."
        },
        {
            question: "The novel offers a __________ portrayal of human nature.",
            options: ["superficial", "nuanced", "simplistic", "shallow"],
            correct: 1,
            explanation: "'Nuanced' means showing subtle differences or shades of meaning (Thai: มีความละเอียดอ่อน).",
            justification: "‘Superficial’ means shallow or on the surface (Thai: ผิวเผิน). ‘Simplistic’ means oversimplified (Thai: ง่ายเกินไป). ‘Shallow’ means lacking depth (Thai: ตื้นเขิน)."
        },
        {
            question: "The artist's work is highly __________ and thought-provoking.",
            options: ["unoriginal", "innovative", "derivative", "conventional"],
            correct: 1,
            explanation: "'Innovative' means featuring new methods; original and advanced (Thai: ใหม่และก้าวหน้า).",
            justification: "‘Unoriginal’ means not original (Thai: ไม่เป็นต้นฉบับ). ‘Derivative’ means imitative of others (Thai: ลอกเลียนแบบ). ‘Conventional’ means based on traditional forms (Thai: ตามธรรมเนียม)."
        }
    ],

    [
        // Quiz Set 8: History & Society
        {
            question: "The historical document provides a __________ account of the events.",
            options: ["biased", "accurate", "distorted", "misleading"],
            correct: 1,
            explanation: "'Accurate' means (especially of information, measurements, or predictions) correct in all details; exact (Thai: ถูกต้องแม่นยำ).",
            justification: "‘Biased’ means unfairly prejudiced (Thai: มีอคติ). ‘Distorted’ means twisted out of shape (Thai: บิดเบือน). ‘Misleading’ means giving the wrong idea (Thai: ทำให้เข้าใจผิด)."
        },
        {
            question: "The revolution brought about __________ changes in society.",
            options: ["minor", "profound", "insignificant", "slight"],
            correct: 1,
            explanation: "'Profound' means very great or intense; showing deep insight (Thai: ลึกซึ้ง).",
            justification: "‘Minor’ means less important (Thai: เล็กน้อย). ‘Insignificant’ means unimportant (Thai: ไม่มีความสำคัญ). ‘Slight’ means small in degree (Thai: เล็กน้อย)."
        },
        {
            question: "The ancient civilization left behind a rich __________ of art and architecture.",
            options: ["paucity", "legacy", "dearth", "scarcity"],
            correct: 1,
            explanation: "'Legacy' means something handed down from the past (Thai: มรดก).",
            justification: "‘Paucity’ means scarcity (Thai: ความขาดแคลน). ‘Dearth’ means shortage (Thai: การขาดแคลน). ‘Scarcity’ means insufficient quantity (Thai: ความขาดแคลน)."
        },
        {
            question: "The historian tried to __________ the truth from various sources.",
            options: ["obscure", "discern", "confuse", "muddle"],
            correct: 1,
            explanation: "'Discern' means to perceive or recognise clearly (Thai: แยกแยะ).",
            justification: "‘Obscure’ means to make unclear (Thai: ทำให้คลุมเครือ). ‘Confuse’ means to make unclear (Thai: ทำให้สับสน). ‘Muddle’ means to mix up (Thai: ทำให้ยุ่งเหยิง)."
        },
        {
            question: "The new law aims to __________ social inequality.",
            options: ["exacerbate", "alleviate", "intensify", "worsen"],
            correct: 1,
            explanation: "'Alleviate' means to make less severe (Thai: บรรเทา).",
            justification: "‘Exacerbate’ means to worsen (Thai: ทำให้แย่ลง). ‘Intensify’ means to increase (Thai: เพิ่มขึ้น). ‘Worsen’ means to become worse (Thai: แย่ลง)."
        },
        {
            question: "The government is committed to __________ human rights.",
            options: ["violate", "uphold", "disregard", "infringe"],
            correct: 1,
            explanation: "'Uphold' means to maintain or support (Thai: รักษา).",
            justification: "‘Violate’ means to break a rule (Thai: ละเมิด). ‘Disregard’ means to ignore (Thai: เพิกเฉย). ‘Infringe’ means to violate (Thai: ละเมิด)."
        },
        {
            question: "The historical narrative was __________ by new archaeological findings.",
            options: ["contradicted", "corroborated", "disproved", "refuted"],
            correct: 1,
            explanation: "'Corroborated' means supported with evidence (Thai: ยืนยัน).",
            justification: "‘Contradicted’ means disagreed (Thai: ขัดแย้ง). ‘Disproved’ means shown to be false (Thai: พิสูจน์ว่าไม่จริง). ‘Refuted’ means disproved (Thai: โต้แย้ง)."
        },
        {
            question: "The community showed great __________ in the face of adversity.",
            options: ["apathy", "resilience", "fragility", "weakness"],
            correct: 1,
            explanation: "'Resilience' means the ability to recover quickly (Thai: ความยืดหยุ่น).",
            justification: "‘Apathy’ means lack of interest (Thai: ไม่สนใจ). ‘Fragility’ means brittleness (Thai: เปราะบาง). ‘Weakness’ means lack of strength (Thai: ความอ่อนแอ)."
        },
        {
            question: "The country's history is marked by periods of both peace and __________.",
            options: ["harmony", "turmoil", "stability", "tranquility"],
            correct: 1,
            explanation: "'Turmoil' means a state of confusion or disorder (Thai: ความวุ่นวาย).",
            justification: "‘Harmony’ means agreement (Thai: ความกลมเกลียว). ‘Stability’ means steadiness (Thai: ความมั่นคง). ‘Tranquility’ means calmness (Thai: ความสงบ)."
        },
        {
            question: "The new policy aims to __________ social cohesion.",
            options: ["disrupt", "foster", "divide", "fragment"],
            correct: 1,
            explanation: "'Foster' means to encourage growth or development (Thai: ส่งเสริม).",
            justification: "‘Disrupt’ means to interrupt (Thai: ขัดขวาง). ‘Divide’ means to separate (Thai: แยก). ‘Fragment’ means to break into pieces (Thai: แตกออกเป็นชิ้น)."
        },
        {
            question: "The monument serves as a __________ to a pivotal moment in history.",
            options: ["obscurity", "commemoration", "forgetfulness", "neglect"],
            correct: 1,
            explanation: "'Commemoration' means a ceremony to remember something (Thai: การรำลึกถึง).",
            justification: "‘Obscurity’ means being unknown (Thai: ความไม่เป็นที่รู้จัก). ‘Forgetfulness’ means failure to remember (Thai: การลืมเลือน). ‘Neglect’ means failure to care for (Thai: การละเลย)."
        },
        {
            question: "The government is working to __________ a more inclusive society.",
            options: ["dismantle", "build", "demolish", "destroy"],
            correct: 1,
            explanation: "'Build' means to construct or develop (Thai: สร้าง).",
            justification: "‘Dismantle’ means to take apart (Thai: รื้อ). ‘Demolish’ means to destroy (Thai: ทำลาย). ‘Destroy’ means to ruin (Thai: ทำลาย)."
        },
        {
            question: "The historical account was __________ by conflicting testimonies.",
            options: ["clarified", "complicated", "simplified", "elucidated"],
            correct: 1,
            explanation: "'Complicated' means made more complex (Thai: ซับซ้อน).",
            justification: "‘Clarified’ means made clear (Thai: ชัดเจน). ‘Simplified’ means made easier (Thai: ง่ายขึ้น). ‘Elucidated’ means explained (Thai: อธิบาย)."
        },
        {
            question: "The community showed great __________ in supporting those in need.",
            options: ["indifference", "solidarity", "apathy", "disinterest"],
            correct: 1,
            explanation: "'Solidarity' means unity or agreement (Thai: ความสามัคคี).",
            justification: "‘Indifference’ means lack of concern (Thai: ความไม่สนใจ). ‘Apathy’ means lack of interest (Thai: ไม่ใส่ใจ). ‘Disinterest’ means lack of interest (Thai: ความไม่สนใจ)."
        },
        {
            question: "The ancient city's decline was a gradual __________.",
            options: ["resurgence", "deterioration", "improvement", "revival"],
            correct: 1,
            explanation: "'Deterioration' means becoming worse (Thai: การเสื่อมโทรม).",
            justification: "‘Resurgence’ means revival (Thai: การฟื้นคืน). ‘Improvement’ means getting better (Thai: การปรับปรุง). ‘Revival’ means restoration (Thai: การฟื้นฟู)."
        },
        {
            question: "The new policy aims to __________ opportunities for all citizens.",
            options: ["restrict", "expand", "limit", "curtail"],
            correct: 1,
            explanation: "'Expand' means to make larger or more extensive (Thai: ขยาย).",
            justification: "‘Restrict’ means to limit (Thai: จำกัด). ‘Limit’ means boundary (Thai: ขอบเขต). ‘Curtail’ means to reduce (Thai: ลด)."
        },
        {
            question: "The historical event had a __________ impact on subsequent generations.",
            options: ["negligible", "profound", "trivial", "minor"],
            correct: 1,
            explanation: "'Profound' means very great or deep (Thai: ลึกซึ้ง).",
            justification: "‘Negligible’ means insignificant (Thai: เล็กน้อย). ‘Trivial’ means unimportant (Thai: เล็กน้อย). ‘Minor’ means small (Thai: เล็ก)."
        },
        {
            question: "The government is working to __________ democratic principles.",
            options: ["undermine", "strengthen", "weaken", "erode"],
            correct: 1,
            explanation: "'Strengthen' means to make stronger (Thai: เสริมความแข็งแรง).",
            justification: "‘Undermine’ means to weaken (Thai: ทำให้เสื่อม). ‘Weaken’ means to reduce strength (Thai: ทำให้แย่ลง). ‘Erode’ means to wear away (Thai: สึกกร่อน)."
        },
        {
            question: "The societal changes were a result of a long and __________ process.",
            options: ["abrupt", "gradual", "sudden", "immediate"],
            correct: 1,
            explanation: "'Gradual' means happening slowly over time (Thai: ค่อยเป็นค่อยไป).",
            justification: "‘Abrupt’ means sudden (Thai: ทันทีทันใด). ‘Sudden’ means quick and unexpected (Thai: ฉับพลัน). ‘Immediate’ means right away (Thai: ทันที)."
        },
        {
            question: "The new initiative aims to __________ civic engagement.",
            options: ["discourage", "promote", "hinder", "obstruct"],
            correct: 1,
            explanation: "'Promote' means to encourage or support (Thai: ส่งเสริม).",
            justification: "‘Discourage’ means to dissuade (Thai: ขัดขวาง). ‘Hinder’ means to create difficulties (Thai: ขัดขวาง). ‘Obstruct’ means to block (Thai: กีดขวาง)."
        }
    ],
    
    [
        // Quiz Set 9: Food & Cooking
        {
            question: "The chef used a variety of fresh ingredients to __________ the flavour of the dish.",
            options: ["diminish", "enhance", "reduce", "mask"],
            correct: 1,
            explanation: "'Enhance' means to improve or increase (Thai: เพิ่ม, ปรับปรุง).",
            justification: "‘Diminish’ means to make smaller (Thai: ลด). ‘Reduce’ means to make less (Thai: ลดลง). ‘Mask’ means to cover or hide (Thai: ปกปิด)."
        },
        {
            question: "It's important to __________ the vegetables thoroughly before cooking.",
            options: ["neglect", "rinse", "ignore", "dirty"],
            correct: 1,
            explanation: "'Rinse' means to wash lightly with water (Thai: ล้าง).",
            justification: "‘Neglect’ means to not care for (Thai: ละเลย). ‘Ignore’ means to pay no attention to (Thai: เพิกเฉย). ‘Dirty’ means not clean (Thai: สกปรก)."
        },
        {
            question: "The recipe requires a __________ amount of sugar.",
            options: ["excessive", "precise", "generous", "ample"],
            correct: 1,
            explanation: "'Precise' means exact or accurate (Thai: แม่นยำ).",
            justification: "‘Excessive’ means too much (Thai: เกินไป). ‘Generous’ means more than enough (Thai: ใจกว้าง). ‘Ample’ means enough; plentiful (Thai: มากพอ)."
        },
        {
            question: "The sauce needs to __________ for at least 20 minutes.",
            options: ["boil", "simmer", "freeze", "burn"],
            correct: 1,
            explanation: "'Simmer' means to cook gently just below boiling point (Thai: เคี่ยว).",
            justification: "‘Boil’ means to cook at boiling point (Thai: ต้ม). ‘Freeze’ means to turn into ice (Thai: แช่แข็ง). ‘Burn’ means to be damaged by fire (Thai:ไหม้)."
        },
        {
            question: "The chef's innovative techniques __________ traditional cooking methods.",
            options: ["discard", "revolutionize", "adhere to", "abandon"],
            correct: 1,
            explanation: "'Revolutionize' means to change completely (Thai: ปฏิวัติ, เปลี่ยนแปลง).",
            justification: "‘Discard’ means to throw away (Thai: ทิ้ง). ‘Adhere to’ means to follow (Thai: ยึดมั่น). ‘Abandon’ means to leave behind (Thai: ละทิ้ง)."
        },
        {
            question: "The restaurant is known for its __________ cuisine.",
            options: ["bland", "exquisite", "unappetizing", "tasteless"],
            correct: 1,
            explanation: "'Exquisite' means extremely beautiful or delicious (Thai: สวยงามมาก, อร่อยมาก).",
            justification: "‘Bland’ means lacking flavour (Thai: จืดชืด). ‘Unappetizing’ means not appealing (Thai: ไม่น่ากิน). ‘Tasteless’ means having no taste (Thai: ไร้รสชาติ)."
        },
        {
            question: "It's important to __________ ingredients carefully for baking.",
            options: ["guess", "measure", "estimate", "approximate"],
            correct: 1,
            explanation: "'Measure' means to determine the amount or size (Thai: วัด).",
            justification: "‘Guess’ means to estimate without precise knowledge (Thai: เดา). ‘Estimate’ means to roughly calculate (Thai: ประมาณ). ‘Approximate’ means nearly correct (Thai: ใกล้เคียง)."
        },
        {
            question: "The dish had a __________ aroma that filled the kitchen.",
            options: ["unpleasant", "fragrant", "foul", "stale"],
            correct: 1,
            explanation: "'Fragrant' means having a pleasant smell (Thai: มีกลิ่นหอม).",
            justification: "‘Unpleasant’ means not nice (Thai: ไม่พอใจ). ‘Foul’ means very bad smell (Thai: เหม็น). ‘Stale’ means no longer fresh (Thai: เหนียวแฉะ)."
        },
        {
            question: "The recipe calls for you to __________ the mixture until it's smooth.",
            options: ["clump", "whisk", "solidify", "separate"],
            correct: 1,
            explanation: "'Whisk' means to beat quickly with a whisk or fork (Thai: ตี).",
            justification: "‘Clump’ means to form lumps (Thai: เกาะกลุ่ม). ‘Solidify’ means to harden (Thai: แข็งตัว). ‘Separate’ means to divide (Thai: แยก)."
        },
        {
            question: "The meal was incredibly __________ and satisfying.",
            options: ["unsatisfying", "filling", "light", "meager"],
            correct: 1,
            explanation: "'Filling' means satisfying hunger (Thai: ทำให้อิ่ม).",
            justification: "‘Unsatisfying’ means not fulfilling (Thai: ไม่พอใจ). ‘Light’ means easy to digest (Thai: เบา). ‘Meager’ means too little (Thai: น้อยเกินไป)."
        },
        {
            question: "The chef decided to __________ the dish with fresh herbs.",
            options: ["strip", "garnish", "remove", "omit"],
            correct: 1,
            explanation: "'Garnish' means to decorate (Thai: ประดับตกแต่ง).",
            justification: "‘Strip’ means to remove all coverings (Thai: ถอน). ‘Remove’ means to take away (Thai: เอาออก). ‘Omit’ means to leave out (Thai: ละเว้น)."
        },
        {
            question: "The fruit was perfectly __________ and juicy.",
            options: ["unripe", "ripe", "rotten", "spoiled"],
            correct: 1,
            explanation: "'Ripe' means ready to eat (Thai: สุก).",
            justification: "‘Unripe’ means not yet ready (Thai: ยังไม่สุก). ‘Rotten’ means decayed (Thai: เน่า). ‘Spoiled’ means damaged or bad (Thai: เสีย)."
        },
        {
            question: "The restaurant offers a __________ menu for vegetarians.",
            options: ["limited", "extensive", "restricted", "narrow"],
            correct: 1,
            explanation: "'Extensive' means large in amount (Thai: กว้างขวาง).",
            justification: "‘Limited’ means small amount (Thai: จำกัด). ‘Restricted’ means limited (Thai: จำกัด). ‘Narrow’ means not wide (Thai: แคบ)."
        },
        {
            question: "The soup needs to __________ for a few more minutes to thicken.",
            options: ["cool", "reduce", "dilute", "thin"],
            correct: 1,
            explanation: "'Reduce' means to boil until thicker (Thai: ลดปริมาณ).",
            justification: "‘Cool’ means to make cold (Thai: เย็น). ‘Dilute’ means to make thinner (Thai: เจือจาง). ‘Thin’ means to make less dense (Thai: ทำให้เหลว)."
        },
        {
            question: "The bakery is famous for its __________ pastries.",
            options: ["stale", "freshly baked", "old", "dry"],
            correct: 1,
            explanation: "'Freshly baked' means just cooked (Thai: อบสดใหม่).",
            justification: "‘Stale’ means old and no longer fresh (Thai: แข็ง). ‘Old’ means not new (Thai: เก่า). ‘Dry’ means lacking moisture (Thai: แห้ง)."
        },
        {
            question: "The chef demonstrated how to __________ a fish.",
            options: ["assemble", "fillet", "chop", "mix"],
            correct: 1,
            explanation: "'Fillet' means to remove bones (Thai: แล่ปลา).",
            justification: "‘Assemble’ means to put together (Thai: รวบรวม). ‘Chop’ means to cut into pieces (Thai: สับ). ‘Mix’ means to combine (Thai: ผสม)."
        },
        {
            question: "The dish had a __________ flavour that was unique.",
            options: ["common", "distinctive", "ordinary", "generic"],
            correct: 1,
            explanation: "'Distinctive' means clearly different or special (Thai: โดดเด่น).",
            justification: "‘Common’ means usual (Thai: ธรรมดา). ‘Ordinary’ means normal (Thai: ธรรมดา). ‘Generic’ means general (Thai: ทั่วไป)."
        },
        {
            question: "It's important to __________ food properly to prevent spoilage.",
            options: ["expose", "store", "neglect", "discard"],
            correct: 1,
            explanation: "'Store' means to keep for future use (Thai: เก็บรักษา).",
            justification: "‘Expose’ means to leave uncovered (Thai: เปิดเผย). ‘Neglect’ means to ignore care (Thai: ละเลย). ‘Discard’ means to throw away (Thai: ทิ้ง)."
        },
        {
            question: "The meal was a perfect __________ of sweet and savoury.",
            options: ["clash", "blend", "separation", "division"],
            correct: 1,
            explanation: "'Blend' means a mixture (Thai: ผสมผสาน).",
            justification: "‘Clash’ means conflict (Thai: ขัดแย้ง). ‘Separation’ means act of separating (Thai: การแยก). ‘Division’ means split into parts (Thai: การแบ่ง)."
        },
        {
            question: "The chef's recipe was a __________ of traditional and modern techniques.",
            options: ["rejection", "fusion", "denial", "negation"],
            correct: 1,
            explanation: "'Fusion' means combining different elements (Thai: การผสมผสาน).",
            justification: "‘Rejection’ means refusal (Thai: การปฏิเสธ). ‘Denial’ means refusal to accept (Thai: การปฏิเสธ). ‘Negation’ means contradiction (Thai: การปฏิเสธ)."
        }
    ],
    
    [
        // Quiz Set 10: Sports & Fitness
        {
            question: "Regular training is __________ for athletes to improve their performance.",
            options: ["optional", "crucial", "trivial", "secondary"],
            correct: 1,
            explanation: "'Crucial' means decisive or critical, especially in the success or failure of something (Thai: สำคัญมาก).",
            justification: "‘Optional’ means available as a choice (Thai: เป็นทางเลือก). ‘Trivial’ means of little value or importance (Thai: เล็กน้อย). ‘Secondary’ means less important than something else (Thai: รอง)."
        },
        {
            question: "The team needs to __________ its strategy to win the championship.",
            options: ["maintain", "adapt", "preserve", "adhere"],
            correct: 1,
            explanation: "'Adapt' means to make (something) suitable for a new use or purpose; modify (Thai: ปรับตัว, ปรับเปลี่ยน).",
            justification: "‘Maintain’ means to keep (Thai: รักษา). ‘Preserve’ means to keep in its original state (Thai: รักษาไว้). ‘Adhere’ means to stick fast to (Thai: ยึดมั่น)."
        },
        {
            question: "The athlete showed great __________ in overcoming his injury.",
            options: ["weakness", "resilience", "fragility", "vulnerability"],
            correct: 1,
            explanation: "'Resilience' means the capacity to recover quickly from difficulties; toughness (Thai: ความยืดหยุ่น).",
            justification: "‘Weakness’ means lack of strength (Thai: ความอ่อนแอ). ‘Fragility’ means easily broken (Thai: เปราะบาง). ‘Vulnerability’ means susceptibility to harm (Thai: ความเปราะบาง)."
        },
        {
            question: "The coach tried to __________ the team's morale after the loss.",
            options: ["lower", "boost", "diminish", "reduce"],
            correct: 1,
            explanation: "'Boost' means to help to improve or increase (Thai: ส่งเสริม, เพิ่มพลัง).",
            justification: "‘Lower’ means to move downward (Thai: ลดลง). ‘Diminish’ means to make smaller (Thai: ลด). ‘Reduce’ means to make less (Thai: ลด)."
        },
        {
            question: "Consistent practice can help to __________ athletic skills.",
            options: ["deteriorate", "hone", "weaken", "impair"],
            correct: 1,
            explanation: "'Hone' means to refine or perfect over time (Thai: ปรับปรุง, ฝึกฝน).",
            justification: "‘Deteriorate’ means to become worse (Thai: แย่ลง). ‘Weaken’ means to make weak (Thai: ทำให้แย่ลง). ‘Impair’ means to damage (Thai: ทำลาย)."
        },
        {
            question: "The marathon runner showed incredible __________.",
            options: ["fatigue", "endurance", "exhaustion", "weakness"],
            correct: 1,
            explanation: "'Endurance' means the ability to withstand hardship or stress (Thai: ความอดทน).",
            justification: "‘Fatigue’ means extreme tiredness (Thai: ความเหน็ดเหนื่อย). ‘Exhaustion’ means extreme fatigue (Thai: ความหมดแรง). ‘Weakness’ means lack of strength (Thai: ความอ่อนแอ)."
        },
        {
            question: "The new training regimen aims to __________ performance.",
            options: ["hinder", "optimize", "obstruct", "impede"],
            correct: 1,
            explanation: "'Optimize' means to make the best or most effective use of (Thai: ปรับปรุงให้ดีที่สุด).",
            justification: "‘Hinder’ means to create difficulties (Thai: ขัดขวาง). ‘Obstruct’ means to block (Thai: กีดขวาง). ‘Impede’ means to delay (Thai: ขัดขวาง)."
        },
        {
            question: "The team's victory was a __________ of hard work and dedication.",
            options: ["failure", "culmination", "beginning", "start"],
            correct: 1,
            explanation: "'Culmination' means the highest or climactic point of something (Thai: จุดสุดยอด).",
            justification: "‘Failure’ means lack of success (Thai: ความล้มเหลว). ‘Beginning’ means the start (Thai: จุดเริ่มต้น). ‘Start’ means the point at which something begins (Thai: จุดเริ่มต้น)."
        },
        {
            question: "The athlete needs to __________ her diet for optimal results.",
            options: ["neglect", "adjust", "ignore", "disregard"],
            correct: 1,
            explanation: "'Adjust' means to alter or modify (Thai: ปรับเปลี่ยน).",
            justification: "‘Neglect’ means to fail to care for (Thai: ละเลย). ‘Ignore’ means to pay no attention to (Thai: ไม่สนใจ). ‘Disregard’ means to ignore (Thai: เมินเฉย)."
        },
        {
            question: "The coach emphasized the __________ of teamwork.",
            options: ["unimportance", "significance", "triviality", "irrelevance"],
            correct: 1,
            explanation: "'Significance' means importance (Thai: ความสำคัญ).",
            justification: "‘Unimportance’ means lack of importance (Thai: ไม่มีความสำคัญ). ‘Triviality’ means insignificance (Thai: ไม่มีความสำคัญ). ‘Irrelevance’ means not related (Thai: ไม่เกี่ยวข้อง)."
        },
        {
            question: "The athlete's determination was truly __________.",
            options: ["unimpressive", "inspiring", "ordinary", "dull"],
            correct: 1,
            explanation: "'Inspiring' means motivating or encouraging (Thai: สร้างแรงบันดาลใจ).",
            justification: "‘Unimpressive’ means not remarkable (Thai: ไม่น่าประทับใจ). ‘Ordinary’ means normal (Thai: ธรรมดา). ‘Dull’ means boring (Thai: น่าเบื่อ)."
        },
        {
            question: "The team needs to __________ its weaknesses to improve.",
            options: ["ignore", "address", "overlook", "conceal"],
            correct: 1,
            explanation: "'Address' means to deal with or discuss (Thai: จัดการ).",
            justification: "‘Ignore’ means to pay no attention to (Thai: ไม่สนใจ). ‘Overlook’ means to fail to notice (Thai: มองข้าม). ‘Conceal’ means to hide (Thai: ซ่อน)."
        },
        {
            question: "The athlete's performance was __________.",
            options: ["mediocre", "exceptional", "average", "ordinary"],
            correct: 1,
            explanation: "'Exceptional' means unusually good (Thai: ยอดเยี่ยม).",
            justification: "‘Mediocre’ means average (Thai: ธรรมดา). ‘Average’ means typical (Thai: ปกติ). ‘Ordinary’ means normal (Thai: ธรรมดา)."
        },
        {
            question: "The coach encouraged the players to __________ their potential.",
            options: ["limit", "realize", "restrict", "curtail"],
            correct: 1,
            explanation: "'Realize' means to achieve or make real (Thai: ตระหนัก, ทำให้เป็นจริง).",
            justification: "‘Limit’ means to restrict (Thai: จำกัด). ‘Restrict’ means to limit (Thai: จำกัด). ‘Curtail’ means to reduce (Thai: ลด)."
        },
        {
            question: "The team faced __________ opposition in the final.",
            options: ["weak", "formidable", "easy", "minor"],
            correct: 1,
            explanation: "'Formidable' means inspiring fear or respect through being impressively large or powerful (Thai: น่ากลัว, เข้มแข็ง).",
            justification: "‘Weak’ means lacking strength (Thai: อ่อนแอ). ‘Easy’ means not difficult (Thai: ง่าย). ‘Minor’ means less important (Thai: เล็กน้อย)."
        },
        {
            question: "The athlete's recovery was a __________ process.",
            options: ["rapid", "gradual", "sudden", "instant"],
            correct: 1,
            explanation: "'Gradual' means happening slowly over time (Thai: ค่อยเป็นค่อยไป).",
            justification: "‘Rapid’ means very fast (Thai: เร็ว). ‘Sudden’ means happening quickly (Thai: ทันที). ‘Instant’ means immediate (Thai: ทันที)."
        },
        {
            question: "The new sports facility will __________ training opportunities.",
            options: ["diminish", "expand", "reduce", "limit"],
            correct: 1,
            explanation: "'Expand' means to increase in size or scope (Thai: ขยาย).",
            justification: "‘Diminish’ means to reduce (Thai: ลด). ‘Reduce’ means to make smaller (Thai: ลด). ‘Limit’ means to restrict (Thai: จำกัด)."
        },
        {
            question: "The team needs to __________ its focus on winning.",
            options: ["lose", "maintain", "divert", "shift"],
            correct: 1,
            explanation: "'Maintain' means to keep in existence or continuance (Thai: รักษาไว้).",
            justification: "‘Lose’ means to misplace or fail to keep (Thai: สูญเสีย). ‘Divert’ means to change direction (Thai: เบี่ยงเบน). ‘Shift’ means to change place or position (Thai: ย้าย)."
        },
        {
            question: "The athlete's dedication was __________.",
            options: ["questionable", "unwavering", "sporadic", "inconsistent"],
            correct: 1,
            explanation: "'Unwavering' means steady and resolute (Thai: แน่วแน่).",
            justification: "‘Questionable’ means doubtful (Thai: น่าสงสัย). ‘Sporadic’ means irregular (Thai: เป็นครั้งคราว). ‘Inconsistent’ means not steady (Thai: ไม่สม่ำเสมอ)."
        },
        {
            question: "The coach provided __________ feedback to the players.",
            options: ["vague", "constructive", "ambiguous", "general"],
            correct: 1,
            explanation: "'Constructive' means serving a useful purpose; helpful (Thai: สร้างสรรค์).",
            justification: "‘Vague’ means unclear (Thai: คลุมเครือ). ‘Ambiguous’ means having more than one meaning (Thai: กำกวม). ‘General’ means not specific (Thai: ทั่วไป)."
        }
    ],

    [
        // Quiz Set 11: General Knowledge
        {
            question: "The Earth __________ around the Sun.",
            options: ["revolves", "rotates", "spins", "orbits"],
            correct: 0,
            explanation: "'Revolves' means to move in a circle on a central axis; to move in a circular or curving course (Thai: โคจรรอบ).",
            justification: "‘Rotates’ means to turn on an axis (Thai: หมุนรอบตัว). ‘Spins’ means to turn rapidly (Thai: หมุนเร็ว). ‘Orbits’ means to move in orbit around something (Thai: โคจรรอบ)."
        },
        {
            question: "Water boils at 100 degrees __________.",
            options: ["Fahrenheit", "Kelvin", "Celsius", "Rankine"],
            correct: 2,
            explanation: "'Celsius' is the temperature scale where water boils at 100 degrees (Thai: องศาเซลเซียส).",
            justification: "‘Fahrenheit’ water boils at 212 degrees (Thai: องศาฟาเรนไฮต์). ‘Kelvin’ is an absolute temperature scale (Thai: เคลวิน). ‘Rankine’ is another temperature scale mainly used in engineering (Thai: แรงกิเน)."
        },
        {
            question: "The capital of France is __________.",
            options: ["Berlin", "Rome", "Paris", "Madrid"],
            correct: 2,
            explanation: "'Paris' is the capital city of France (Thai: กรุงปารีส).",
            justification: "‘Berlin’ is the capital of Germany (เยอรมัน). ‘Rome’ is the capital of Italy (อิตาลี). ‘Madrid’ is the capital of Spain (สเปน)."
        },
        {
            question: "Photosynthesis is the process by which plants __________ food.",
            options: ["consume", "produce", "absorb", "release"],
            correct: 1,
            explanation: "'Produce' means to make or create (Thai: ผลิต).",
            justification: "‘Consume’ means to use or eat (Thai: บริโภค). ‘Absorb’ means to take in (Thai: ดูดซึม). ‘Release’ means to let go (Thai: ปล่อย)."
        },
        {
            question: "The largest ocean on Earth is the __________ Ocean.",
            options: ["Atlantic", "Indian", "Arctic", "Pacific"],
            correct: 3,
            explanation: "'Pacific' is the largest and deepest ocean (Thai: มหาสมุทรแปซิฟิก).",
            justification: "‘Atlantic’ is the second largest (มหาสมุทรแอตแลนติก). ‘Indian’ is the third largest (มหาสมุทรอินเดีย). ‘Arctic’ is the smallest (มหาสมุทรอาร์กติก)."
        },
        {
            question: "The human heart has __________ chambers.",
            options: ["two", "three", "four", "five"],
            correct: 2,
            explanation: "The human heart has 'four' chambers (Thai: สี่ห้องหัวใจ).",
            justification: "‘Two’, ‘Three’, and ‘Five’ are incorrect numbers of heart chambers."
        },
        {
            question: "The process of a solid turning directly into a gas is called __________.",
            options: ["melting", "evaporation", "sublimation", "condensation"],
            correct: 2,
            explanation: "'Sublimation' means conversion from solid to gas without passing through liquid (Thai: การระเหิด).",
            justification: "‘Melting’ means solid to liquid (การหลอมเหลว). ‘Evaporation’ means liquid to gas (การระเหย). ‘Condensation’ means gas to liquid (การกลั่นตัว)."
        },
        {
            question: "The Great Wall of China is located in __________.",
            options: ["Japan", "India", "China", "Korea"],
            correct: 2,
            explanation: "'China' is the country where the Great Wall is located (ประเทศจีน).",
            justification: "‘Japan’, ‘India’, and ‘Korea’ are incorrect."
        },
        {
            question: "The chemical symbol for gold is __________.",
            options: ["Ag", "Fe", "Au", "Cu"],
            correct: 2,
            explanation: "'Au' is the chemical symbol for gold, derived from Latin 'aurum' (ทองคำ).",
            justification: "‘Ag’ is silver (เงิน). ‘Fe’ is iron (เหล็ก). ‘Cu’ is copper (ทองแดง)."
        },
        {
            question: "The study of ancient societies and their cultures is called __________.",
            options: ["geology", "sociology", "archaeology", "biology"],
            correct: 2,
            explanation: "'Archaeology' is the study of human history through excavation (โบราณคดี).",
            justification: "‘Geology’ is study of Earth materials (ธรณีวิทยา). ‘Sociology’ is study of society (สังคมวิทยา). ‘Biology’ is study of living things (ชีววิทยา)."
        },
        {
            question: "The largest planet in our solar system is __________.",
            options: ["Mars", "Jupiter", "Saturn", "Neptune"],
            correct: 1,
            explanation: "'Jupiter' is the largest planet (ดาวพฤหัสบดี).",
            justification: "‘Mars’ is the fourth planet (ดาวอังคาร). ‘Saturn’ is the second largest (ดาวเสาร์). ‘Neptune’ is the eighth (ดาวเนปจูน)."
        },
        {
            question: "The process of breaking down food into nutrients is called __________.",
            options: ["respiration", "circulation", "digestion", "excretion"],
            correct: 2,
            explanation: "'Digestion' is the breakdown of food into absorbable substances (การย่อยอาหาร).",
            justification: "‘Respiration’ is breathing (การหายใจ). ‘Circulation’ is blood flow (การไหลเวียน). ‘Excretion’ is elimination of waste (การขับถ่าย)."
        },
        {
            question: "The currency of Japan is the __________.",
            options: ["Yuan", "Won", "Yen", "Rupee"],
            correct: 2,
            explanation: "'Yen' is the currency of Japan (เงินเยน).",
            justification: "‘Yuan’ is China (หยวน). ‘Won’ is South Korea (วอน). ‘Rupee’ is India and others (รูปี)."
        },
        {
            question: "The author of 'Romeo and Juliet' is __________.",
            options: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"],
            correct: 2,
            explanation: "'William Shakespeare' wrote 'Romeo and Juliet' (วิลเลียม เช็คสเปียร์).",
            justification: "Others wrote different works (นักเขียนคนอื่น)."
        },
        {
            question: "The fastest land animal is the __________.",
            options: ["lion", "cheetah", "gazelle", "leopard"],
            correct: 1,
            explanation: "'Cheetah' is the fastest land animal (เสือชีตาห์).",
            justification: "‘Lion’, ‘gazelle’, and ‘leopard’ are fast, but slower."
        },
        {
            question: "The longest river in the world is the __________ River.",
            options: ["Amazon", "Mississippi", "Nile", "Yangtze"],
            correct: 2,
            explanation: "'Nile' River is generally considered the longest (แม่น้ำไนล์).",
            justification: "‘Amazon’ is second longest (แม่น้ำอเมซอน). ‘Mississippi’ and ‘Yangtze’ are large but shorter."
        },
        {
            question: "The instrument used to measure earthquakes is a __________.",
            options: ["barometer", "thermometer", "seismograph", "anemometer"],
            correct: 2,
            explanation: "'Seismograph' measures earthquakes (เครื่องวัดแผ่นดินไหว).",
            justification: "‘Barometer’ measures pressure (เครื่องวัดความกดอากาศ). ‘Thermometer’ measures temperature (เครื่องวัดอุณหภูมิ). ‘Anemometer’ measures wind speed (เครื่องวัดความเร็วลม)."
        },
        {
            question: "The process by which plants release water vapor into the atmosphere is called __________.",
            options: ["precipitation", "evaporation", "transpiration", "condensation"],
            correct: 2,
            explanation: "'Transpiration' is water vapor release from plants (การคายน้ำ).",
            justification: "‘Precipitation’ is rain, snow, etc. (การตกตะกอน). ‘Evaporation’ is liquid to gas (การระเหย). ‘Condensation’ is gas to liquid (การกลั่นตัว)."
        },
        {
            question: "The largest desert in the world is the __________ Desert.",
            options: ["Gobi", "Sahara", "Arabian", "Kalahari"],
            correct: 1,
            explanation: "'Sahara' is the largest hot desert (ทะเลทรายซาฮารา).",
            justification: "Others are large deserts but smaller."
        },
        {
            question: "The study of the mind and behavior is called __________.",
            options: ["sociology", "anthropology", "psychology", "biology"],
            correct: 2,
            explanation: "'Psychology' is the study of mind and behavior (จิตวิทยา).",
            justification: "‘Sociology’ is study of society (สังคมวิทยา). ‘Anthropology’ is study of humans (มานุษยวิทยา). ‘Biology’ is study of living things (ชีววิทยา)."
        }
    ],

    [
        // Quiz Set 12: Literature & Writing
        {
            question: "The author's __________ style made the novel a joy to read.",
            options: ["obtuse", "lucid", "convoluted", "abstruse"],
            correct: 1,
            explanation: "'Lucid' means expressed clearly; easy to understand (Thai: ชัดเจน, เข้าใจง่าย).",
            justification: "‘Obtuse’ means annoyingly insensitive or slow to understand (Thai: ทึ่ม). ‘Convoluted’ means extremely complex and difficult to follow (Thai: ซับซ้อน). ‘Abstruse’ means difficult to understand; obscure (Thai: เข้าใจยาก)."
        },
        {
            question: "The novel's __________ was set in a dystopian future.",
            options: ["climax", "setting", "resolution", "plot"],
            correct: 1,
            explanation: "'Setting' refers to the place or type of surroundings where something is positioned or where an event takes place (Thai: ฉาก, สถานที่).",
            justification: "‘Climax’ is the most intense or important point (Thai: จุดสุดยอด). ‘Resolution’ is the solving of the plot (Thai: การคลี่คลาย). ‘Plot’ is the sequence of events (Thai: โครงเรื่อง)."
        },
        {
            question: "The poet used vivid imagery to __________ the scene.",
            options: ["obscure", "evoke", "conceal", "suppress"],
            correct: 1,
            explanation: "'Evoke' means to bring or recall to the conscious mind (Thai: กระตุ้น, เรียกคืน).",
            justification: "‘Obscure’ means to make unclear (Thai: คลุมเครือ). ‘Conceal’ means to keep from sight; hide (Thai: ปกปิด). ‘Suppress’ means to put an end to forcibly (Thai: ปราบปราม)."
        },
        {
            question: "The essay presented a __________ argument against the proposed policy.",
            options: ["weak", "cogent", "flimsy", "unconvincing"],
            correct: 1,
            explanation: "'Cogent' means (of an argument) clear, logical, and convincing (Thai: มีเหตุผล, โน้มน้าว).",
            justification: "‘Weak’ means lacking strength (Thai: อ่อนแอ). ‘Flimsy’ means insubstantial or unconvincing (Thai: เปราะบาง). ‘Unconvincing’ means failing to convince (Thai: ไม่น่าเชื่อถือ)."
        },
        {
            question: "The author's use of __________ added depth to the narrative.",
            options: ["simplicity", "metaphor", "literalism", "plainness"],
            correct: 1,
            explanation: "'Metaphor' is a figure of speech applying a word or phrase to something not literally applicable (Thai: อุปมา).",
            justification: "‘Simplicity’ means being easy to understand (Thai: เรียบง่าย). ‘Literalism’ means taking words in their usual or most basic sense (ไทย: การตีความตามตัวอักษร). ‘Plainness’ means simplicity or lack of adornment (ไทย: ความเรียบง่าย)."
        },
        {
            question: "The story's __________ was unexpected and surprising.",
            options: ["beginning", "resolution", "exposition", "introduction"],
            correct: 1,
            explanation: "'Resolution' is the part of a story where the conflict is resolved (Thai: การคลี่คลายเรื่อง).",
            justification: "‘Beginning’ means start of the story (Thai: จุดเริ่มต้น). ‘Exposition’ gives background information (Thai: การเปิดเผยข้อมูล). ‘Introduction’ is the initial part (Thai: บทนำ)."
        },
        {
            question: "The critic provided a __________ analysis of the literary work.",
            options: ["superficial", "in-depth", "cursory", "shallow"],
            correct: 1,
            explanation: "'In-depth' means thorough and detailed (Thai: ละเอียดถี่ถ้วน).",
            justification: "‘Superficial’ means only on the surface (Thai: ผิวเผิน). ‘Cursory’ means hasty and not detailed (Thai: ผิวเผิน). ‘Shallow’ means lacking depth (Thai: ตื้นเขิน)."
        },
        {
            question: "The writer's prose was both __________ and eloquent.",
            options: ["clumsy", "concise", "verbose", "rambling"],
            correct: 1,
            explanation: "'Concise' means giving a lot of information clearly in few words (Thai: กระชับ).",
            justification: "‘Clumsy’ means awkward (Thai: งุ่มง่าม). ‘Verbose’ means using too many words (Thai: พูดมาก). ‘Rambling’ means lengthy and confused (Thai: เล่าเรื่องยืดยาว)."
        },
        {
            question: "The novel's characters were so __________ that they felt real.",
            options: ["flat", "one-dimensional", "lifelike", "unrealistic"],
            correct: 2,
            explanation: "'Lifelike' means very similar to real life (Thai: คล้ายของจริง).",
            justification: "‘Flat’ means lacking depth (Thai: แบนราบ). ‘One-dimensional’ means lacking complexity (Thai: ง่ายเกินไป). ‘Unrealistic’ means not genuine or believable (Thai: ไม่สมจริง)."
        },
        {
            question: "The author's narrative technique was truly __________.",
            options: ["unoriginal", "innovative", "derivative", "conventional"],
            correct: 1,
            explanation: "'Innovative' means featuring new methods; original and advanced (Thai: ใหม่และสร้างสรรค์).",
            justification: "‘Unoriginal’ means not original (Thai: ไม่เป็นต้นฉบับ). ‘Derivative’ means copied from others (Thai: ลอกเลียนแบบ). ‘Conventional’ means usual or traditional (Thai: ตามธรรมเนียม)."
        },
        {
            question: "The book's __________ was thought-provoking and engaging.",
            options: ["dullness", "premise", "simplicity", "triviality"],
            correct: 1,
            explanation: "'Premise' means a statement or idea on which an argument is based (Thai: สมมติฐาน).",
            justification: "‘Dullness’ means lack of interest (Thai: ความน่าเบื่อ). ‘Simplicity’ means ease of understanding (Thai: ความเรียบง่าย). ‘Triviality’ means lack of importance (Thai: ความไร้สาระ)."
        },
        {
            question: "The writer used __________ to create a sense of mystery.",
            options: ["clarity", "foreshadowing", "explication", "directness"],
            correct: 1,
            explanation: "'Foreshadowing' is a literary device giving a hint of what is to come (Thai: การบ่งบอกล่วงหน้า).",
            justification: "‘Clarification’ means making clear (Thai: การชี้แจง). ‘Explication’ means detailed explanation (Thai: การอธิบายเจาะลึก). ‘Directness’ means straightforwardness (Thai: ความตรงไปตรงมา)."
        },
        {
            question: "The essay's conclusion served to __________ the main points.",
            options: ["introduce", "reiterate", "obscure", "complicate"],
            correct: 1,
            explanation: "'Reiterate' means to say again for emphasis (Thai: กล่าวซ้ำ).",
            justification: "‘Introduce’ means to bring in (Thai: แนะนำ). ‘Obscure’ means to make unclear (Thai: ทำให้คลุมเครือ). ‘Complicate’ means to make difficult (Thai: ทำให้ซับซ้อน)."
        },
        {
            question: "The novel's __________ explores the complexities of human relationships.",
            options: ["superficiality", "depth", "shallowness", "simplicity"],
            correct: 1,
            explanation: "'Depth' means great complexity or intensity (Thai: ความลึกซึ้ง).",
            justification: "‘Superficiality’ means lack of depth (Thai: ความตื้นเขิน). ‘Shallowness’ means superficial nature (Thai: ความตื้น). ‘Simplicity’ means ease or plainness (Thai: ความเรียบง่าย)."
        },
        {
            question: "The author's use of __________ language made the text accessible to all readers.",
            options: ["complex", "simple", "abstruse", "technical"],
            correct: 1,
            explanation: "'Simple' means easy to understand (Thai: ง่าย).",
            justification: "‘Complex’ means complicated (Thai: ซับซ้อน). ‘Abstruse’ means difficult to understand (Thai: เข้าใจยาก). ‘Technical’ means specialised (Thai: เชิงเทคนิค)."
        },
        {
            question: "The poem's __________ was open to various interpretations.",
            options: ["literal meaning", "ambiguity", "clarity", "precision"],
            correct: 1,
            explanation: "'Ambiguity' means openness to more than one interpretation (Thai: ความกำกวม).",
            justification: "‘Literal meaning’ means exact meaning (Thai: ความหมายตามตัว). ‘Clarity’ means clearness (Thai: ความชัดเจน). ‘Precision’ means exactness (Thai: ความแม่นยำ)."
        },
        {
            question: "The writer's vocabulary was truly __________.",
            options: ["limited", "extensive", "narrow", "sparse"],
            correct: 1,
            explanation: "'Extensive' means large in amount or range (Thai: กว้างขวาง).",
            justification: "‘Limited’ means small in amount (Thai: จำกัด). ‘Narrow’ means not wide (Thai: แคบ). ‘Sparse’ means thinly distributed (Thai: น้อยและกระจาย)."
        },
        {
            question: "The novel's __________ characters drove the plot forward.",
            options: ["static", "dynamic", "unchanging", "flat"],
            correct: 1,
            explanation: "'Dynamic' means characterized by constant change or progress (Thai: มีชีวิตชีวา, เปลี่ยนแปลงตลอดเวลา).",
            justification: "‘Static’ means showing little or no change (Thai: คงที่). ‘Unchanging’ means remaining the same (Thai: คงเดิม). ‘Flat’ means lacking development (Thai: น่าเบื่อ)."
        },
        {
            question: "The editor helped to __________ the manuscript for publication.",
            options: ["complicate", "refine", "muddle", "corrupt"],
            correct: 1,
            explanation: "'Refine' means to improve by making small changes (Thai: ปรับปรุง, กลั่นกรอง).",
            justification: "‘Complicate’ means to make difficult (Thai: ทำให้ซับซ้อน). ‘Muddle’ means to confuse (Thai: ทำให้ยุ่งเหยิง). ‘Corrupt’ means to damage morally (Thai: ทำให้เสื่อมเสีย)."
        },
        {
            question: "The story's __________ was both tragic and inevitable.",
            options: ["beginning", "denouement", "introduction", "exposition"],
            correct: 1,
            explanation: "'Denouement' is the final outcome or resolution of the narrative (Thai: การคลี่คลายเรื่อง).",
            justification: "‘Beginning’ is the start (Thai: จุดเริ่มต้น). ‘Introduction’ is the opening part (ไทย: บทนำ). ‘Exposition’ is background information (ไทย: การเปิดเผยข้อมูล)."
        }
    ],

    [
        // Quiz Set 13: Current Affairs & Politics
        {
            question: "The government plans to __________ new legislation to address climate change.",
            options: ["repeal", "enact", "abolish", "revoke"],
            correct: 1,
            explanation: "'Enact' means to make (a bill or other proposal) law (Thai: บังคับใช้กฎหมาย).",
            justification: "‘Repeal’ means to revoke or annul (a law) (Thai: ยกเลิก). ‘Abolish’ means to formally put an end to (a system) (Thai: ยกเลิก). ‘Revoke’ means to put an end to the validity of (Thai: เพิกถอน)."
        },
        {
            question: "The debate was characterized by a __________ exchange of views.",
            options: ["harmonious", "heated", "calm", "peaceful"],
            correct: 1,
            explanation: "'Heated' means (of a discussion) angry or passionate (Thai: รุนแรง, เดือดดาล).",
            justification: "‘Harmonious’ means forming a pleasing whole (Thai: กลมกลืน). ‘Calm’ means peaceful and quiet (Thai: สุขุม). ‘Peaceful’ means free from disturbance (Thai: สงบ)."
        },
        {
            question: "The politician delivered a __________ speech to the electorate.",
            options: ["uninspiring", "stirring", "dull", "boring"],
            correct: 1,
            explanation: "'Stirring' means arousing strong emotion or excitement (Thai: กระตุ้นความรู้สึก).",
            justification: "‘Uninspiring’ means lacking inspiration (Thai: ไร้แรงบันดาลใจ). ‘Dull’ means lacking interest (Thai: น่าเบื่อ). ‘Boring’ means not interesting (Thai: น่าเบื่อ)."
        },
        {
            question: "The new policy aims to __________ social inequality.",
            options: ["exacerbate", "alleviate", "intensify", "worsen"],
            correct: 1,
            explanation: "'Alleviate' means to make less severe (Thai: บรรเทา).",
            justification: "‘Exacerbate’ means to make worse (Thai: ทำให้แย่ลง). ‘Intensify’ means to increase (Thai: เพิ่มขึ้น). ‘Worsen’ means to become worse (Thai: แย่ลง)."
        },
        {
            question: "The international community urged for a __________ resolution to the conflict.",
            options: ["violent", "peaceful", "aggressive", "hostile"],
            correct: 1,
            explanation: "'Peaceful' means free from disturbance; tranquil (Thai: สงบ).",
            justification: "‘Violent’ means using physical force to hurt (Thai: รุนแรง). ‘Aggressive’ means ready to attack (Thai: ก้าวร้าว). ‘Hostile’ means unfriendly (Thai: เป็นศัตรู)."
        },
        {
            question: "The government's decision was met with widespread __________.",
            options: ["approval", "dissent", "agreement", "support"],
            correct: 1,
            explanation: "'Dissent' means the expression of opinions different from those commonly held (Thai: ความไม่เห็นด้วย).",
            justification: "‘Approval’ means agreement (Thai: การอนุมัติ). ‘Agreement’ means consensus (Thai: ความเห็นพ้อง). ‘Support’ means backing (Thai: การสนับสนุน)."
        },
        {
            question: "The new legislation is designed to __________ economic growth.",
            options: ["hinder", "stimulate", "impede", "obstruct"],
            correct: 1,
            explanation: "'Stimulate' means to encourage or increase activity (Thai: กระตุ้น).",
            justification: "‘Hinder’ means to create difficulties (Thai: ขัดขวาง). ‘Impede’ means to delay (Thai: ขัดขวาง). ‘Obstruct’ means to block (Thai: ขวางกั้น)."
        },
        {
            question: "The political leader's speech was full of __________.",
            options: ["clarity", "rhetoric", "simplicity", "directness"],
            correct: 1,
            explanation: "'Rhetoric' means the art of persuasive speaking or writing (Thai: วาทศิลป์).",
            justification: "‘Clarity’ means clearness (Thai: ความชัดเจน). ‘Simplicity’ means plainness (ไทย: ความเรียบง่าย). ‘Directness’ means straightforwardness (ไทย: ความตรงไปตรงมา)."
        },
        {
            question: "The crisis led to a __________ of confidence in the government.",
            options: ["resurgence", "erosion", "increase", "boost"],
            correct: 1,
            explanation: "'Erosion' means gradual loss or weakening (Thai: การสึกกร่อน).",
            justification: "‘Resurgence’ means revival (ไทย: การฟื้นฟู). ‘Increase’ means growth (ไทย: การเพิ่มขึ้น). ‘Boost’ means enhancement (ไทย: การส่งเสริม)."
        },
        {
            question: "The international community needs to __________ a unified front.",
            options: ["divide", "present", "fragment", "separate"],
            correct: 1,
            explanation: "'Present' means to show or offer (Thai: นำเสนอ).",
            justification: "‘Divide’ means to separate (ไทย: แบ่งแยก). ‘Fragment’ means to break into pieces (ไทย: แตกหัก). ‘Separate’ means to set apart (ไทย: แยก)."
        },
        {
            question: "The government's actions were met with strong __________.",
            options: ["approval", "condemnation", "praise", "support"],
            correct: 1,
            explanation: "'Condemnation' means strong disapproval (Thai: การประณาม).",
            justification: "‘Approval’ means agreement (ไทย: การอนุมัติ). ‘Praise’ means commendation (ไทย: การยกย่อง). ‘Support’ means backing (ไทย: การสนับสนุน)."
        },
        {
            question: "The new policy is designed to __________ transparency.",
            options: ["obscure", "promote", "hide", "conceal"],
            correct: 1,
            explanation: "'Promote' means to encourage or support (Thai: ส่งเสริม).",
            justification: "‘Obscure’ means to make unclear (ไทย: คลุมเครือ). ‘Hide’ means to keep out of sight (ไทย: ซ่อน). ‘Conceal’ means to keep secret (ไทย: ปกปิด)."
        },
        {
            question: "The election results were a __________ to the incumbent party.",
            options: ["victory", "setback", "triumph", "success"],
            correct: 1,
            explanation: "'Setback' means a reversal or check in progress (Thai: อุปสรรค).",
            justification: "‘Victory’ means win (ไทย: ชัยชนะ). ‘Triumph’ means great success (ไทย: ประสบความสำเร็จ). ‘Success’ means achievement (ไทย: ความสำเร็จ)."
        },
        {
            question: "The government needs to __________ public trust.",
            options: ["erode", "restore", "damage", "undermine"],
            correct: 1,
            explanation: "'Restore' means to bring back or renew (Thai: ฟื้นฟู).",
            justification: "‘Erode’ means to wear away (ไทย: สึกกร่อน). ‘Damage’ means to harm (ไทย: ทำลาย). ‘Undermine’ means to weaken (ไทย: ทำลาย)."
        },
        {
            question: "The debate was marked by a lack of __________.",
            options: ["agreement", "civility", "harmony", "consensus"],
            correct: 1,
            explanation: "'Civility' means polite and courteous behaviour (Thai: มารยาท).",
            justification: "‘Agreement’ means consensus (ไทย: ข้อตกลง). ‘Harmony’ means peaceful coexistence (ไทย: ความกลมเกลียว). ‘Consensus’ means general agreement (ไทย: ความเห็นพ้อง)."
        },
        {
            question: "The new legislation will have a __________ impact on the economy.",
            options: ["negligible", "significant", "trivial", "minor"],
            correct: 1,
            explanation: "'Significant' means important and meaningful (Thai: สำคัญ).",
            justification: "‘Negligible’ means unimportant (ไทย: เล็กน้อย). ‘Trivial’ means insignificant (ไทย: ไม่สำคัญ). ‘Minor’ means less important (ไทย: เล็กน้อย)."
        },
        {
            question: "The political party aims to __________ its base.",
            options: ["alienate", "mobilize", "divide", "fragment"],
            correct: 1,
            explanation: "'Mobilize' means to organize and encourage to act (Thai: ระดม).",
            justification: "‘Alienate’ means to make hostile (ไทย: ทำให้แปลกแยก). ‘Divide’ means to separate (ไทย: แบ่งแยก). ‘Fragment’ means to break into pieces (ไทย: แตกออกเป็นชิ้น)."
        },
        {
            question: "The country is facing a period of political __________.",
            options: ["stability", "unrest", "calm", "tranquility"],
            correct: 1,
            explanation: "'Unrest' means a state of disturbance and disorder (Thai: ความไม่สงบ).",
            justification: "‘Stability’ means steadiness (ไทย: ความมั่นคง). ‘Calm’ means peaceful (ไทย: สงบ). ‘Tranquility’ means peacefulness (ไทย: ความสงบ)."
        },
        {
            question: "The government needs to __________ its policies to address public concerns.",
            options: ["maintain", "revise", "preserve", "adhere"],
            correct: 1,
            explanation: "'Revise' means to reconsider and modify (Thai: ทบทวน).",
            justification: "‘Maintain’ means to keep as is (ไทย: รักษา). ‘Preserve’ means to keep unchanged (ไทย: รักษาไว้). ‘Adhere’ means to stick to (ไทย: ยึดมั่น)."
        },
        {
            question: "The international summit aimed to __________ global cooperation.",
            options: ["hinder", "foster", "impede", "obstruct"],
            correct: 1,
            explanation: "'Foster' means to encourage or promote (Thai: ส่งเสริม).",
            justification: "‘Hinder’ means to create difficulties (ไทย: ขัดขวาง). ‘Impede’ means to delay (ไทย: ขัดขวาง). ‘Obstruct’ means to block (ไทย: กีดขวาง)."
        }
    ],

    [
        // Quiz Set 14: Environment & Sustainability
        {
            question: "Reducing carbon emissions is __________ for mitigating climate change.",
            options: ["optional", "imperative", "trivial", "secondary"],
            correct: 1,
            explanation: "'Imperative' means of vital importance; crucial (Thai: จำเป็นอย่างยิ่ง).",
            justification: "‘Optional’ means available as a choice (Thai: เป็นทางเลือก). ‘Trivial’ means of little value or importance (Thai: เล็กน้อย). ‘Secondary’ means less important than something else (Thai: รอง)."
        },
        {
            question: "The company aims to __________ its ecological footprint.",
            options: ["increase", "minimize", "maximize", "expand"],
            correct: 1,
            explanation: "'Minimize' means to reduce (something, especially something undesirable) to the smallest possible amount or degree (Thai: ลดให้น้อยที่สุด).",
            justification: "‘Increase’ means to become or make greater in size, amount, or degree (Thai: เพิ่มขึ้น). ‘Maximize’ means to make as great or large as possible (Thai: ทำให้มากที่สุด). ‘Expand’ means to become or make larger or more extensive (Thai: ขยาย)."
        },
        {
            question: "Sustainable practices are essential to __________ natural resources for future generations.",
            options: ["deplete", "conserve", "waste", "exploit"],
            correct: 1,
            explanation: "'Conserve' means to protect from harm or waste (Thai: อนุรักษ์).",
            justification: "‘Deplete’ means to use up (Thai: ใช้จนหมด). ‘Waste’ means to use carelessly (Thai: เสียเปล่า). ‘Exploit’ means to make selfish use of (Thai: เอาเปรียบ)."
        },
        {
            question: "The new technology offers a __________ solution for waste management.",
            options: ["ineffective", "innovative", "outdated", "conventional"],
            correct: 1,
            explanation: "'Innovative' means featuring new methods; advanced and original (Thai: ใหม่และสร้างสรรค์).",
            justification: "‘Ineffective’ means not producing the desired effect (Thai: ไม่มีประสิทธิภาพ). ‘Outdated’ means old-fashioned (Thai: ล้าสมัย). ‘Conventional’ means based on generally accepted methods (Thai: ตามธรรมเนียม)."
        },
        {
            question: "Pollution can __________ ecosystems and biodiversity.",
            options: ["enhance", "degrade", "improve", "strengthen"],
            correct: 1,
            explanation: "'Degrade' means to lower the character or quality of (Thai: เสื่อมโทรม).",
            justification: "‘Enhance’ means to improve (Thai: ปรับปรุง). ‘Improve’ means to make better (Thai: ดีขึ้น). ‘Strengthen’ means to make stronger (Thai: เสริมกำลัง)."
        },
        {
            question: "The government is promoting policies to __________ renewable energy.",
            options: ["discourage", "promote", "hinder", "prevent"],
            correct: 1,
            explanation: "'Promote' means to support or actively encourage (Thai: ส่งเสริม).",
            justification: "‘Discourage’ means to cause loss of confidence (Thai: ทำให้ท้อใจ). ‘Hinder’ means to create difficulties (Thai: ขัดขวาง). ‘Prevent’ means to stop (Thai: ป้องกัน)."
        },
        {
            question: "The long-term effects of environmental damage are often __________.",
            options: ["obvious", "insidious", "clear", "apparent"],
            correct: 1,
            explanation: "'Insidious' means proceeding gradually but with harmful effects (Thai: อย่างลึกลับและอันตราย).",
            justification: "‘Obvious’ means easily seen or understood (Thai: ชัดเจน). ‘Clear’ means easy to perceive or understand (Thai: ชัดเจน). ‘Apparent’ means clearly visible or understood (Thai: ชัดเจน)."
        },
        {
            question: "Many species are facing __________ due to habitat destruction.",
            options: ["proliferation", "extinction", "growth", "survival"],
            correct: 1,
            explanation: "'Extinction' means the complete disappearance of a species (Thai: การสูญพันธุ์).",
            justification: "‘Proliferation’ means rapid increase (Thai: การเพิ่มจำนวนอย่างรวดเร็ว). ‘Growth’ means increase in size or number (Thai: การเติบโต). ‘Survival’ means the continuation of life (Thai: การอยู่รอด)."
        },
        {
            question: "The community is working to __________ local green spaces.",
            options: ["destroy", "restore", "neglect", "damage"],
            correct: 1,
            explanation: "'Restore' means to bring back to a former condition (Thai: ฟื้นฟู).",
            justification: "‘Destroy’ means to ruin (Thai: ทำลาย). ‘Neglect’ means to fail to care for (Thai: ละเลย). ‘Damage’ means to harm (Thai: ทำให้เสียหาย)."
        },
        {
            question: "It is essential to __________ a balance between economic development and environmental protection.",
            options: ["disregard", "strike", "ignore", "neglect"],
            correct: 1,
            explanation: "'Strike a balance' means to find a satisfactory compromise (Thai: หาจุดสมดุล).",
            justification: "‘Disregard’ means to pay no attention to (Thai: ไม่สนใจ). ‘Ignore’ means to deliberately not notice (Thai: เมินเฉย). ‘Neglect’ means to fail to care for (Thai: ละเลย)."
        },
        {
            question: "The new regulations aim to __________ industrial pollution.",
            options: ["increase", "curtail", "expand", "allow"],
            correct: 1,
            explanation: "'Curtail' means to reduce or impose restrictions on (Thai: ลด).",
            justification: "‘Increase’ means to make larger (Thai: เพิ่มขึ้น). ‘Expand’ means to make bigger or more extensive (Thai: ขยาย). ‘Allow’ means to permit (Thai: อนุญาต)."
        },
        {
            question: "The environmental impact assessment provides a __________ analysis.",
            options: ["superficial", "comprehensive", "cursory", "shallow"],
            correct: 1,
            explanation: "'Comprehensive' means including all or nearly all elements or aspects (Thai: ครอบคลุม).",
            justification: "‘Superficial’ means shallow or surface level (Thai: ผิวเผิน). ‘Cursory’ means done quickly without attention to detail (Thai: ผิวเผิน). ‘Shallow’ means lacking depth (Thai: ตื้น)."
        },
        {
            question: "Climate change poses a __________ threat to global stability.",
            options: ["minor", "grave", "trivial", "insignificant"],
            correct: 1,
            explanation: "'Grave' means very serious or important (Thai: รุนแรง).",
            justification: "‘Minor’ means less important (Thai: เล็กน้อย). ‘Trivial’ means insignificant (Thai: ไม่สำคัญ). ‘Insignificant’ means unimportant (Thai: ไม่มีความสำคัญ)."
        },
        {
            question: "The initiative aims to __________ communities to adopt sustainable practices.",
            options: ["discourage", "empower", "hinder", "prevent"],
            correct: 1,
            explanation: "'Empower' means to give the authority or power to do something (Thai: ให้อำนาจ).",
            justification: "‘Discourage’ means to cause loss of confidence (Thai: ทำให้ท้อใจ). ‘Hinder’ means to create difficulties (Thai: ขัดขวาง). ‘Prevent’ means to stop (Thai: ป้องกัน)."
        },
        {
            question: "The depletion of natural resources is a __________ concern.",
            options: ["local", "global", "minor", "insignificant"],
            correct: 1,
            explanation: "'Global' means relating to the whole world (Thai: ทั่วโลก).",
            justification: "‘Local’ means concerning a particular area (Thai: ท้องถิ่น). ‘Minor’ means less important (Thai: เล็กน้อย). ‘Insignificant’ means unimportant (Thai: ไม่สำคัญ)."
        },
        {
            question: "The government is investing in technologies that __________ energy efficiency.",
            options: ["decrease", "improve", "reduce", "lower"],
            correct: 1,
            explanation: "'Improve' means to make or become better (Thai: ปรับปรุง).",
            justification: "‘Decrease’ means to make smaller (Thai: ลดลง). ‘Reduce’ means to make less (Thai: ลด). ‘Lower’ means to move downward (Thai: ลด)."
        },
        {
            question: "Protecting biodiversity is __________ for ecosystem health.",
            options: ["unimportant", "paramount", "trivial", "insignificant"],
            correct: 1,
            explanation: "'Paramount' means more important than anything else; supreme (Thai: สำคัญยิ่ง).",
            justification: "‘Unimportant’ means not important (Thai: ไม่สำคัญ). ‘Trivial’ means of little value (Thai: เล็กน้อย). ‘Insignificant’ means unimportant (Thai: ไม่มีนัยสำคัญ)."
        },
        {
            question: "The company aims to __________ its environmental impact.",
            options: ["increase", "mitigate", "exacerbate", "aggravate"],
            correct: 1,
            explanation: "'Mitigate' means to make (something bad) less severe (Thai: บรรเทา).",
            justification: "‘Increase’ means to make greater (Thai: เพิ่ม). ‘Exacerbate’ means to make worse (Thai: ทำให้แย่ลง). ‘Aggravate’ means to worsen (Thai: ทำให้รุนแรงขึ้น)."
        },
        {
            question: "The shift to renewable energy is a __________ transition.",
            options: ["sudden", "gradual", "abrupt", "immediate"],
            correct: 1,
            explanation: "'Gradual' means happening slowly over time (Thai: ค่อยเป็นค่อยไป).",
            justification: "‘Sudden’ means happening quickly and unexpectedly (Thai: ฉับพลัน). ‘Abrupt’ means sudden and unexpected (Thai: ทันทีทันใด). ‘Immediate’ means happening right away (Thai: ทันที)."
        },
        {
            question: "The public needs to be __________ about environmental issues.",
            options: ["ignorant", "informed", "unaware", "misled"],
            correct: 1,
            explanation: "'Informed' means having knowledge or information (Thai: มีความรู้).",
            justification: "‘Ignorant’ means lacking knowledge (Thai: ไม่รู้). ‘Unaware’ means not conscious of something (Thai: ไม่รับรู้). ‘Misled’ means wrongly informed (Thai: เข้าใจผิด)."
        }
    ],
    
    [
        // Quiz Set 15: Social Issues & Ethics
        {
            question: "It is important to __________ discrimination in all its forms.",
            options: ["tolerate", "combat", "accept", "condone"],
            correct: 1,
            explanation: "'Combat' means to take action to reduce or prevent something undesirable (Thai: ต่อสู้).",
            justification: "‘Tolerate’ means to allow or endure (Thai: ทน). ‘Accept’ means to receive willingly (Thai: ยอมรับ). ‘Condone’ means to overlook or forgive (Thai: ให้อภัย)."
        },
        {
            question: "The organization advocates for __________ rights for all citizens.",
            options: ["unequal", "equal", "limited", "restricted"],
            correct: 1,
            explanation: "'Equal' means the same in quantity, size, degree, value, or status (Thai: เท่าเทียม).",
            justification: "‘Unequal’ means not equal (Thai: ไม่เท่าเทียม). ‘Limited’ means confined within limits (Thai: จำกัด). ‘Restricted’ means controlled or limited (Thai: จำกัด)."
        },
        {
            question: "Poverty remains a __________ challenge in many parts of the world.",
            options: ["minor", "pressing", "trivial", "insignificant"],
            correct: 1,
            explanation: "'Pressing' means requiring immediate attention (Thai: เร่งด่วน).",
            justification: "‘Minor’ means small or unimportant (Thai: เล็กน้อย). ‘Trivial’ means of little importance (Thai: เล็กน้อย). ‘Insignificant’ means not important (Thai: ไม่มีความสำคัญ)."
        },
        {
            question: "Ethical considerations should __________ all decision-making.",
            options: ["ignore", "guide", "disregard", "neglect"],
            correct: 1,
            explanation: "'Guide' means to influence or direct (Thai: ชี้นำ).",
            justification: "‘Ignore’ means to pay no attention to (Thai: ไม่สนใจ). ‘Disregard’ means to disregard (Thai: เพิกเฉย). ‘Neglect’ means to fail to care for properly (Thai: ละเลย)."
        },
        {
            question: "The community worked together to __________ social cohesion.",
            options: ["disrupt", "foster", "divide", "fragment"],
            correct: 1,
            explanation: "'Foster' means to encourage or promote development (Thai: ส่งเสริม).",
            justification: "‘Disrupt’ means to interrupt (Thai: ขัดขวาง). ‘Divide’ means to separate (Thai: แบ่งแยก). ‘Fragment’ means to break into pieces (Thai: แตกเป็นชิ้น)."
        },
        {
            question: "The debate centered on the __________ of individual liberty versus collective security.",
            options: ["harmony", "dilemma", "agreement", "consensus"],
            correct: 1,
            explanation: "'Dilemma' means a difficult choice between two or more alternatives (Thai: สถานการณ์ที่ยากลำบาก).",
            justification: "‘Harmony’ means agreement (Thai: ความกลมเกลียว). ‘Agreement’ means consensus (Thai: ข้อตกลง). ‘Consensus’ means general agreement (Thai: ความเห็นพ้อง)."
        },
        {
            question: "The organization aims to __________ marginalized communities.",
            options: ["exclude", "empower", "isolate", "discriminate against"],
            correct: 1,
            explanation: "'Empower' means to give authority or power (Thai: ให้อำนาจ).",
            justification: "‘Exclude’ means to keep out (Thai: กีดกัน). ‘Isolate’ means to separate (Thai: แยก). ‘Discriminate against’ means to treat unfairly (Thai: เลือกปฏิบัติ)."
        },
        {
            question: "The new policy is designed to __________ vulnerable groups.",
            options: ["harm", "protect", "expose", "endanger"],
            correct: 1,
            explanation: "'Protect' means to keep safe from harm (Thai: ปกป้อง).",
            justification: "‘Harm’ means to cause injury (Thai: ทำร้าย). ‘Expose’ means to uncover (Thai: เปิดเผย). ‘Endanger’ means to put at risk (Thai: ทำให้อันตราย)."
        },
        {
            question: "It is crucial to __________ empathy in society.",
            options: ["suppress", "cultivate", "stifle", "neglect"],
            correct: 1,
            explanation: "'Cultivate' means to develop or nurture (Thai: เพาะฝัง).",
            justification: "‘Suppress’ means to stop by force (Thai: ปราบปราม). ‘Stifle’ means to prevent growth (Thai: ระงับ). ‘Neglect’ means to fail to care for (Thai: ละเลย)."
        },
        {
            question: "The report highlighted the __________ disparities in healthcare access.",
            options: ["minor", "stark", "slight", "negligible"],
            correct: 1,
            explanation: "'Stark' means severe or clear and obvious (Thai: ชัดเจน).",
            justification: "‘Minor’ means small (Thai: เล็กน้อย). ‘Slight’ means small in degree (Thai: เล็กน้อย). ‘Negligible’ means too small to be important (Thai: เล็กน้อย)."
        },
        {
            question: "The public debate focused on the __________ implications of artificial intelligence.",
            options: ["trivial", "ethical", "insignificant", "minor"],
            correct: 1,
            explanation: "'Ethical' means relating to moral principles (Thai: ทางจริยธรรม).",
            justification: "‘Trivial’ means unimportant (Thai: เล็กน้อย). ‘Insignificant’ means too small to matter (Thai: ไม่มีความสำคัญ). ‘Minor’ means less important (Thai: เล็กน้อย)."
        },
        {
            question: "The organization aims to __________ awareness about human trafficking.",
            options: ["lower", "raise", "decrease", "reduce"],
            correct: 1,
            explanation: "'Raise' means to increase or bring up (Thai: เพิ่ม).",
            justification: "‘Lower’ means to reduce (Thai: ลด). ‘Decrease’ means to diminish (Thai: ลดลง). ‘Reduce’ means to make smaller (Thai: ลด)."
        },
        {
            question: "The new initiative seeks to __________ social justice.",
            options: ["undermine", "promote", "hinder", "obstruct"],
            correct: 1,
            explanation: "'Promote' means to support or encourage (Thai: ส่งเสริม).",
            justification: "‘Undermine’ means to weaken (Thai: ทำลาย). ‘Hinder’ means to create difficulties (Thai: ขัดขวาง). ‘Obstruct’ means to block (Thai: กีดขวาง)."
        },
        {
            question: "The community showed great __________ in supporting those affected by the disaster.",
            options: ["indifference", "solidarity", "apathy", "disinterest"],
            correct: 1,
            explanation: "'Solidarity' means unity and mutual support within a group (Thai: ความสามัคคี).",
            justification: "‘Indifference’ means lack of interest (Thai: ความไม่สนใจ). ‘Apathy’ means lack of enthusiasm (Thai: ความเฉื่อยชา). ‘Disinterest’ means lack of interest (Thai: ความไม่สนใจ)."
        },
        {
            question: "The government is working to __________ a more equitable society.",
            options: ["dismantle", "build", "demolish", "destroy"],
            correct: 1,
            explanation: "'Build' means to develop or establish (Thai: สร้าง).",
            justification: "‘Dismantle’ means to take apart (Thai: รื้อ). ‘Demolish’ means to tear down (Thai: ทำลาย). ‘Destroy’ means to ruin completely (Thai: ทำลาย)."
        },
        {
            question: "The debate highlighted the __________ of different perspectives.",
            options: ["uniformity", "diversity", "homogeneity", "conformity"],
            correct: 1,
            explanation: "'Diversity' means variety or difference (Thai: ความหลากหลาย).",
            justification: "‘Uniformity’ means sameness (Thai: ความเหมือนกัน). ‘Homogeneity’ means uniformity (Thai: ความสม่ำเสมอ). ‘Conformity’ means compliance (Thai: การปฏิบัติตาม)."
        },
        {
            question: "The new legislation will have a __________ impact on vulnerable populations.",
            options: ["positive", "adverse", "beneficial", "favorable"],
            correct: 1,
            explanation: "'Adverse' means harmful or unfavorable (Thai: เป็นอันตราย).",
            justification: "‘Positive’ means good or beneficial (Thai: เชิงบวก). ‘Beneficial’ means helpful (Thai: มีประโยชน์). ‘Favorable’ means approving (Thai: เป็นที่ชอบใจ)."
        },
        {
            question: "The organization aims to __________ social responsibility.",
            options: ["discourage", "instill", "hinder", "prevent"],
            correct: 1,
            explanation: "'Instill' means to gradually but firmly establish an idea or attitude (Thai: ปลูกฝัง).",
            justification: "‘Discourage’ means to dishearten (Thai: ทำให้ท้อใจ). ‘Hinder’ means to impede (Thai: ขัดขวาง). ‘Prevent’ means to stop (Thai: ป้องกัน)."
        },
        {
            question: "The issue requires a __________ approach from all stakeholders.",
            options: ["fragmented", "collaborative", "isolated", "individual"],
            correct: 1,
            explanation: "'Collaborative' means involving cooperation between parties (Thai: ร่วมมือกัน).",
            justification: "‘Fragmented’ means broken into parts (Thai: แตกแยก). ‘Isolated’ means separated (Thai: โดดเดี่ยว). ‘Individual’ means single or separate (Thai: แต่ละบุคคล)."
        },
        {
            question: "The campaign seeks to __________ stereotypes.",
            options: ["reinforce", "challenge", "perpetuate", "uphold"],
            correct: 1,
            explanation: "'Challenge' means to question or dispute (Thai: ท้าทาย).",
            justification: "‘Reinforce’ means to strengthen (Thai: สนับสนุน). ‘Perpetuate’ means to cause to continue (Thai: ทำให้ยั่งยืน). ‘Uphold’ means to support (Thai: สนับสนุน)."
        }
    ]    
];
    
