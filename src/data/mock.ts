// ==========================================
// VoiCare モックデータ
// ==========================================

export interface Patient {
  id: string;
  name: string;
  nameKana: string;
  age: number;
  gender: '男性' | '女性';
  address: string;
  condition: string;
  careLevel: string;
  doctor: string;
  hospital: string;
  startDate: string;
  avatar: string;
  tags: string[];
}

export interface VisitRecord {
  id: string;
  patientId: string;
  patientName: string;
  date: string;
  time: string;
  duration: string;
  status: 'transcribing' | 'generating' | 'review' | 'completed';
  audioLength: string;
  transcript?: string;
  report?: NursingReport;
}

export interface NursingReport {
  subjective: string;
  objective: string;
  assessment: string;
  plan: string;
  vitals: {
    temperature: string;
    bloodPressure: string;
    pulse: string;
    spo2: string;
    respiration: string;
  };
  careContent: string[];
  notes: string;
}

export interface MonthlyReport {
  patientId: string;
  patientName: string;
  month: string;
  visitCount: number;
  summary: string;
  statusChange: string;
  futurePlan: string;
}

// ----- 利用者データ -----
export const patients: Patient[] = [
  {
    id: 'p001',
    name: '佐藤 花子',
    nameKana: 'サトウ ハナコ',
    age: 82,
    gender: '女性',
    address: '東京都世田谷区松原3-12-5',
    condition: '脳梗塞後遺症、左片麻痺、褥瘡（仙骨部）',
    careLevel: '要介護3',
    doctor: '田中 一郎',
    hospital: '世田谷中央病院',
    startDate: '2025-04-01',
    avatar: '🌸',
    tags: ['褥瘡', 'リハビリ', '独居'],
  },
  {
    id: 'p002',
    name: '鈴木 太郎',
    nameKana: 'スズキ タロウ',
    age: 75,
    gender: '男性',
    address: '東京都世田谷区北沢2-8-11',
    condition: '2型糖尿病、インスリン自己注射管理、糖尿病性腎症',
    careLevel: '要介護1',
    doctor: '山田 裕子',
    hospital: '下北沢クリニック',
    startDate: '2025-08-15',
    avatar: '🍵',
    tags: ['糖尿病', 'インスリン', '夫婦世帯'],
  },
  {
    id: 'p003',
    name: '田中 美智子',
    nameKana: 'タナカ ミチコ',
    age: 88,
    gender: '女性',
    address: '東京都世田谷区経堂5-2-17',
    condition: '慢性心不全、在宅酸素療法（HOT）2L/min',
    careLevel: '要介護4',
    doctor: '佐々木 健',
    hospital: '経堂ハートクリニック',
    startDate: '2025-01-10',
    avatar: '🌷',
    tags: ['心不全', 'HOT', '家族同居'],
  },
];

