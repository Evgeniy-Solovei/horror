interface IRules {
  id: string;
  title: string;
  rulesInner?: string[];
}

interface IAgreement {
  id: string;
  title: string;
  rules: IRules[];
}

export const AGREEMENT: IAgreement[] = [
  {
    id: "1",
    title: "1. ОБЩИЕ ПОЛОЖЕНИЯ",
    rules: [
      {
        id: "1.1",
        title:
          "ИП Жук предоставляет Пользователю неисключительное и непередаваемое право использования функционала Сайта.",
      },
      {
        id: "1.2",
        title:
          "Данное Соглашение не предполагает передачу исключительных прав на любые объекты интеллектуальной собственности.",
      },
      {
        id: "1.3",
        title:
          "Пользователь не имеет права использовать фирменное наименование, товарные знаки, доменные имена, контент, сервисы и программное обеспечение Сайта, принадлежащие ИП Жук и/или третьим лицам, указанным ИП Жук.",
      },
      {
        id: "1.4",
        title:
          "ИП Жук вправе в любое время вносить изменения в настоящее Соглашение (полностью или частично) в одностороннем порядке. Изменения вступают в силу на следующий день после публикации на Сайте.",
      },
      {
        id: "1.5",
        title:
          "Пользователь обязан самостоятельно ознакомиться с актуальной редакцией Соглашения не реже одного раза в месяц. ИП Жук не несёт ответственности за последствия, возникшие в результате несоблюдения Пользователем данного пункта.",
      },
      {
        id: "1.6",
        title:
          "ИП Жук не несёт ответственности за любые прямые или косвенные убытки Пользователя, связанные с:",
        rulesInner: [
          "1.6.1. Содержанием Сайта;",
          "1.6.2. Регистрацией авторских прав и информацией о ней;",
          "1.6.3. Товарами или услугами, доступными на внешних сайтах или ресурсах;",
          "1.6.4. Контактами Пользователя, установленными с использованием информации или ссылок, размещенных на Сайте.",
        ],
      },
      {
        id: "1.7",
        title:
          "Несогласие Пользователя с любым пунктом Соглашения является основанием для немедленного прекращения использования Сайта.",
      },
    ],
  },
  {
    id: "2",
    title: "2. ПРАВИЛА ПОЛЬЗОВАНИЯ САЙТОМ",
    rules: [
      {
        id: "2.1",
        title:
          "Сайт содержит информационные материалы, предназначенные для ознакомления пользователей. Индивидуальный предприниматель Жук оказывает услуги по бронированию времени и места проведения квеста и предоставляет актуальную информацию о квестах и их особенностях.",
      },
      {
        id: "2.2",
        title:
          "Публикуемые на ресурсе материалы должны соответствовать: законодательству, международным нормам и общественной морали, не нарушая права третьих лиц. Запрещается любая деятельность, противоречащая национальным и международным законам, включая, но не ограничиваясь нарушением прав интеллектуальной собственности. Действия, дестабилизирующие функционирование платформы и её составляющих, также недопустимы.",
      },
      {
        id: "2.3",
        title:
          "ИП Жук обеспечивает функционирование и работоспособность Сайта и обязуется оперативно восстанавливать его работоспособность в случае технических сбоев и перерывов.",
      },
      {
        id: "2.4",
        title:
          "ИП Жук не несет ответственность за временные сбои и перерывы в работе Сайта и вызванные ими потерю информации. ИП Жук не несет ответственность за любой ущерб компьютеру Пользователя или иного лица, мобильным устройствам, любому другому оборудованию или программному обеспечению, вызванный или связанный со скачиванием материалов с Сайта или по ссылкам, размещенным на Сайте.",
      },
      {
        id: "2.5",
        title:
          "Наличие рекламы на сайте и в его сервисах является условием пользования. ИП Жук не несет ответственность за содержание и последствия взаимодействия с рекламой.",
      },
      {
        id: "2.6",
        title:
          "Ип Жук обязуется обеспечивать высокую работоспособность сайта и своевременно устранять технические неполадки.",
      },
      {
        id: "2.7",
        title:
          "Ип Жук не несет ответственность за порчу имущества вследствие скачивания материалов, размещенных на сайте.",
      },
      {
        id: "2.8",
        title:
          "Ип Жук оставляет за собой право вносить изменения в дизайн, контент, функционал и программное обеспечение сайта без предварительного уведомления.",
      },
      {
        id: "2.9",
        title:
          "Пользователю запрещается размещать на сайте информацию, нарушающую законодательство, права третьих лиц, общественную мораль,  включая угрозы, оскорбления, пропаганду ненависти, экстремизма,  преступной деятельности,  незаконный контент,  информацию ограниченного доступа,  а также рекламу наркотиков, алкоголя и мошеннические схемы.",
      },
      {
        id: "2.10",
        title:
          "При несогласии Пользователя с правилами пользования сайта, Ип Жук рекомендует прекратить использование сайта.",
      },
    ],
  },

  {
    id: "3",
    title: "3. Ответственность сторон",
    rules: [
      {
        id: "3.1",
        title:
          "В соответствии с правилами проведения квеста, пользователи обязаны ознакомиться с противопоказаниями перед бронированием.  Бронирование квеста автоматически подтверждает ознакомление с противопоказаниями и согласие с ними.",
      },
      {
        id: "3.2",
        title:
          "Все квесты имеют возрастное ограничение 14+. При бронировании квеста, пользователь подтверждает, что всем участникам исполнилось 14 лет.",
      },
      {
        id: "3.3",
        title:
          "Ип Жук не несёт ответственности за любые проблемы, возникающие в процессе установки, обновления, эксплуатации и технической поддержки Сайта, а также за несоответствие результатов использования Сайта ожиданиям Пользователя.",
      },
      {
        id: "3.4",
        title:
          "Пользователь осознаёт и принимает на себя полную ответственность за любые негативные последствия, вызванные несовместимостью или конфликтами Сайта с другим программным обеспечением, установленным на его компьютере или другом устройстве.",
      },
      {
        id: "3.5",
        title:
          "Пользователь отвечает за весь загружаемый и публикуемый им контент на Сайте.",
      },
      {
        id: "3.6",
        title:
          "Ип Жук вправе удалять или перемещать любой контент и блокировать пользователей в случае нарушения настоящего Соглашения, законодательства или угрозы безопасности пользователей и третьих лиц, а также без предупреждения.",
      },
      {
        id: "3.7",
        title:
          "Ип Жук может изменять функциональность и условия использования Сайта и информировать пользователей об обновлениях.",
      },
      {
        id: "3.8",
        title:
          "При бронировании даты и времени квеста, Пользователь обязан указать актуальный номер телефона, по которому Ип Жук совершает подтверждение бронирования.",
      },
      {
        id: "3.9",
        title:
          "Ип Жук имеет право в одностороннем порядке отменить бронирование в случаях:",
        rulesInner: [
          "3.9.1. Некорректно указанного номера телефона, при котором Ип Жук не имеет возможности подтвердить бронирование.",
          "3.9.2. Пользователь не выходит на связь и не имеет возможности подтвердить актуальность бронирования.",
          "3.9.3. Пользователь оставляет более 1 одного бронирования в целях спама.",
          "3.9.4. Пользователям не исполнилось 14 лет на момент бронирования игры.",
          "3.9.5. Пользователь находится в состоянии алкогольного и наркотического опьянения.",
        ],
      },
    ],
  },
  {
    id: "4",
    title: "4. ПОРЯДОК РАЗРЕШЕНИЯ СПОРОВ",
    rules: [
      {
        id: "4.1",
        title:
          "В случае возникновения споров или разногласий, связанных с исполнением настоящего Соглашения, стороны обязуются предпринять все разумные усилия для их разрешения путем добровольных переговоров.  Если стороны не достигнут соглашения в ходе переговоров, спор подлежит разрешению в судебном порядке в соответствии с действующим законодательством Республики Беларусь.",
      },
      {
        id: "4.2",
        title:
          "Настоящее Соглашение вступает в силу с момента принятия его Пользователем и действует бессрочно до момента его расторжения в порядке, установленном настоящим Соглашением.",
      },
    ],
  },
];
