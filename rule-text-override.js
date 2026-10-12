(() => {
  const from = 'флаг/юз с тематикой войны';
  const to = 'аватарку/юз с тематикой войны';
  const vampireAnchor =
    'Обычный укус не обращает, а обращённые не способны иметь детей.';
  const previousClarification =
    'Вампиры могут маскировать клыки, скрывая их, но зубы остаются заострёнными. Специальные капли ведьмы меняют цвет глаз на тот, который был до обращения.';
  const vampireClarification =
    'ВАЖНО: Вампиры могут скрывать клыки, но зубы остаются заострёнными. Специальные капли у ведьмы меняют цвет глаз на тот, который был до обращения. Капли — сюжетный инструмент, их не нужно покупать в магазине бота.';
  const metagameRuleTitle = 'Знание персонажа';
  const metagameRuleText =
    'Персонаж не узнаёт, что перед ним вампир или оборотень, только потому, что игрок так решил. Для этого нужны игровые основания.';
  const suretyReplacements = [
    [
      'Оборотню сообщают о её основном действии, без понимания личной связи метка не закрепится.',
      'Кандидату на поручительство — оборотню или человеку — сообщают об основном действии метки; без понимания личной связи она не закрепится.',
    ],
    [
      'Поручитель обязан предоставить жильё, деньги, питание и юридическую защиту, организовать безопасное полнолуние и не допустить произвольного повторного ареста.',
      'Поручитель обязан предоставить подопечному жильё, деньги, питание и юридическую защиту, а также не допустить произвольного повторного ареста. Если подопечный — оборотень, поручитель дополнительно организует безопасное полнолуние.',
    ],
    [
      'За это он получает услуги оборотня: охрану, перевозки, сопровождение, розыск, кровь оборотня и выполнение поручений.',
      'За это он получает услуги подопечного: охрану, перевозки, сопровождение, розыск и выполнение поручений. Если подопечный — оборотень, в перечень также входит его кровь.',
    ],
    [
      'Официальная работа зависимого оборотня оплачивается, но значительная часть денег удерживается за содержание и надзор.',
      'Официальная работа подопечного оплачивается, но значительная часть денег удерживается за содержание и надзор.',
    ],
    [
      'Что делает метка: она связывает одного оборотня/человека с одним вампиром, для чего обязательно нужно смешать кровь вампира и оборотня, одного рукопожатия, где соединятся две кровоточащие раны хватит, однако иногда это может быть очень неловко, ибо кровь к ране у вампиров поступает медленнее. Удаление кожи не разрывает связь, знак появляется снова после заживления.',
      'Что делает метка: она связывает одного оборотня или человека с одним вампиром. Для метки обязательно смешивают кровь вампира и кровь того, кого связывают, — оборотня или человека. Достаточно рукопожатия, при котором соединятся две кровоточащие раны; у вампиров кровь к ране поступает медленнее. Удаление кожи не разрывает связь: знак появляется снова после заживления.',
    ],
    [
      'Она запрещает сознательно причинять своему поручителю тяжёлый вред.',
      'Она запрещает подопечному сознательно причинять своему поручителю тяжёлый вред.',
    ],
    [
      'Если оборотень всё же доводит смертельное воздействие до конца, обратный удар убивает и его.',
      'Если подопечный всё же доводит смертельное воздействие до конца, обратный удар убивает и его.',
    ],
    [
      'чьи планы оборотню неизвестны',
      'чьи планы подопечному неизвестны',
    ],
    [
      'Она не заставляет подчиняться любому приказу, оборотень может спорить, лгать, отказываться от работы, испытывать ненависть и скрывать сведения.',
      'Она не заставляет подопечного подчиняться любому приказу: он может спорить, лгать, отказываться от работы, испытывать ненависть и скрывать сведения.',
    ],
    [
      'Она ограничивает длительный уход, при заключении договора задаётся разрешённая территория, обычно город вместе с ближайшим лесом. После суток за её пределами без разрешения начинается нарастающая слабость. В следующие двое суток оборотень теряет возможность обращаться и нормально восстанавливаться. Это не убивает, но сильно затрудняет побег, и в итоге его сознание теряется, превращаясь в "зомби" который возвращается к своему хозяину.',
      'Она ограничивает длительный уход: при заключении договора для подопечного задаётся разрешённая территория, обычно город вместе с ближайшим лесом. После суток за её пределами без разрешения у подопечного начинается нарастающая слабость. В следующие двое суток оборотень теряет возможность обращаться и нормально восстанавливаться; эта часть последствий относится только к оборотням. Продолжающееся нарушение не убивает, но затрудняет побег, а в итоге подопечный теряет сознание, превращается в "зомби" и возвращается к своему поручителю.',
    ],
    [
      'Сам поручитель может причинить оборотню вред, ведь взаимной защиты договор не даёт. Оборотень способен закрыться от удара, убежать, удержать руку или обезоружить хозяина, пока не пытается тяжело его ранить.',
      'Сам поручитель может причинить вред подопечному: договор не даёт взаимной защиты. Оборотень или человек под меткой может закрыться от удара, убежать, удержать руку или обезоружить поручителя, пока не пытается нанести ему тяжёлый вред.',
    ],
    [
      'Если поручитель погибает по независимой причине, связь распадается, это не отменяет уголовное дело, у оборотня есть семь дней, чтобы через адвоката лично обратиться за пересмотром меры надзора. Автоматически новому хозяину метка его не передаёт',
      'Если поручитель погибает по независимой причине, связь распадается, но это не отменяет уголовного дела. У подопечного — оборотня или человека — есть семь дней, чтобы лично обратиться через адвоката за пересмотром меры надзора. Метка не переходит к новому поручителю автоматически.',
    ],
    [
      'Иногда подготовленный участник намеренно соглашается на поручительство, чтобы попасть в дом или окружение нужного вампира.',
      'Иногда подготовленный оборотень или человек намеренно соглашается на поручительство, чтобы попасть в дом или окружение нужного вампира.',
    ],
  ];

  const updateText = (node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const text = node.nodeValue ?? '';
      let updated = text.replace(from, to);
      updated = updated.replace(previousClarification, '');
      for (const [source, replacement] of suretyReplacements) {
        updated = updated.replace(source, replacement);
      }

      if (updated.includes(vampireAnchor)) {
        if (node.parentElement?.querySelector('[data-vampire-clarification]')) {
          if (updated !== text) node.nodeValue = updated;
          return;
        }

        const anchorEnd = updated.indexOf(vampireAnchor) + vampireAnchor.length;
        const before = document.createTextNode(`${updated.slice(0, anchorEnd)} `);
        const note = document.createElement('span');
        note.dataset.vampireClarification = 'true';
        note.style.color = '#ff5b66';
        note.style.fontWeight = '700';
        note.textContent = vampireClarification;

        const replacementNodes = [before, note];
        const after = updated.slice(anchorEnd).trimStart();
        if (after) replacementNodes.push(document.createTextNode(` ${after}`));

        node.replaceWith(...replacementNodes);
        return;
      }

      if (updated !== text) node.nodeValue = updated;
      return;
    }

    for (const child of node.childNodes ?? []) {
      updateText(child);
    }
  };

  const ensureMetagameRule = () => {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let headingNode = walker.nextNode();

    while (headingNode && headingNode.nodeValue?.trim() !== 'В РП') {
      headingNode = walker.nextNode();
    }
    if (!headingNode) return;

    let section = headingNode.parentElement;
    while (section && !section.classList?.contains('mb-16')) {
      section = section.parentElement;
    }
    const ruleList = section?.querySelector(':scope > div.flex.flex-col.gap-4');
    if (!section || !ruleList || section.querySelector('[data-metagame-rule]')) return;

    const card = document.createElement('article');
    card.dataset.metagameRule = 'true';
    card.className =
      'relative mt-4 overflow-hidden border border-[#b3122a]/25 bg-gradient-to-b from-[#120d16]/80 to-[#0a0810]/80 px-5 py-5 backdrop-blur-sm sm:px-8 sm:py-6';

    const accent = document.createElement('span');
    accent.setAttribute('aria-hidden', 'true');
    accent.className =
      'absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-[#ff3b54] to-transparent';

    const title = document.createElement('h3');
    title.className = 'font-heading text-lg tracking-wide text-[#ff8e8e] sm:text-xl';
    title.textContent = metagameRuleTitle;

    const text = document.createElement('p');
    text.className =
      'mt-3 font-body text-base leading-relaxed text-[#e6dcd2]/90 sm:text-lg';
    text.textContent = metagameRuleText;

    card.append(accent, title, text);
    section.insertBefore(card, ruleList.nextSibling);
  };

  const root = document.documentElement;
  if (!root) return;

  const observer = new MutationObserver((records) => {
    for (const record of records) {
      if (record.type === 'characterData') {
        updateText(record.target);
      }

      for (const node of record.addedNodes) {
        updateText(node);
      }
    }
    ensureMetagameRule();
  });

  observer.observe(root, {
    childList: true,
    characterData: true,
    subtree: true,
  });

  updateText(root);
  ensureMetagameRule();
})();