// ----- 訪問記録データ -----
export const visitRecords: VisitRecord[] = [
  {
    id: 'v001',
    patientId: 'p001',
    patientName: '佐藤 花子',
    date: '2026-02-27',
    time: '09:30',
    duration: '45分',
    status: 'completed',
    audioLength: '3:24',
    transcript: `佐藤花子さんの訪問です。到着時、ベッド上で覚醒されていました。「昨日は少しよく眠れた」とのこと。仙骨部の褥瘡を確認しましたが、前回より少し縮小傾向です。サイズは2センチ×1.5センチ、深さは真皮まで。浸出液は少量、色はやや黄色がかっています。洗浄してゲーベンクリームを塗布、ドレッシング材で被覆しました。体位変換のクッション位置を再調整。ご本人にも横向きの姿勢を意識してもらうようお伝えしました。バイタルは体温36.4度、血圧138/82、脈拍72、SpO2 97%です。左上肢のリハビリ、グーパー運動を10回3セット実施。握力はやや改善傾向。次回も同様のケアを継続します。`,
    report: {
      subjective: '「昨日は少しよく眠れた」との発言あり。食欲は普通。排泄は自力でポータブルトイレ使用。',
      objective: '仙骨部褥瘡：2.0cm×1.5cm（前回2.2cm×1.8cm）、深さ真皮まで。浸出液少量、黄色調。肉芽形成良好。左上肢握力やや改善。',
      assessment: '褥瘡は縮小傾向で改善に向かっている。体位変換の自己管理も徐々にできるようになってきている。リハビリの効果も見られ、ADL維持に寄与。',
      plan: '褥瘡ケア継続（洗浄＋ゲーベンクリーム＋被覆）。体位変換指導の強化。左上肢リハビリ継続。次回訪問時に褥瘡サイズの再評価。',
      vitals: {
        temperature: '36.4',
        bloodPressure: '138/82',
        pulse: '72',
        spo2: '97',
        respiration: '16',
      },
      careContent: [
        '褥瘡洗浄・処置（ゲーベンクリーム塗布、ドレッシング材被覆）',
        '体位変換クッション位置調整',
        '左上肢リハビリ（グーパー運動10回×3セット）',
        'バイタルサイン測定',
      ],
      notes: '体位変換の自己管理について再指導。ご本人の意欲あり。',
    },
  },
  {
    id: 'v002',
    patientId: 'p002',
    patientName: '鈴木 太郎',
    date: '2026-02-27',
    time: '11:00',
    duration: '30分',
    status: 'completed',
    audioLength: '2:15',
    transcript: `鈴木太郎さんの訪問です。奥様が出迎えてくださいました。ご本人は居間でテレビを見ておられました。インスリン自己注射の手技確認、問題なく実施できています。注射部位のローテーションも適切です。ただ血糖自己測定の記録を見ると、朝食前の値がやや高め、昨日は180ありました。食事内容を確認すると、夜に果物を多めに摂取されていたとのこと。果物の糖質について改めて説明しました。バイタルは体温36.2度、血圧126/78、脈拍68、SpO2 98%。足の観察、特に異常なし。爪切り実施。`,
    report: {
      subjective: '体調は良好との発言。夜間頻尿あり（2回程度）。食欲良好。「果物が好きでつい食べすぎてしまう」とのこと。',
      objective: 'インスリン自己注射手技問題なし。注射部位ローテーション適切。血糖自己測定記録：朝食前平均165mg/dL（やや高値）。足部視診異常なし。',
      assessment: '自己注射管理は良好。血糖コントロールがやや不安定、食事（特に間食・果物）の影響と考えられる。腎機能への影響を考慮し、食事指導の強化が必要。',
      plan: '食事指導継続（特に果物の糖質量について具体的に指導）。血糖自己測定値のモニタリング。次回訪問時に直近1週間の血糖値推移を再評価。主治医へ血糖値の報告。',
      vitals: {
        temperature: '36.2',
        bloodPressure: '126/78',
        pulse: '68',
        spo2: '98',
        respiration: '14',
      },
      careContent: [
        'インスリン自己注射手技確認',
        '血糖自己測定記録確認',
        '食事指導（果物の糖質管理）',
        'フットケア・爪切り',
        'バイタルサイン測定',
      ],
      notes: '奥様にも果物の適量について説明。ご夫婦とも理解良好。',
    },
  },
  {
    id: 'v003',
    patientId: 'p003',
    patientName: '田中 美智子',
    date: '2026-02-27',
    time: '14:00',
    duration: '50分',
    status: 'review',
    audioLength: '4:02',
    transcript: `田中美智子さんの訪問です。長女の由美さんが在宅。ご本人はベッド上で在宅酸素2リットル使用中。「今日は少し息苦しい」とのこと。SpO2を確認すると酸素下で94%、やや低め。聴診で両下肺野にわずかに湿性ラ音を聴取。下肢の浮腫を確認、足背に軽度の圧痕性浮腫あり。体重は前回より0.8キロ増加。心不全の増悪兆候の可能性があるため、主治医の佐々木先生に電話で報告しました。利尿剤の増量指示をいただきました。フロセミド20mgから40mgに変更。服薬管理について長女さんに説明。水分制限の再確認。バイタルは体温36.6度、血圧108/68、脈拍88、SpO2は酸素2Lで94%。`,
    report: {
      subjective: '「今日は少し息苦しい」との訴えあり。昨晩は起座呼吸なし。食欲はやや低下。排尿回数減少（日中3回程度）。',
      objective: '両下肺野に湿性ラ音（+）。下肢浮腫（+）足背に軽度圧痕性。体重42.8kg（前回42.0kg、+0.8kg）。SpO2 94%（O2 2L/min）。頸静脈怒張（−）。',
      assessment: '呼吸苦・下肢浮腫・体重増加・SpO2低下から心不全増悪の兆候あり。利尿剤増量の指示あり。今後の経過観察が重要。',
      plan: 'フロセミド40mgへ増量（主治医指示）。水分制限1000ml/日の再徹底。体重・SpO2の毎日の自己測定を家族に依頼。翌日に臨時訪問予定。症状悪化時は緊急連絡。',
      vitals: {
        temperature: '36.6',
        bloodPressure: '108/68',
        pulse: '88',
        spo2: '94',
        respiration: '22',
      },
      careContent: [
        '全身状態観察（呼吸音聴診、浮腫確認）',
        'バイタルサイン測定',
        '在宅酸素療法管理確認',
        '主治医への電話報告・指示受け',
        '服薬変更に関する説明（長女へ）',
        '水分制限・体重管理の再指導',
      ],
      notes: '翌日臨時訪問予定。長女に体重・SpO2記録表を渡す。緊急時の連絡先を再確認。',
    },
  },
  {
    id: 'v004',
    patientId: 'p001',
    patientName: '佐藤 花子',
    date: '2026-02-25',
    time: '09:30',
    duration: '40分',
    status: 'completed',
    audioLength: '2:58',
    transcript: `佐藤花子さん、2月25日の訪問です。やや眠そうな様子。昨晩あまり眠れなかったとのこと。褥瘡の処置を実施。サイズは2.2cm×1.8cm。前回と大きな変化なし。リハビリは少し疲れているとのことで軽めに実施しました。`,
    report: {
      subjective: '「昨晩はあまり眠れなかった」との発言。やや倦怠感あり。食欲は普通。',
      objective: '仙骨部褥瘡：2.2cm×1.8cm、前回と著変なし。表情にやや疲労感。',
      assessment: '褥瘡は横ばい。睡眠状況の悪化が気になる。不眠の原因を評価し対応を検討。',
      plan: '褥瘡ケア継続。睡眠環境の確認。不眠が続くようであれば主治医に相談。',
      vitals: {
        temperature: '36.5',
        bloodPressure: '142/86',
        pulse: '76',
        spo2: '96',
        respiration: '16',
      },
      careContent: [
        '褥瘡洗浄・処置',
        '左上肢リハビリ（軽度）',
        'バイタルサイン測定',
        '睡眠状況の確認',
      ],
      notes: '不眠の原因を次回確認。痛みや不安の有無を聴取する。',
    },
  },
  {
    id: 'v005',
    patientId: 'p003',
    patientName: '田中 美智子',
    date: '2026-02-24',
    time: '14:00',
    duration: '45分',
    status: 'completed',
    audioLength: '3:30',
    transcript: `田中美智子さん、2月24日の訪問。長女の由美さんが在宅。本日は状態安定している。SpO2は96%で良好。浮腫は軽度。体重42.0kgで安定。`,
    report: {
      subjective: '呼吸苦なし。「今日は調子がいい」との発言。食欲あり。',
      objective: 'SpO2 96%（O2 2L/min）。下肢浮腫軽度。体重42.0kg（安定）。呼吸音：清。',
      assessment: '心不全は現在安定。在宅酸素療法の管理も良好。現行の治療を継続。',
      plan: '現行ケア継続。体重・SpO2のセルフモニタリング継続。次回定期訪問。',
      vitals: {
        temperature: '36.3',
        bloodPressure: '112/72',
        pulse: '78',
        spo2: '96',
        respiration: '18',
      },
      careContent: [
        '全身状態観察',
        'バイタルサイン測定',
        '在宅酸素療法管理確認',
        '服薬確認',
      ],
      notes: '状態安定。長女の介護負担感について次回確認。',
    },
  },
];

// ----- 月次報告書データ -----
export const monthlyReports: MonthlyReport[] = [
  {
    patientId: 'p001',
    patientName: '佐藤 花子',
    month: '2026年2月',
    visitCount: 8,
    summary: '仙骨部褥瘡は月初の2.5cm×2.0cmから月末には2.0cm×1.5cmまで縮小し、改善傾向が顕著。肉芽形成も良好。体位変換の自己管理意識が向上し、ご本人の積極的な取り組みが奏功している。左上肢のリハビリテーションでは握力の改善が見られ、ADLの維持に貢献。一方、月半ばに不眠の訴えがあり、環境調整で改善した。',
    statusChange: '褥瘡：改善傾向（サイズ縮小）。左上肢機能：やや改善。睡眠：一時的な不眠あるも改善。',
    futurePlan: '褥瘡ケアの継続と完治を目指す。リハビリ強度の段階的な増加を検討。睡眠状況のモニタリング継続。来月の主治医診察時に褥瘡の経過を報告予定。',
  },
  {
    patientId: 'p002',
    patientName: '鈴木 太郎',
    month: '2026年2月',
    visitCount: 4,
    summary: 'インスリン自己注射の手技は安定して実施可能。注射部位のローテーションも適切に行えている。一方、血糖コントロールはやや不安定で、特に果物の過剰摂取による食後高血糖が課題。月後半に食事指導を強化し、奥様を含めた指導を実施。フットケアは問題なく経過。',
    statusChange: '血糖コントロール：やや不安定（食事管理の課題あり）。自己注射技術：良好維持。腎機能：安定。',
    futurePlan: '食事指導の継続強化。血糖自己測定値の推移を引き続きモニタリング。HbA1c結果を待ち主治医と方針確認。フットケア継続。',
  },
  {
    patientId: 'p003',
    patientName: '田中 美智子',
    month: '2026年2月',
    visitCount: 9,
    summary: '月前半は心不全が安定していたが、月末に増悪兆候（呼吸苦、下肢浮腫増強、体重増加、SpO2低下）を認めた。主治医に報告の上、利尿剤の増量指示を受けて対応。臨時訪問を追加し、集中的な観察を行っている。長女による在宅での体重・SpO2のセルフモニタリングが良好に機能。',
    statusChange: '心不全：月末に増悪兆候あり。利尿剤増量で対応中。在宅酸素療法：継続中（2L/min）。ADL：やや低下。',
    futurePlan: '心不全増悪への集中的な経過観察。利尿剤増量後の効果評価。必要に応じて主治医との再協議（入院の要否含む）。家族の介護負担にも配慮。',
  },
];

// ----- 今日の訪問スケジュール -----
export const todaySchedule = [
  { time: '09:30', patientId: 'p001', patientName: '佐藤 花子', status: 'completed' as const },
  { time: '11:00', patientId: 'p002', patientName: '鈴木 太郎', status: 'completed' as const },
  { time: '14:00', patientId: 'p003', patientName: '田中 美智子', status: 'completed' as const },
];

// ----- 統計 -----
export const stats = {
  todayVisits: 3,
  todayCompleted: 3,
  monthlyVisits: 21,
  pendingReports: 1,
  activePatients: 3,
};

// ----- ヘルパー関数 -----
export function getPatient(id: string): Patient | undefined {
  return patients.find(p => p.id === id);
}

export function getPatientRecords(patientId: string): VisitRecord[] {
  return visitRecords.filter(r => r.patientId === patientId);
}

export function getStatusLabel(status: VisitRecord['status']): string {
  const labels = {
    transcribing: '文字起こし中',
    generating: '生成中',
    review: '要確認',
    completed: '完了',
  };
  return labels[status];
}

export function getStatusColor(status: VisitRecord['status']): string {
  const colors = {
    transcribing: 'bg-amber-100 text-amber-700',
    generating: 'bg-blue-100 text-blue-700',
    review: 'bg-coral-100 text-coral-600',
    completed: 'bg-teal-100 text-teal-700',
  };
  return colors[status];
}
