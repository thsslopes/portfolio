import { useState, useEffect, useRef } from 'react'

import thaisImg          from './assets/thais.jpg'
import logoPetrobras     from './assets/logos/petrobras.png'
import aboutManaus       from './assets/about-manaus.jpg'
import aboutDogs         from './assets/about-2.jpg'
import aboutTravel       from './assets/about-3.jpg'
import aboutMuseum       from './assets/about-4.jpg'
import aboutFunny        from './assets/about-1.jpg'

import hdContext          from './assets/hd-context.png'
import hdProductFraming  from './assets/hd-product-framing.jpg'
import hdUnderstanding   from './assets/hd-understanding.jpg'
import hdUnderstandingUsers from './assets/hd-understanding-users.jpg'
import hdLofi1           from './assets/hd-lofi1.jpg'
import hdLofi2           from './assets/hd-lofi2.jpg'
import hdHifi1           from './assets/hd-hifi1.jpg'
import hdHifi2           from './assets/hd-hifi2.jpg'
import hdHifi3           from './assets/hd-hifi3.jpg'

import dseLeanCanvas     from './assets/dse/dse-lean-canvas.jpg'
import dseValueProp      from './assets/dse/dse-value-prop.jpg'
import dseResearch       from './assets/dse/dse-research.jpg'
import dseIa             from './assets/dse/dse-ia.jpg'
import dseAccess         from './assets/dse/dse-access.jpg'
import dseUi             from './assets/dse/dse-ui.jpg'
import dseFilterTree     from './assets/dse/dse-filter-tree.png'

import glistHero         from './assets/glist/hero.jpg'
import glistMatriz       from './assets/glist/matriz-csd.jpg'
import glistEmpathy      from './assets/glist/empathy-map.png'
import glistPersonas     from './assets/glist/personas.jpg'
import glistJourney      from './assets/glist/user-journey.jpg'
import glistMoodboard    from './assets/glist/moodboard.jpg'
import glistSketches     from './assets/glist/sketches.jpg'
import glistWireframes   from './assets/glist/wireframes.jpg'
import glistProto01      from './assets/glist/prototype01.jpg'
import glistProto02      from './assets/glist/prototype02.jpg'
import glistProto03      from './assets/glist/prototype03.jpg'
import glistProto04      from './assets/glist/prototype04.jpg'
import glistProto05      from './assets/glist/prototype05.jpg'
import glistProto06      from './assets/glist/prototype06.jpg'
import glistUsertest     from './assets/glist/usertest.jpg'

// ─── Design tokens ────────────────────────────────────────────────────────────
const PINK     = '#E8609A'
const PINK_DIM = 'rgba(232,96,154,0.15)'
const PINK_BG  = '#FFF0F6'
const MONO     = "'Courier Prime', 'Courier New', monospace"
const SANS     = "'Plus Jakarta Sans', 'Montserrat', sans-serif"
const CHECKER  = `repeating-conic-gradient(#F5C5D8 0% 25%, #FBDDE9 0% 50%) 0 0 / 22px 22px`

// ─── Case metadata & sections ─────────────────────────────────────────────────
const CASES = {
  en: [
    {
      id: 'proj-petrobras',
      title: 'Historical Data',
      subtitle: 'Industrial UX · 2019–2020',
      summary: 'Redesigning how engineers navigate 30 years of oil well inspection data.',
      outcome: '~3h saved/user/week · 100% task success',
      color: '#C94F7C', bg: '#FFF0F5', border: 'rgba(201,79,124,0.2)',
      img: hdHifi1, logo: logoPetrobras,
      tags: ['Product Design', 'Research', 'Data Viz'],
      about: [
        { label: 'Role', value: 'Product Designer (sole designer)' },
        { label: 'Client', value: 'Oil & Gas · CESAR' },
        { label: 'Period', value: '2019–2020' },
        { label: 'Impact', value: '~3h saved/user/week · Full adoption' },
      ],
      passwordProtected: true,
      sections: [
        {
          num: '01', heading: 'Context',
          body: 'Pipeline inspections in pre-salt reservoirs are critical for detecting stress corrosion. Until this project, inspection data lived in spreadsheets and PowerPoint files — no traceability, duplicated effort across teams, and frequent processing errors.',
          images: [hdContext],
        },
        {
          num: '02', heading: 'Product Framing',
          body: 'I facilitated a Lean Canvas session to map user pains, product value, and priorities before any design work began, aligning the team around a clear direction.',
          images: [hdProductFraming],
          bullets: [
            'Pain: manual spreadsheets, low automation, siloed teams',
            'Value: centralize inspection data to reduce errors and save time',
            'MVP scope: three specific operational areas',
            'Success: fewer errors, time saved, process automation, full adoption',
          ],
        },
        {
          num: '03', heading: 'Understanding Users',
          body: 'I conducted in-depth interviews, research sessions, and strategic discussions to understand how information was accessed, shared, and interpreted across different areas.',
          images: [hdUnderstanding, hdUnderstandingUsers],
          bullets: [
            'Lack of centralized access to inspection results across teams',
            'Low automation in formatting and managing inspection reports',
            'Reliance on other departments to retrieve data',
            'High manual effort to create and share visuals or summaries',
          ],
        },
        {
          num: '04', heading: 'Synthesis & Prioritization',
          body: 'I created a cross-functional journey map that visualized current workflows and surfaced friction points across all three teams. Issues were categorized by role, frequency, and impact.',
          callout: 'This step transformed research into a shared understanding that guided the MVP scope conversation.',
        },
        {
          num: '05', heading: 'Design Decisions',
          body: 'A three-day workshop combining Lean Inception and Design Sprint tools was held to collaboratively define the MVP scope.',
          workshopDays: [
            { day: 'Day 01', focus: 'Product vision, pain point mapping, user roles' },
            { day: 'Day 02', focus: 'Ideation, card sorting, sketchstorming' },
            { day: 'Day 03', focus: 'Technical, business, and UX review: scope sequencing' },
          ],
          bullets: [
            '✓ Centralized access to inspection results',
            '✓ Faster generation of visual reports',
            '✓ Reduced reliance on spreadsheets',
          ],
        },
        {
          num: '06', heading: 'Prototyping & Execution',
          body: 'My approach was co-participatory and iterative — sketching sessions and rapid critique rounds with stakeholders and developers. Early concepts evolved into high-fidelity prototypes using the internal Design System.',
          carouselLabel: 'Low Fidelity → High Fidelity',
          images: [hdLofi1, hdLofi2, hdHifi1, hdHifi2, hdHifi3],
        },
        {
          num: '07', heading: 'Testing & Validation',
          body: 'Two rounds of testing were designed and conducted to ensure usability and adoption across all user segments.',
          metrics: [
            { num: '100%', label: 'task success rate · moderated tests' },
            { num: '67%', label: 'task completion · unmoderated (Useberry)' },
          ],
          quotes: [
            { text: 'The tool is very intuitive and well organized.', attr: 'User 01' },
            { text: "Now I don't need to wait for someone to send me the inspection data.", attr: 'User 02' },
          ],
        },
        {
          num: '08', heading: 'Impact',
          body: 'The platform became a cornerstone of a long-term risk-reduction program in the energy sector.',
          metrics: [
            { num: '~3h', label: 'saved per user per week' },
            { num: '100%', label: 'task success rate' },
            { num: 'Full', label: 'MVP adoption across all target teams' },
            { num: 'R$300M', label: 'in 10-year risk reduction enabled' },
          ],
          bullets: [
            'Eliminated spreadsheet-based processes entirely',
            'Users reported increased autonomy in operational decisions',
            'Contract renewed for follow-on phase',
          ],
        },
        {
          num: '09', heading: 'Key Learnings',
          learnings: [
            { title: 'Synthesis before solution', body: 'Aligning on user value before jumping into design was critical for strategic clarity.' },
            { title: 'Designing with constraints', body: 'Balancing user needs and internal platform limitations requires constant negotiation.' },
            { title: 'Discovery never stops', body: 'Continuous feedback loops should guide future iterations, especially for evolving dashboards.' },
            { title: 'Framework blending works', body: 'Combining Lean Inception with Design Sprint tools gave the right mix of structure and creativity.' },
          ],
        },
      ],
    },
    {
      id: 'proj-search',
      title: 'Documents Search Engine',
      subtitle: 'Product Design + Research · 2023–Present',
      summary: 'AI-powered search that helped geoscientific teams find critical documents 3× faster.',
      outcome: '$1.2M contract renewal · UMUX score 83',
      color: '#3D8B61', bg: '#EFF8F3', border: 'rgba(61,139,97,0.2)',
      img: dseUi, logo: logoPetrobras,
      tags: ['Product Design', 'Research', 'AI Tools'],
      about: [
        { label: 'Role', value: 'Product Designer' },
        { label: 'Client', value: 'Oil & Gas · CESAR' },
        { label: 'Period', value: '2023–Present' },
        { label: 'Impact', value: '$1.2M contract renewal · UMUX 83/100' },
      ],
      passwordProtected: true,
      sections: [
        {
          num: '01', heading: 'Context',
          body: 'The platform was used to search and analyze complex geological and administrative documents — a critical tool for geoscientific teams making time-sensitive decisions. Despite its importance, users struggled with imprecise search results, confusing filters, and inefficient workflows.',
        },
        {
          num: '02', heading: 'Product Framing',
          body: 'I facilitated a Lean Canvas session, a Team Alignment Board, and a Value Proposition canvas to define user pains and product direction across technical and client teams.',
          images: [dseLeanCanvas, dseValueProp],
          bullets: [
            'Team & vision alignment with developers, data scientists, and client',
            'Product value: improve search accuracy, reduce manual workarounds',
            'Scope: solutions around key operational user needs',
            'Success: fewer errors, time saved, increased adoption',
          ],
        },
        {
          num: '03', heading: 'Understanding Users',
          body: 'I focused on understanding how different user profiles searched for geological data. Through interviews and in-platform evaluations, I identified where the search experience was failing.',
          images: [dseResearch],
          callout: "In parallel, 3 designers conducted a heuristic evaluation using Nielsen Norman principles and WCAG criteria. I cross-referenced user-reported problems with the designers' findings, arriving at a friction map validated from two angles.",
          bullets: [
            'Imprecise results, especially for well-related data',
            'Inconsistent filter logic created confusion and reduced trust',
            '"Similar Documents" feature was poorly understood',
            'Users couldn\'t request access to restricted documents in-platform',
          ],
        },
        {
          num: '04', heading: 'Synthesis & Prioritization',
          body: 'Research findings were synthesized into themes using an Opportunity Tree, then brought to Product Owners for prioritization alongside developers and data scientists.',
          images: [dseIa],
          beforeAfter: [
            { before: 'Imprecise results', after: 'Clear taxonomy and consistent relevance ranking' },
            { before: 'Confusing filters', after: 'Standardized filter logic and interactions' },
            { before: 'Manual workarounds', after: 'Streamlined in-platform flows' },
          ],
        },
        {
          num: '05', heading: 'Design Decisions',
          body: 'Consolidated findings guided design decisions across three areas:',
          images: [dseFilterTree],
          designAreas: [
            { icon: '🔍', area: 'Search behavior', desc: 'Changes to improve relevance for well-related searches; clarity and consistency in results ranking.' },
            { icon: '🗂', area: 'Filters & taxonomy', desc: 'Standardized filter logic and interactions; refined taxonomy categories to reduce ambiguity.' },
            { icon: '🔓', area: 'Access flow', desc: 'In-platform document access request flow; removed manual and external workarounds.' },
          ],
        },
        {
          num: '06', heading: 'Prototyping & Execution',
          body: 'Based on defined design decisions, I produced detailed specifications for each area — handed off to a dedicated UI designer for visual implementation.',
          callout: "This case's strength is research and strategy. UI execution was handled by a dedicated UI designer based on the design decisions and specs produced in the previous phase.",
          images: [dseAccess, dseUi],
        },
        {
          num: '07', heading: 'Testing & Validation',
          body: 'Post-launch satisfaction was measured with a UMUX score. The improvements meaningfully addressed the core usability issues.',
          metrics: [
            { num: '83', label: 'UMUX satisfaction score out of 100' },
          ],
        },
        {
          num: '08', heading: 'Impact',
          body: 'The design work directly contributed to a contract renewal, proving that research-led UX has measurable business impact.',
          metrics: [
            { num: '$1.2M', label: 'contract renewal secured' },
            { num: '83', label: 'UMUX score' },
          ],
          bullets: [
            'Streamlined taxonomies and clearer filtering behavior',
            'Reduced ambiguity across search results',
            'In-platform access request flow replaced manual workarounds',
          ],
        },
        {
          num: '09', heading: 'Key Learnings',
          learnings: [
            { title: 'Strategy is design work too', body: 'Research and framing guided product decisions before visual execution, proving upstream work has direct, measurable impact.' },
            { title: 'Cross-functional leadership', body: 'Led alignment workshops across developers, data scientists, and product owners to surface shared goals.' },
            { title: 'Research-led, proven impact', body: 'Demonstrated clear outcomes on usability, operational efficiency, and business continuity through a research-led approach.' },
          ],
        },
      ],
    },
    {
      id: 'proj-glist',
      title: 'Glist',
      subtitle: 'UX & UI Challenge · 2021',
      summary: 'An iOS app that helps families plan groceries and stop wasting food.',
      outcome: 'Personal project · end-to-end design',
      color: '#E07A20', bg: '#FFF8F2', border: 'rgba(224,122,32,0.2)',
      img: glistHero, logo: null,
      tags: ['UX/UI Design', 'Mobile', 'Personal Project'],
      about: [
        { label: 'Role', value: 'UX/UI Designer (sole designer)' },
        { label: 'Type', value: 'Personal challenge' },
        { label: 'Period', value: '2021' },
        { label: 'Platform', value: 'Mobile · iOS' },
      ],
      passwordProtected: false,
      sections: [
        {
          num: '01', heading: 'Problem',
          body: 'Glist started as a challenge to discover a way to help people reduce food waste through smarter grocery planning. Most people don\'t realize how much food they throw away daily — from uneaten leftovers to spoiled produce.',
          images: [glistMatriz],
        },
        {
          num: '02', heading: 'Research',
          body: 'Before defining any solution, I ran a CSD Matrix, a quantitative survey with 68 people across Brazil, and 5 qualitative interviews to understand real shopping behaviors.',
          images: [glistEmpathy],
          metrics: [
            { num: '68', label: 'survey participants' },
            { num: '86.8%', label: 'use mobile to keep a grocery list' },
            { num: '85.3%', label: 'sometimes buy more than needed' },
          ],
        },
        {
          num: '03', heading: 'Define',
          body: 'Research was synthesized into 3 personas and a user journey map that revealed the emotional and practical friction points in the grocery planning process.',
          images: [glistPersonas, glistJourney],
        },
        {
          num: '04', heading: 'Project Goal',
          body: 'Design a mobile app that helps families estimate correct food quantities, generate smart shopping lists, and reduce impulsive buying — making the planning step simple enough that people actually do it.',
        },
        {
          num: '05', heading: 'Solution',
          body: 'The solution centers on a household profile that personalizes portion estimates, with automatic list generation from weekly meal planning.',
          images: [glistMoodboard],
        },
        {
          num: '06', heading: 'Ideation',
          body: 'Sketches and wireframes were used to rapidly explore and validate the core flows before moving to high-fidelity.',
          images: [glistSketches, glistWireframes],
        },
        {
          num: '07', heading: 'Prototype',
          body: 'High-fidelity prototypes were built covering the full flow: onboarding, household profile, meal planning, list generation, and checkout mode.',
          carouselLabel: 'High Fidelity Prototype',
          images: [glistProto01, glistProto02, glistProto03, glistProto04, glistProto05, glistProto06],
        },
        {
          num: '08', heading: 'Testing',
          body: 'Moderated usability tests were run with 5 families. Key metrics tracked: task success, time on task, and post-session satisfaction rating.',
          images: [glistUsertest],
          metrics: [
            { num: '5', label: 'families tested' },
            { num: '4.4/5', label: 'average satisfaction' },
            { num: '35%', label: 'reduction in over-buying reported' },
          ],
        },
        {
          num: '09', heading: 'Key Learnings',
          learnings: [
            { title: 'Simplicity is the feature', body: 'Users wanted planning to feel easier than not planning. Every extra step was a risk of abandonment.' },
            { title: 'Defaults matter', body: 'Smart defaults (portion sizes, common items) reduced cognitive load significantly.' },
            { title: 'Habit over feature', body: 'The weekly review habit was more powerful than any individual feature in sustaining behavior change.' },
          ],
        },
      ],
    },
  ],
  pt: [
    {
      id: 'proj-petrobras',
      title: 'Dados Históricos',
      subtitle: 'UX Industrial · 2019–2020',
      summary: 'Redesenhando como engenheiros navegam em 30 anos de dados de inspeção de poços.',
      outcome: '~3h poupadas/usuário/semana · 100% sucesso',
      color: '#C94F7C', bg: '#FFF0F5', border: 'rgba(201,79,124,0.2)',
      img: hdHifi1, logo: logoPetrobras,
      tags: ['Product Design', 'Pesquisa', 'Data Viz'],
      about: [
        { label: 'Papel', value: 'Product Designer (único/a)' },
        { label: 'Cliente', value: 'Óleo & Gás · CESAR' },
        { label: 'Período', value: '2019–2020' },
        { label: 'Impacto', value: '~3h poupadas/usuário/semana · Adoção total' },
      ],
      passwordProtected: true,
      sections: [
        {
          num: '01', heading: 'Contexto',
          body: 'Inspeções de dutos em reservatórios pré-sal são críticas para detectar corrosão por tensão. Até este projeto, os dados de inspeção viviam em planilhas e arquivos PowerPoint — sem rastreabilidade, esforço duplicado entre times e erros frequentes.',
          images: [hdContext],
        },
        {
          num: '02', heading: 'Enquadramento do Produto',
          body: 'Facilitei uma sessão de Lean Canvas para mapear dores dos usuários, valor do produto e prioridades antes de qualquer trabalho de design.',
          images: [hdProductFraming],
          bullets: [
            'Dor: planilhas manuais, baixa automação, times isolados',
            'Valor: centralizar dados de inspeção para reduzir erros e poupar tempo',
            'Escopo do MVP: três áreas operacionais específicas',
            'Sucesso: menos erros, tempo poupado, automação, adoção total',
          ],
        },
        {
          num: '03', heading: 'Entendendo os Usuários',
          body: 'Conduzi entrevistas aprofundadas e sessões estratégicas para entender como as informações eram acessadas, compartilhadas e interpretadas em diferentes áreas.',
          images: [hdUnderstanding, hdUnderstandingUsers],
          bullets: [
            'Falta de acesso centralizado aos resultados de inspeção',
            'Baixa automação na formatação e gestão de relatórios',
            'Dependência de outros departamentos para recuperar dados',
            'Alto esforço manual para criar e compartilhar visualizações',
          ],
        },
        {
          num: '04', heading: 'Síntese & Priorização',
          body: 'Criei um mapa de jornada multifuncional que visualizou os fluxos de trabalho atuais e revelou pontos de fricção nos três times.',
          callout: 'Essa etapa transformou a pesquisa em uma compreensão compartilhada que guiou a conversa sobre o escopo do MVP.',
        },
        {
          num: '05', heading: 'Decisões de Design',
          body: 'Um workshop de três dias combinando Lean Inception e Design Sprint foi realizado para definir colaborativamente o escopo do MVP.',
          workshopDays: [
            { day: 'Dia 01', focus: 'Visão do produto, mapeamento de dores, perfis de usuário' },
            { day: 'Dia 02', focus: 'Ideação, card sorting, sketchstorming' },
            { day: 'Dia 03', focus: 'Revisão técnica, de negócio e UX: sequenciamento do escopo' },
          ],
          bullets: [
            '✓ Acesso centralizado aos resultados de inspeção',
            '✓ Geração mais rápida de relatórios visuais',
            '✓ Redução da dependência de planilhas',
          ],
        },
        {
          num: '06', heading: 'Prototipação & Execução',
          body: 'Minha abordagem foi co-participativa e iterativa — sessões de sketching e rodadas de critique com stakeholders e desenvolvedores. Os conceitos iniciais evoluíram para protótipos de alta fidelidade usando o Design System interno.',
          carouselLabel: 'Baixa Fidelidade → Alta Fidelidade',
          images: [hdLofi1, hdLofi2, hdHifi1, hdHifi2, hdHifi3],
        },
        {
          num: '07', heading: 'Testes & Validação',
          body: 'Duas rodadas de testes foram conduzidas para garantir usabilidade e adoção em todos os segmentos de usuários.',
          metrics: [
            { num: '100%', label: 'taxa de sucesso nas tarefas · testes moderados' },
            { num: '67%', label: 'conclusão de tarefas · não moderado (Useberry)' },
          ],
          quotes: [
            { text: 'A ferramenta é muito intuitiva e bem organizada.', attr: 'Usuária 01' },
            { text: 'Agora não preciso esperar alguém me mandar os dados de inspeção.', attr: 'Usuário 02' },
          ],
        },
        {
          num: '08', heading: 'Impacto',
          body: 'A plataforma tornou-se a base de um programa de redução de riscos de longo prazo no setor energético.',
          metrics: [
            { num: '~3h', label: 'poupadas por usuário por semana' },
            { num: '100%', label: 'taxa de sucesso nas tarefas' },
            { num: 'Total', label: 'adoção do MVP por todos os times alvo' },
            { num: 'R$300M', label: 'em redução de risco viabilizados em 10 anos' },
          ],
          bullets: [
            'Processos baseados em planilhas eliminados completamente',
            'Usuários relataram maior autonomia nas decisões operacionais',
            'Contrato renovado para fase seguinte',
          ],
        },
        {
          num: '09', heading: 'Aprendizados',
          learnings: [
            { title: 'Síntese antes da solução', body: 'Alinhar o valor para o usuário antes de iniciar o design foi fundamental para a clareza estratégica.' },
            { title: 'Designers com restrições', body: 'Equilibrar necessidades dos usuários e limitações da plataforma exige negociação constante.' },
            { title: 'Discovery nunca para', body: 'Loops de feedback contínuos devem guiar iterações futuras, especialmente para dashboards em evolução.' },
            { title: 'Combinação de frameworks funciona', body: 'Combinar Lean Inception com ferramentas de Design Sprint deu a mistura certa de estrutura e criatividade.' },
          ],
        },
      ],
    },
    {
      id: 'proj-search',
      title: 'Buscador de Documentos',
      subtitle: 'Product Design + Pesquisa · 2023–Atual',
      summary: 'Busca com IA que ajudou times de geociências a encontrar documentos críticos 3× mais rápido.',
      outcome: 'Renovação de $1,2M · UMUX 83/100',
      color: '#3D8B61', bg: '#EFF8F3', border: 'rgba(61,139,97,0.2)',
      img: dseUi, logo: logoPetrobras,
      tags: ['Product Design', 'Pesquisa', 'Ferramentas de IA'],
      about: [
        { label: 'Papel', value: 'Product Designer' },
        { label: 'Cliente', value: 'Óleo & Gás · CESAR' },
        { label: 'Período', value: '2023–Atual' },
        { label: 'Impacto', value: 'Renovação de $1,2M · UMUX 83/100' },
      ],
      passwordProtected: true,
      sections: [
        {
          num: '01', heading: 'Contexto',
          body: 'A plataforma era usada para buscar e analisar documentos geológicos e administrativos complexos. Apesar de sua importância, os usuários enfrentavam resultados imprecisos, filtros confusos e fluxos ineficientes.',
        },
        {
          num: '02', heading: 'Enquadramento do Produto',
          body: 'Facilitei uma sessão de Lean Canvas, um Team Alignment Board e um canvas de Value Proposition para definir dores dos usuários e direção do produto entre times técnicos e de negócio.',
          images: [dseLeanCanvas, dseValueProp],
          bullets: [
            'Alinhamento de time com devs, cientistas de dados e cliente',
            'Valor: melhorar precisão da busca e reduzir workarounds manuais',
            'Escopo: soluções para necessidades operacionais-chave',
            'Sucesso: menos erros, tempo poupado, maior adoção',
          ],
        },
        {
          num: '03', heading: 'Entendendo os Usuários',
          body: 'Entendendo como diferentes perfis de usuários buscavam dados geológicos. Através de entrevistas e avaliações in-platform, identifiquei onde a experiência de busca estava falhando.',
          images: [dseResearch],
          callout: 'Em paralelo às entrevistas, 3 designers conduziram uma avaliação heurística usando os princípios de Nielsen Norman e critérios WCAG. Cruzei os problemas reportados pelos usuários com as percepções dos designers, chegando a um mapa de fricção validado por dois ângulos.',
          bullets: [
            'Resultados imprecisos, especialmente para dados de poços',
            'Lógica de filtros inconsistente criava confusão e reduzia confiança',
            '"Documentos Similares" era pouco compreendido',
            'Usuários não conseguiam solicitar acesso a documentos restritos na plataforma',
          ],
        },
        {
          num: '04', heading: 'Síntese & Priorização',
          body: 'Os achados foram sintetizados em temas e traduzidos em oportunidades usando uma Árvore de Oportunidades, trazida para os Product Owners para priorização.',
          images: [dseIa],
          beforeAfter: [
            { before: 'Resultados imprecisos', after: 'Taxonomia clara e ranqueamento consistente' },
            { before: 'Filtros confusos', after: 'Lógica e interações de filtros padronizadas' },
            { before: 'Workarounds manuais', after: 'Fluxos simplificados dentro da plataforma' },
          ],
        },
        {
          num: '05', heading: 'Decisões de Design',
          body: 'Os achados consolidados guiaram decisões de design em três áreas:',
          images: [dseFilterTree],
          designAreas: [
            { icon: '🔍', area: 'Comportamento de busca', desc: 'Melhorar relevância para buscas relacionadas a poços; clareza e consistência no ranqueamento de resultados.' },
            { icon: '🗂', area: 'Filtros & taxonomia', desc: 'Lógica e interações de filtros padronizadas; categorias de taxonomia refinadas para reduzir ambiguidade.' },
            { icon: '🔓', area: 'Fluxo de acesso', desc: 'Fluxo de solicitação de acesso a documentos dentro da plataforma; workarounds manuais eliminados.' },
          ],
        },
        {
          num: '06', heading: 'Prototipação & Execução',
          body: 'Com base nas decisões de design, produzi especificações detalhadas para cada área — entregues a um/a UI designer para implementação visual.',
          callout: 'O ponto forte deste case é pesquisa e estratégia. A execução de UI foi realizada por um/a designer de UI dedicado/a com base nas decisões e especificações produzidas na fase anterior.',
          images: [dseAccess, dseUi],
        },
        {
          num: '07', heading: 'Testes & Validação',
          body: 'A satisfação pós-lançamento foi medida com um UMUX score. As melhorias abordaram de forma significativa os problemas centrais de usabilidade.',
          metrics: [
            { num: '83', label: 'UMUX score de satisfação de 100' },
          ],
        },
        {
          num: '08', heading: 'Impacto',
          body: 'O trabalho de design contribuiu diretamente para uma renovação de contrato, provando que UX orientado por pesquisa tem impacto mensurável no negócio.',
          metrics: [
            { num: '$1,2M', label: 'renovação de contrato garantida' },
            { num: '83', label: 'UMUX score' },
          ],
          bullets: [
            'Taxonomias simplificadas e comportamento de filtros mais claro',
            'Redução de ambiguidade nos resultados de busca',
            'Fluxo de solicitação de acesso substituiu workarounds manuais',
          ],
        },
        {
          num: '09', heading: 'Aprendizados',
          learnings: [
            { title: 'Estratégia também é design', body: 'Pesquisa e enquadramento guiaram decisões de produto antes da execução visual, provando que o trabalho upstream tem impacto direto e mensurável.' },
            { title: 'Liderança multifuncional', body: 'Conduzi workshops de alinhamento entre devs, cientistas de dados e product owners para revelar objetivos compartilhados.' },
            { title: 'Pesquisa com impacto comprovado', body: 'Demonstrei resultados claros em usabilidade, eficiência operacional e continuidade do negócio.' },
          ],
        },
      ],
    },
    {
      id: 'proj-glist',
      title: 'Glist',
      subtitle: 'Desafio UX & UI · 2021',
      summary: 'Um app iOS que ajuda famílias a planejar compras e parar de desperdiçar comida.',
      outcome: 'Projeto pessoal · design end-to-end',
      color: '#E07A20', bg: '#FFF8F2', border: 'rgba(224,122,32,0.2)',
      img: glistHero, logo: null,
      tags: ['UX/UI Design', 'Mobile', 'Projeto Pessoal'],
      about: [
        { label: 'Papel', value: 'UX/UI Designer (único/a)' },
        { label: 'Tipo', value: 'Projeto pessoal' },
        { label: 'Período', value: '2021' },
        { label: 'Plataforma', value: 'Mobile · iOS' },
      ],
      passwordProtected: false,
      sections: [
        {
          num: '01', heading: 'Problema',
          body: 'O Glist nasceu como um desafio para descobrir uma forma de ajudar pessoas a reduzir o desperdício de alimentos com um planejamento de compras mais inteligente. A maioria das pessoas não percebe o quanto joga fora diariamente.',
          images: [glistMatriz],
        },
        {
          num: '02', heading: 'Pesquisa',
          body: 'Antes de definir qualquer solução, realizei uma Matriz CSD, uma pesquisa quantitativa com 68 pessoas pelo Brasil e 5 entrevistas qualitativas para entender comportamentos reais de compra.',
          images: [glistEmpathy],
          metrics: [
            { num: '68', label: 'participantes na pesquisa' },
            { num: '86,8%', label: 'usam celular para lista de compras' },
            { num: '85,3%', label: 'às vezes compram mais do que precisam' },
          ],
        },
        {
          num: '03', heading: 'Definição',
          body: 'A pesquisa foi sintetizada em 3 personas e um mapa de jornada do usuário que revelou os pontos de fricção no processo de planejamento de compras.',
          images: [glistPersonas, glistJourney],
        },
        {
          num: '04', heading: 'Objetivo do Projeto',
          body: 'Projetar um app mobile que ajude famílias a estimar quantidades corretas de alimentos, gerar listas de compras inteligentes e reduzir compras impulsivas — tornando o planejamento simples o suficiente para as pessoas realmente fazerem.',
        },
        {
          num: '05', heading: 'Solução',
          body: 'A solução centra-se em um perfil familiar que personaliza estimativas de porções, com geração automática de listas a partir do planejamento semanal de refeições.',
          images: [glistMoodboard],
        },
        {
          num: '06', heading: 'Ideação',
          body: 'Sketches e wireframes foram usados para explorar e validar rapidamente os fluxos principais antes de avançar para alta fidelidade.',
          images: [glistSketches, glistWireframes],
        },
        {
          num: '07', heading: 'Protótipo',
          body: 'Protótipos de alta fidelidade cobrindo o fluxo completo: onboarding, perfil familiar, planejamento de refeições, geração de lista e modo de checkout.',
          carouselLabel: 'Protótipo de Alta Fidelidade',
          images: [glistProto01, glistProto02, glistProto03, glistProto04, glistProto05, glistProto06],
        },
        {
          num: '08', heading: 'Testes',
          body: 'Testes de usabilidade moderados foram conduzidos com 5 famílias. Métricas acompanhadas: sucesso nas tarefas, tempo por tarefa e satisfação pós-sessão.',
          images: [glistUsertest],
          metrics: [
            { num: '5', label: 'famílias testadas' },
            { num: '4,4/5', label: 'satisfação média' },
            { num: '35%', label: 'redução em compras excessivas reportada' },
          ],
        },
        {
          num: '09', heading: 'Aprendizados',
          learnings: [
            { title: 'Simplicidade é a feature', body: 'Usuários queriam que o planejamento fosse mais fácil do que não planejar. Cada passo extra era um risco de abandono.' },
            { title: 'Padrões importam', body: 'Padrões inteligentes (tamanhos de porção, itens comuns) reduziram significativamente a carga cognitiva.' },
            { title: 'Hábito acima de feature', body: 'O hábito de revisão semanal foi mais poderoso do que qualquer feature individual para sustentar a mudança de comportamento.' },
          ],
        },
      ],
    },
  ],
}

const ABOUT = {
  en: {
    greeting: "Hi, I'm Thaís ✦",
    role: 'Product Design (UX/UI) • Service Design • Design Strategy',
    location: '📍 Recife, Brazil — Remote, Open to Relocate',
    paras: [
      'I design at the intersection of people, systems, and complexity — which more often than not means I\'m the one in the room asking "but why does it work this way?" before anyone opens Figma.',
      'Based in Recife (born and raised in Manaus), I\'ve spent 6+ years working with companies across oil & gas, finance, and government, turning messy, complex problems into products that people actually want to use.',
      'My Master\'s research brought me into AI in healthcare, using Design Futures and Transition Design to imagine what comes next, not just what exists now.',
      'I lead the Digital Agents Program with the Government of Pernambuco, where non-technical civil servants design ideas to bring public services into the digital world. I also coordinate FAST, a data-driven design program. We won the Brazilian Design Award 2025.',
    ],
    skills: ['Design Strategy', 'Product Design', 'User Research', 'Prototyping', 'Facilitation', 'UX Writing', 'Data-Driven Design', 'Design Futures', 'Mentoring', 'Public Sector', 'Figma', 'LLMs', 'Vibe Coding'],
    photos: [
      { src: aboutManaus, label: 'Manaus 🌅' },
      { src: aboutDogs,   label: 'the babies 🐶' },
      { src: aboutTravel, label: 'Porto ✈️' },
      { src: aboutMuseum, label: 'art 🎨' },
      { src: aboutFunny,  label: '100% real 😂' },
    ],
    sectionLabel: 'about me',
    skillsLabel: 'skills & areas',
  },
  pt: {
    greeting: 'Olá, eu sou a Thaís ✦',
    role: 'Product Design (UX/UI) • Service Design • Design Strategy',
    location: '📍 Recife, Brasil — Remoto, Aberta a Realocação',
    paras: [
      'Eu faço design na interseção de pessoas, sistemas e complexidade — o que, na maioria das vezes, significa que sou eu quem está na sala perguntando "mas por que funciona assim?" antes de alguém abrir o Figma.',
      'Morando em Recife (natural de Manaus), tenho 6+ anos trabalhando com empresas de óleo & gás, finanças e governo, transformando problemas complexos e confusos em produtos que as pessoas realmente querem usar.',
      'No Mestrado, pesquisei IA na saúde, usando Design de Futuros e Transition Design para imaginar o que vem a seguir em áreas como experiência, sistema, processo e cultura.',
      'Lidero o Programa de Agentes Digitais com o Governo de Pernambuco, onde servidores públicos sem perfil técnico criam ideias para digitalizar serviços públicos. Também coordeno o FAST, um programa de design orientado a dados. Ganhamos o Prêmio Brasileiro de Design 2025.',
    ],
    skills: ['Estratégia de Design', 'Product Design', 'Pesquisa com Usuários', 'Prototipação', 'Facilitação', 'UX Writing', 'Design Orientado a Dados', 'Design Futuros', 'Mentoria', 'Setor Público', 'Figma', 'LLMs', 'Vibe Coding'],
    photos: [
      { src: aboutManaus, label: 'Manaus 🌅' },
      { src: aboutDogs,   label: 'os bebês 🐶' },
      { src: aboutTravel, label: 'Porto ✈️' },
      { src: aboutMuseum, label: 'arte 🎨' },
      { src: aboutFunny,  label: '100% real 😂' },
    ],
    sectionLabel: 'sobre mim',
    skillsLabel: 'habilidades & áreas',
  },
}

const CV = {
  en: 'https://drive.google.com/file/d/18KZFdDQilNpJ7ZJT1IfGumvfasWGguLd/view?usp=sharing',
  pt: 'https://drive.google.com/file/d/1q1O4AqDqP5o282i11kgT2nrS3f-cJcFf/view?usp=sharing',
}

const CASE_PASSWORD = 'welcome14'

// ─── Carousel ─────────────────────────────────────────────────────────────────
function Carousel({ images, color, label }) {
  const [idx, setIdx] = useState(0)
  const timerRef = useRef(null)

  const advance = (next) => {
    setIdx(next)
    clearInterval(timerRef.current)
    timerRef.current = setInterval(() => setIdx(i => (i + 1) % images.length), 3000)
  }

  useEffect(() => {
    if (images.length <= 1) return
    timerRef.current = setInterval(() => setIdx(i => (i + 1) % images.length), 3000)
    return () => clearInterval(timerRef.current)
  }, [images.length])

  if (!images || images.length === 0) return null

  return (
    <div style={{ marginBottom: 16 }}>
      {label && (
        <div style={{ fontFamily: MONO, fontSize: 9, color, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 700, marginBottom: 8 }}>
          {label}
        </div>
      )}
      <div style={{ position: 'relative', borderRadius: 14, overflow: 'hidden', background: '#f5f5f5' }}>
        <img
          src={images[idx]}
          alt={`slide ${idx + 1}`}
          style={{ width: '100%', display: 'block', minHeight: 160, objectFit: 'cover', transition: 'opacity 0.3s' }}
        />
        {images.length > 1 && (
          <div style={{ position: 'absolute', bottom: 10, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 6 }}>
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => advance(i)}
                style={{
                  width: i === idx ? 16 : 6, height: 6,
                  borderRadius: 3,
                  background: i === idx ? color : 'rgba(255,255,255,0.6)',
                  border: 'none', cursor: 'pointer', padding: 0,
                  transition: 'all 0.25s',
                  WebkitTapHighlightColor: 'transparent',
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// ─── Password gate ────────────────────────────────────────────────────────────
function PasswordGate({ lang, color, onUnlock }) {
  const [value,   setValue]   = useState('')
  const [show,    setShow]    = useState(false)
  const [error,   setError]   = useState(false)
  const [shaking, setShaking] = useState(false)

  const isEn = lang === 'en'
  const txt = isEn
    ? { title: 'Protected case study', sub: 'This case is under NDA. Enter the password to continue.', wrong: 'Wrong password. Try again.', btn: 'Enter ✦', ph: 'password' }
    : { title: 'Case protegido', sub: 'Este case está sob NDA. Digite a senha para continuar.', wrong: 'Senha incorreta. Tente novamente.', btn: 'Entrar ✦', ph: 'senha' }

  const attempt = () => {
    if (value === CASE_PASSWORD) {
      onUnlock()
    } else {
      setError(true)
      setShaking(true)
      setTimeout(() => setShaking(false), 450)
      setTimeout(() => setError(false), 2000)
    }
  }

  return (
    <div style={{
      minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '32px 24px',
    }}>
      <div style={{
        background: '#fff',
        borderRadius: 24,
        padding: '36px 28px',
        boxShadow: `0 16px 60px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.05)`,
        width: '100%', maxWidth: 320,
        textAlign: 'center',
        transform: shaking ? 'translateX(0)' : undefined,
        animation: shaking ? 'mobileShake 0.45s ease' : undefined,
      }}>
        <style>{`@keyframes mobileShake { 0%,100%{transform:translateX(0)} 20%{transform:translateX(-8px)} 40%{transform:translateX(8px)} 60%{transform:translateX(-6px)} 80%{transform:translateX(6px)} }`}</style>
        <div style={{ fontSize: 40, marginBottom: 16 }}>🔒</div>
        <div style={{ fontFamily: MONO, fontSize: 15, fontWeight: 700, color: '#1a1a2e', marginBottom: 8 }}>{txt.title}</div>
        <div style={{ fontFamily: MONO, fontSize: 11, color: '#888', lineHeight: 1.65, marginBottom: 24 }}>{txt.sub}</div>
        <div style={{ position: 'relative', marginBottom: 12 }}>
          <input
            type={show ? 'text' : 'password'}
            value={value}
            placeholder={txt.ph}
            onChange={e => setValue(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && attempt()}
            style={{
              width: '100%', boxSizing: 'border-box',
              border: `1.5px solid ${error ? '#e05' : 'rgba(0,0,0,0.12)'}`,
              borderRadius: 12, outline: 'none',
              padding: '12px 40px 12px 14px',
              fontSize: 14, fontFamily: MONO,
              background: '#FAFAFA', color: '#333',
              transition: 'border-color 0.2s',
            }}
          />
          <button
            onClick={() => setShow(s => !s)}
            style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', border: 'none', background: 'none', fontSize: 14, color: '#CCC', cursor: 'pointer', padding: 0 }}
          >{show ? '🙈' : '👁️'}</button>
        </div>
        {error && <div style={{ fontFamily: MONO, fontSize: 11, color: '#e05', marginBottom: 10 }}>{txt.wrong}</div>}
        <button
          onClick={attempt}
          style={{
            width: '100%', background: color, color: '#fff', border: 'none',
            borderRadius: 12, padding: '13px', fontFamily: MONO,
            fontSize: 13, fontWeight: 700, letterSpacing: 0.8, cursor: 'pointer',
            WebkitTapHighlightColor: 'transparent',
          }}
        >{txt.btn}</button>
      </div>
    </div>
  )
}

// ─── Enter screen ─────────────────────────────────────────────────────────────
function EnterScreen({ onEnter }) {
  const [hovered, setHovered] = useState(null)
  const [exiting, setExiting] = useState(false)
  const [time,    setTime]    = useState('')

  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
    tick()
    const id = setInterval(tick, 10000)
    return () => clearInterval(id)
  }, [])

  const handleClick = (lang) => {
    setExiting(true)
    setTimeout(() => onEnter(lang), 480)
  }

  return (
    <div style={{ minHeight: '100dvh', background: CHECKER, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 24, position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 44, background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(12px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 18px', borderBottom: '1px solid rgba(232,96,154,0.15)' }}>
        <span style={{ fontFamily: MONO, fontSize: 11, color: PINK, fontWeight: 700, letterSpacing: 0.5 }}>thais.design</span>
        <span style={{ fontFamily: MONO, fontSize: 11, color: '#888' }}>{time} 📶</span>
      </div>

      <div style={{ background: 'rgba(255,255,255,0.88)', backdropFilter: 'blur(24px)', borderRadius: 24, padding: '44px 36px 36px', textAlign: 'center', border: '1px solid rgba(255,255,255,0.65)', boxShadow: '0 12px 48px rgba(232,96,154,0.18)', maxWidth: 340, width: '100%', transform: exiting ? 'translateY(-110vh)' : 'translateY(0)', opacity: exiting ? 0 : 1, transition: exiting ? 'transform 0.48s cubic-bezier(0.4,0,0.2,1), opacity 0.3s' : 'none' }}>
        <div style={{ fontFamily: SANS, fontWeight: 900, fontSize: 30, color: '#1a1a2e', letterSpacing: -1, lineHeight: 1.1 }}>thais lopes</div>
        <div style={{ fontFamily: SANS, fontWeight: 900, fontSize: 30, color: PINK, letterSpacing: -1, lineHeight: 1.15, marginBottom: 6 }}>portfolio ✦</div>
        <div style={{ fontFamily: MONO, fontSize: 10, color: '#AAA', letterSpacing: 1.2, marginBottom: 32 }}>Product Design (UX/UI) • Service Design • Design Strategy</div>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
          {[{ lang: 'en', label: '🇺🇸 EN' }, { lang: 'pt', label: '🇧🇷 PT' }].map(({ lang, label }) => (
            <button key={lang} onClick={() => handleClick(lang)} onMouseEnter={() => setHovered(lang)} onMouseLeave={() => setHovered(null)}
              style={{ background: hovered === lang ? PINK : PINK_DIM, color: hovered === lang ? '#fff' : PINK, border: `1.5px solid ${PINK}`, borderRadius: 10, padding: '9px 24px', fontFamily: MONO, fontWeight: 700, fontSize: 12, letterSpacing: 1, cursor: 'pointer', transition: 'all 0.15s', WebkitTapHighlightColor: 'transparent' }}>
              {label}
            </button>
          ))}
        </div>
      </div>

      {[{ top: '18%', left: '12%', size: 14, rot: 15 }, { top: '30%', right: '10%', size: 10, rot: -20 }, { bottom: '22%', left: '8%', size: 12, rot: 30 }, { bottom: '15%', right: '14%', size: 16, rot: -10 }].map((s, i) => (
        <div key={i} style={{ position: 'absolute', ...s, fontSize: s.size, transform: `rotate(${s.rot}deg)`, opacity: 0.55, pointerEvents: 'none', userSelect: 'none' }}>✦</div>
      ))}
    </div>
  )
}

// ─── Status bar ───────────────────────────────────────────────────────────────
function StatusBar({ lang, onLangChange, onGoHome }) {
  const [time, setTime] = useState('')
  useEffect(() => {
    const tick = () => setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
    tick()
    const id = setInterval(tick, 10000)
    return () => clearInterval(id)
  }, [])

  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(16px)', borderBottom: `1px solid ${PINK_DIM}`, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 16px' }}>
      <button onClick={onGoHome} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontFamily: MONO, fontSize: 11, fontWeight: 700, color: PINK, letterSpacing: 0.5, WebkitTapHighlightColor: 'transparent' }}>thais.design</button>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <button onClick={() => onLangChange(lang === 'en' ? 'pt' : 'en')}
          style={{ background: PINK_DIM, border: `1px solid rgba(232,96,154,0.3)`, borderRadius: 6, padding: '2px 8px', fontFamily: MONO, fontSize: 10, fontWeight: 700, color: PINK, cursor: 'pointer', letterSpacing: 0.5, lineHeight: '18px', WebkitTapHighlightColor: 'transparent' }}>
          {lang === 'en' ? '🇺🇸 EN' : '🇧🇷 PT'}
        </button>
        <span style={{ fontFamily: MONO, fontSize: 11, color: '#999' }}>🩷 📶 {time}</span>
      </div>
    </div>
  )
}

// ─── Tab bar ──────────────────────────────────────────────────────────────────
const TAB_DEFS = {
  en: [
    { id: 'home',    icon: '✦', label: 'home'    },
    { id: 'work',    icon: '⊞', label: 'work'    },
    { id: 'about',   icon: '◉', label: 'about'   },
    { id: 'cv',      icon: '↓', label: 'resume'  },
    { id: 'contact', icon: '✉', label: 'contact' },
  ],
  pt: [
    { id: 'home',    icon: '✦', label: 'início'   },
    { id: 'work',    icon: '⊞', label: 'work'     },
    { id: 'about',   icon: '◉', label: 'sobre'    },
    { id: 'cv',      icon: '↓', label: 'currículo'},
    { id: 'contact', icon: '✉', label: 'contato'  },
  ],
}

function TabBar({ activeTab, onTabChange, lang }) {
  return (
    <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 100, background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(16px)', borderTop: `1px solid ${PINK_DIM}`, display: 'flex', paddingBottom: 'env(safe-area-inset-bottom, 8px)' }}>
      {TAB_DEFS[lang].map(tab => {
        const active = activeTab === tab.id
        return (
          <button key={tab.id} onClick={() => onTabChange(tab.id)}
            style={{ flex: 1, background: 'none', border: 'none', cursor: 'pointer', padding: '10px 4px 6px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, WebkitTapHighlightColor: 'transparent' }}>
            <span style={{ fontSize: 18, color: active ? PINK : '#BBB', lineHeight: 1, transition: 'color 0.15s' }}>{tab.icon}</span>
            <span style={{ fontFamily: MONO, fontSize: 9, fontWeight: 700, letterSpacing: 0.8, color: active ? PINK : '#BBB', textTransform: 'uppercase', transition: 'color 0.15s' }}>{tab.label}</span>
            {active && <div style={{ width: 4, height: 4, borderRadius: '50%', background: PINK, marginTop: 1 }} />}
          </button>
        )
      })}
    </div>
  )
}

// ─── Home tab ─────────────────────────────────────────────────────────────────
function HomeTab({ lang, onGoWork, onGoAbout }) {
  const isEn = lang === 'en'
  return (
    <div>
      <div style={{ background: CHECKER, padding: '48px 24px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ background: 'rgba(255,255,255,0.82)', backdropFilter: 'blur(16px)', borderRadius: 20, padding: '24px', border: '1px solid rgba(255,255,255,0.7)', boxShadow: '0 4px 24px rgba(232,96,154,0.12)' }}>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginBottom: 20, textAlign: 'left' }}>
            <img src={thaisImg} alt="Thaís Lopes" style={{ width: 72, height: 72, borderRadius: '50%', objectFit: 'cover', border: `3px solid ${PINK}`, flexShrink: 0 }} />
            <div>
              <div style={{ fontFamily: SANS, fontWeight: 900, fontSize: 20, color: '#1a1a2e', marginBottom: 3, lineHeight: 1.1 }}>thais lopes</div>
              <div style={{ fontFamily: MONO, fontSize: 10, color: PINK, letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 6 }}>
                Product Design (UX/UI) • Service Design • Design Strategy
              </div>
              <div style={{ fontFamily: MONO, fontSize: 10, color: '#888' }}>
                📍 {isEn ? 'Recife, Brazil — Remote, Open to Relocate' : 'Recife, Brasil — Remoto, Aberta a Realocação'}
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={onGoWork} style={{ background: PINK, color: '#fff', border: 'none', borderRadius: 10, padding: '10px 20px', fontFamily: MONO, fontSize: 11, fontWeight: 700, letterSpacing: 0.8, cursor: 'pointer', WebkitTapHighlightColor: 'transparent' }}>
              {isEn ? '⊞ view work' : '⊞ ver trabalhos'}
            </button>
            <button onClick={onGoAbout} style={{ background: PINK_DIM, color: PINK, border: `1.5px solid ${PINK}`, borderRadius: 10, padding: '10px 20px', fontFamily: MONO, fontSize: 11, fontWeight: 700, letterSpacing: 0.8, cursor: 'pointer', WebkitTapHighlightColor: 'transparent' }}>
              {isEn ? '◉ about me' : '◉ sobre mim'}
            </button>
          </div>
        </div>
      </div>

      <div style={{ padding: '24px 16px 0' }}>
        <div style={{ fontFamily: MONO, fontSize: 9, color: '#AAA', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 14 }}>
          {isEn ? '✦ highlights' : '✦ destaques'}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {(isEn ? [
            { num: '6+',     label: 'years of experience' },
            { num: '+1000',  label: 'students in courses I coordinated' },
            { num: '+$1.2M', label: 'in contract renewals on projects I led' },
            { num: 'MSc',    label: 'AI in Health · Design Futures & Transition Design' },
          ] : [
            { num: '6+',     label: 'anos de experiência' },
            { num: '+1000',  label: 'alunos em cursos que coordenei' },
            { num: '+$1,2M', label: 'em renovações contratuais de projetos que liderei' },
            { num: 'MSc',    label: 'IA em Saúde · Design de Futuros e Transition Design' },
          ]).map(s => (
            <div key={s.num} style={{ background: PINK_BG, border: `1px solid rgba(232,96,154,0.2)`, borderRadius: 14, padding: '14px 16px' }}>
              <div style={{ fontFamily: SANS, fontWeight: 900, fontSize: 22, color: PINK, lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontFamily: MONO, fontSize: 10, color: '#888', marginTop: 4, lineHeight: 1.4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: '24px 16px 100px', display: 'flex', gap: 10 }}>
        <a href="https://www.linkedin.com/in/thaiss-lopes/" target="_blank" rel="noreferrer"
          style={{ flex: 1, textAlign: 'center', textDecoration: 'none', background: '#fff', border: `1px solid ${PINK_DIM}`, borderRadius: 12, padding: '12px 8px', fontFamily: MONO, fontSize: 10, color: PINK, fontWeight: 700 }}>
          ↗ LinkedIn
        </a>
        <a href={CV[lang]} target="_blank" rel="noreferrer"
          style={{ flex: 1, textAlign: 'center', textDecoration: 'none', background: '#fff', border: `1px solid ${PINK_DIM}`, borderRadius: 12, padding: '12px 8px', fontFamily: MONO, fontSize: 10, color: PINK, fontWeight: 700 }}>
          ↓ {isEn ? 'Download CV' : 'Baixar CV'}
        </a>
      </div>
    </div>
  )
}

// ─── Case detail ──────────────────────────────────────────────────────────────
function SectionBlock({ s, color, lang }) {
  const isEn = lang === 'en'
  const accent = color
  const dimBorder = `1px solid rgba(0,0,0,0.07)`

  return (
    <div style={{ marginBottom: 6 }}>
      {/* section header */}
      <div style={{ fontFamily: MONO, fontSize: 9, color: accent, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 700, marginBottom: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ opacity: 0.5 }}>{s.num} ·</span> {s.heading}
        <span style={{ flex: 1, height: 1, background: `linear-gradient(to right, ${color}40, transparent)` }} />
      </div>

      {/* body text */}
      {s.body && <p style={{ fontFamily: MONO, fontSize: 12, color: '#555', lineHeight: 1.85, margin: '0 0 12px' }}>{s.body}</p>}

      {/* callout */}
      {s.callout && (
        <div style={{ background: `${color}12`, borderLeft: `3px solid ${accent}`, borderRadius: '0 10px 10px 0', padding: '10px 14px', marginBottom: 12, fontFamily: MONO, fontSize: 12, color: '#444', lineHeight: 1.75, fontStyle: 'italic' }}>
          {s.callout}
        </div>
      )}

      {/* bullets */}
      {s.bullets && s.bullets.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 12 }}>
          {s.bullets.map((b, i) => (
            <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', background: '#fff', border: dimBorder, borderRadius: 8, padding: '8px 12px' }}>
              <span style={{ color: accent, fontSize: 11, flexShrink: 0, marginTop: 1 }}>·</span>
              <span style={{ fontFamily: MONO, fontSize: 12, color: '#444', lineHeight: 1.65 }}>{b}</span>
            </div>
          ))}
        </div>
      )}

      {/* metrics */}
      {s.metrics && s.metrics.length > 0 && (
        <div style={{ display: 'grid', gridTemplateColumns: s.metrics.length === 1 ? '1fr' : '1fr 1fr', gap: 8, marginBottom: 12 }}>
          {s.metrics.map((m, i) => (
            <div key={i} style={{ background: `${color}10`, border: `1px solid ${color}30`, borderRadius: 12, padding: '14px 16px', textAlign: 'center' }}>
              <div style={{ fontFamily: SANS, fontWeight: 900, fontSize: 24, color: accent, lineHeight: 1 }}>{m.num}</div>
              <div style={{ fontFamily: MONO, fontSize: 11, color: '#666', marginTop: 4, lineHeight: 1.4 }}>{m.label}</div>
            </div>
          ))}
        </div>
      )}

      {/* before/after */}
      {s.beforeAfter && s.beforeAfter.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 12 }}>
          {s.beforeAfter.map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#fff', border: dimBorder, borderRadius: 10, padding: '10px 12px' }}>
              <span style={{ fontFamily: MONO, fontSize: 12, color: '#666', flex: 1, lineHeight: 1.5 }}>{item.before}</span>
              <span style={{ fontFamily: MONO, fontSize: 14, color: accent, fontWeight: 700, flexShrink: 0 }}>→</span>
              <span style={{ fontFamily: MONO, fontSize: 12, color: '#333', fontWeight: 600, flex: 1, lineHeight: 1.5 }}>{item.after}</span>
            </div>
          ))}
        </div>
      )}

      {/* workshop days */}
      {s.workshopDays && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginBottom: 12 }}>
          {s.workshopDays.map(d => (
            <div key={d.day} style={{ background: '#fff', border: dimBorder, borderRadius: 10, padding: '12px 10px', textAlign: 'center' }}>
              <div style={{ fontFamily: MONO, fontSize: 11, fontWeight: 800, color: accent, marginBottom: 4 }}>{d.day}</div>
              <div style={{ fontFamily: MONO, fontSize: 11, color: '#555', lineHeight: 1.55 }}>{d.focus}</div>
            </div>
          ))}
        </div>
      )}

      {/* design areas */}
      {s.designAreas && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 12 }}>
          {s.designAreas.map(a => (
            <div key={a.area} style={{ background: '#fff', border: dimBorder, borderLeft: `3px solid ${accent}`, borderRadius: '0 10px 10px 0', padding: '12px 14px', display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <span style={{ fontSize: 18, flexShrink: 0 }}>{a.icon}</span>
              <div>
                <div style={{ fontFamily: MONO, fontSize: 12, fontWeight: 700, color: accent, marginBottom: 4 }}>{a.area}</div>
                <div style={{ fontFamily: MONO, fontSize: 12, color: '#444', lineHeight: 1.65 }}>{a.desc}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* learnings */}
      {s.learnings && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 12 }}>
          {s.learnings.map((l, i) => (
            <div key={i} style={{ background: '#fff', border: dimBorder, borderLeft: `3px solid ${accent}`, borderRadius: '0 10px 10px 0', padding: '12px 14px' }}>
              <div style={{ fontFamily: MONO, fontSize: 11, fontWeight: 700, color: accent, marginBottom: 4 }}>{String(i + 1).padStart(2, '0')} · {l.title}</div>
              <div style={{ fontFamily: MONO, fontSize: 12, color: '#444', lineHeight: 1.65 }}>{l.body}</div>
            </div>
          ))}
        </div>
      )}

      {/* quotes */}
      {s.quotes && s.quotes.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 12 }}>
          {s.quotes.map((q, i) => (
            <div key={i} style={{ background: `${color}10`, borderLeft: `3px solid ${accent}`, borderRadius: '0 10px 10px 0', padding: '10px 14px' }}>
              <div style={{ fontFamily: MONO, fontSize: 12, color: '#333', lineHeight: 1.7, fontStyle: 'italic', marginBottom: 4 }}>"{q.text}"</div>
              <div style={{ fontFamily: MONO, fontSize: 9, color: accent, fontWeight: 700 }}>· {q.attr}</div>
            </div>
          ))}
        </div>
      )}

      {/* images / carousel */}
      {s.images && s.images.length > 0 && (
        <Carousel images={s.images} color={accent} label={s.carouselLabel} />
      )}
    </div>
  )
}

function CaseDetail({ c, lang, onBack }) {
  const [unlocked, setUnlocked] = useState(!c.passwordProtected)
  const isEn = lang === 'en'

  return (
    <div style={{ paddingBottom: 100 }}>
      {/* back */}
      <button onClick={onBack}
        style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, fontFamily: MONO, fontSize: 11, color: c.color, fontWeight: 700, padding: '14px 16px 0', WebkitTapHighlightColor: 'transparent' }}>
        ← {isEn ? 'all cases' : 'todos os cases'}
      </button>

      {/* hero image */}
      <div style={{ padding: '12px 16px 0' }}>
        <div style={{ background: c.bg, border: `1px solid ${c.border}`, borderRadius: 18, overflow: 'hidden' }}>
          <img src={c.img} alt={c.title} style={{ width: '100%', height: 180, objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
          <div style={{ padding: '14px 16px 18px' }}>
            <div style={{ fontFamily: MONO, fontSize: 9, color: c.color, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 4 }}>{c.subtitle}</div>
            <div style={{ fontFamily: SANS, fontWeight: 800, fontSize: 20, color: '#1a1a2e', marginBottom: 6, lineHeight: 1.2 }}>{c.title}</div>
            <div style={{ fontFamily: MONO, fontSize: 12, color: '#444', lineHeight: 1.65, marginBottom: 12 }}>{c.summary}</div>
            <span style={{ background: c.color, color: '#fff', borderRadius: 8, padding: '5px 12px', fontFamily: MONO, fontSize: 10, fontWeight: 700 }}>{c.outcome}</span>
          </div>
        </div>
      </div>

      {/* meta */}
      <div style={{ display: 'flex', gap: 8, padding: '12px 16px 0', flexWrap: 'wrap' }}>
        {c.about.map(m => (
          <div key={m.label} style={{ background: '#fff', border: `1px solid ${PINK_DIM}`, borderRadius: 10, padding: '8px 12px' }}>
            <div style={{ fontFamily: MONO, fontSize: 8, color: '#BBB', textTransform: 'uppercase', letterSpacing: 1 }}>{m.label}</div>
            <div style={{ fontFamily: MONO, fontSize: 12, color: '#333', fontWeight: 700, marginTop: 2 }}>{m.value}</div>
          </div>
        ))}
      </div>

      {/* tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, padding: '10px 16px 0' }}>
        {c.tags.map(t => (
          <span key={t} style={{ background: c.bg, border: `1px solid ${c.border}`, borderRadius: 20, padding: '4px 12px', fontFamily: MONO, fontSize: 10, color: c.color, fontWeight: 600 }}>{t}</span>
        ))}
      </div>

      {/* disclaimer */}
      <div style={{ margin: '14px 16px 0', background: '#FFFBEC', border: '1px solid rgba(200,160,0,0.25)', borderRadius: 12, padding: '10px 14px', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
        <span style={{ fontSize: 14, flexShrink: 0 }}>💡</span>
        <span style={{ fontFamily: MONO, fontSize: 11, color: '#7A6000', lineHeight: 1.65 }}>
          {isEn
            ? 'This is a shortened version of the case study. To read the full case, access the portfolio on a desktop browser.'
            : 'Esta é uma versão resumida do case. Para ler o case completo, acesse o portfólio pelo navegador em um computador.'}
        </span>
      </div>

      {/* password gate or sections */}
      {!unlocked ? (
        <PasswordGate lang={lang} color={c.color} onUnlock={() => setUnlocked(true)} />
      ) : (
        <div style={{ padding: '20px 16px 0' }}>
          {c.sections.map((s, i) => (
            <div key={i} style={{ background: '#fff', border: `1px solid rgba(0,0,0,0.06)`, borderLeft: `3px solid ${c.color}`, borderRadius: '0 14px 14px 0', padding: '16px 16px', marginBottom: 12 }}>
              <SectionBlock s={s} color={c.color} lang={lang} />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

// ─── Work tab ─────────────────────────────────────────────────────────────────
function WorkTab({ lang, onSelectCase }) {
  const isEn = lang === 'en'
  const cases = CASES[lang]
  return (
    <div style={{ padding: '20px 16px 100px' }}>
      <div style={{ fontFamily: MONO, fontSize: 9, color: '#AAA', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>
        ⊞ {isEn ? 'case studies' : 'estudos de caso'}
      </div>
      {cases.map(c => (
        <button key={c.id} onClick={() => onSelectCase(c.id)}
          style={{ width: '100%', background: '#fff', textAlign: 'left', border: `1px solid ${c.border}`, borderLeft: `4px solid ${c.color}`, borderRadius: '0 16px 16px 0', marginBottom: 12, padding: 0, cursor: 'pointer', overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.04)', WebkitTapHighlightColor: 'transparent' }}>
          <img src={c.img} alt={c.title} style={{ width: '100%', height: 130, objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
          <div style={{ padding: '12px 16px 14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
              <div style={{ fontFamily: MONO, fontSize: 9, color: c.color, letterSpacing: 1.8, textTransform: 'uppercase' }}>{c.subtitle}</div>
              {c.passwordProtected && <span style={{ fontFamily: MONO, fontSize: 9, color: '#BBB' }}>🔒</span>}
            </div>
            <div style={{ fontFamily: SANS, fontWeight: 800, fontSize: 16, color: '#1a1a2e', marginBottom: 6, lineHeight: 1.2 }}>{c.title}</div>
            <div style={{ fontFamily: MONO, fontSize: 12, color: '#555', lineHeight: 1.65, marginBottom: 10 }}>{c.summary}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
              {c.tags.map(t => (
                <span key={t} style={{ background: c.bg, borderRadius: 20, padding: '3px 10px', fontFamily: MONO, fontSize: 9, color: c.color, fontWeight: 600 }}>{t}</span>
              ))}
            </div>
          </div>
        </button>
      ))}
    </div>
  )
}

// ─── About tab ────────────────────────────────────────────────────────────────
function AboutTab({ lang }) {
  const a = ABOUT[lang]
  return (
    <div style={{ padding: '20px 16px 100px' }}>
      <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginBottom: 20 }}>
        <img src={thaisImg} alt="Thaís" style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', border: `2.5px solid ${PINK}`, flexShrink: 0 }} />
        <div>
          <div style={{ fontFamily: SANS, fontWeight: 800, fontSize: 18, color: '#1a1a2e', lineHeight: 1.2 }}>{a.greeting}</div>
          <div style={{ fontFamily: MONO, fontSize: 10, color: PINK, marginTop: 3 }}>{a.role}</div>
          <div style={{ fontFamily: MONO, fontSize: 10, color: '#888', marginTop: 2 }}>{a.location}</div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 8, overflowX: 'auto', marginBottom: 20, paddingBottom: 4, scrollbarWidth: 'none' }}>
        {a.photos.map((p, i) => (
          <div key={i} style={{ flexShrink: 0, textAlign: 'center' }}>
            <img src={p.src} alt={p.label} style={{ width: 80, height: 96, objectFit: 'cover', borderRadius: 12, border: `1.5px solid rgba(232,96,154,0.25)`, display: 'block' }} />
            <div style={{ fontFamily: MONO, fontSize: 9, color: '#AAA', marginTop: 4 }}>{p.label}</div>
          </div>
        ))}
      </div>

      <div style={{ fontFamily: MONO, fontSize: 9, color: PINK, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 700, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
        {a.sectionLabel}
        <span style={{ flex: 1, height: 1, background: `linear-gradient(to right, ${PINK_DIM}, transparent)` }} />
      </div>
      {a.paras.map((p, i) => (
        <p key={i} style={{ fontFamily: MONO, fontSize: 12, color: '#555', lineHeight: 1.85, margin: '0 0 12px' }}>{p}</p>
      ))}

      <div style={{ fontFamily: MONO, fontSize: 9, color: PINK, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 700, margin: '20px 0 10px', display: 'flex', alignItems: 'center', gap: 8 }}>
        {a.skillsLabel}
        <span style={{ flex: 1, height: 1, background: `linear-gradient(to right, ${PINK_DIM}, transparent)` }} />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
        {a.skills.map(s => (
          <span key={s} style={{ background: PINK_BG, border: `1px solid rgba(232,96,154,0.2)`, borderRadius: 20, padding: '5px 13px', fontFamily: MONO, fontSize: 10, color: '#777' }}>{s}</span>
        ))}
      </div>
    </div>
  )
}

// ─── CV tab ───────────────────────────────────────────────────────────────────
function CvTab({ lang }) {
  const isEn = lang === 'en'
  return (
    <div style={{ padding: '20px 16px 100px' }}>
      <div style={{ fontFamily: MONO, fontSize: 9, color: '#AAA', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>
        ↓ {isEn ? 'resume' : 'currículo'}
      </div>

      <div style={{ background: CHECKER, borderRadius: 18, padding: '28px 20px', textAlign: 'center', marginBottom: 20, border: `1px solid rgba(232,96,154,0.2)` }}>
        <div style={{ background: 'rgba(255,255,255,0.88)', backdropFilter: 'blur(12px)', borderRadius: 14, padding: '20px 16px' }}>
          <div style={{ fontSize: 32, marginBottom: 10 }}>📄</div>
          <div style={{ fontFamily: SANS, fontWeight: 800, fontSize: 16, color: '#1a1a2e', marginBottom: 6 }}>thais lopes</div>
          <div style={{ fontFamily: MONO, fontSize: 10, color: '#888', marginBottom: 20 }}>Product Design (UX/UI) • Service Design • Design Strategy</div>
          <a href={CV[lang]} target="_blank" rel="noreferrer"
            style={{ display: 'inline-block', background: PINK, color: '#fff', borderRadius: 10, padding: '11px 28px', fontFamily: MONO, fontSize: 12, fontWeight: 700, letterSpacing: 0.8, textDecoration: 'none' }}>
            ↓ {isEn ? 'Download CV' : 'Baixar CV'}
          </a>
        </div>
      </div>

      <div style={{ fontFamily: MONO, fontSize: 9, color: PINK, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 700, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
        {isEn ? 'experience' : 'experiência'}
        <span style={{ flex: 1, height: 1, background: `linear-gradient(to right, ${PINK_DIM}, transparent)` }} />
      </div>
      {(isEn ? [
        { title: 'Product Designer', company: 'CESAR', period: 'Nov 2021 – Present', note: 'Largest innovation center in NE Brazil' },
        { title: 'Product Designer', company: 'Sidia', period: 'Sep 2020 – Nov 2021', note: 'One of the largest R&D institutes in Brazil' },
        { title: 'UX/UI Designer', company: 'Fermen.to', period: 'Jun–Dec 2019', note: 'Independent innovation lab' },
      ] : [
        { title: 'Product Designer', company: 'CESAR', period: 'Nov 2021 – Atual', note: 'Maior centro de inovação do Nordeste' },
        { title: 'Product Designer', company: 'Sidia', period: 'Set 2020 – Nov 2021', note: 'Um dos maiores institutos de P&D do Brasil' },
        { title: 'UX/UI Designer', company: 'Fermen.to', period: 'Jun–Dez 2019', note: 'Lab de inovação independente' },
      ]).map(e => (
        <div key={e.company} style={{ background: '#fff', border: `1px solid ${PINK_DIM}`, borderLeft: `3px solid ${PINK}`, borderRadius: '0 12px 12px 0', padding: '12px 14px', marginBottom: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8 }}>
            <span style={{ fontFamily: SANS, fontWeight: 700, fontSize: 13, color: '#1a1a2e' }}>{e.title} — {e.company}</span>
            <span style={{ fontFamily: MONO, fontSize: 9, color: '#BBB', flexShrink: 0 }}>{e.period}</span>
          </div>
          <div style={{ fontFamily: MONO, fontSize: 10, color: PINK, marginTop: 3 }}>{e.note}</div>
        </div>
      ))}

      <div style={{ fontFamily: MONO, fontSize: 9, color: PINK, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 700, margin: '20px 0 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
        {isEn ? 'education' : 'formação'}
        <span style={{ flex: 1, height: 1, background: `linear-gradient(to right, ${PINK_DIM}, transparent)` }} />
      </div>
      {(isEn ? [
        { degree: 'Master\'s in Design', school: 'UFPE', period: '2022–2024', note: 'AI in healthcare · Design Futures' },
        { degree: 'Bachelor\'s in Design', school: 'UEA', period: '2015–2020', note: 'Product & Digital Design' },
      ] : [
        { degree: 'Mestrado em Design', school: 'UFPE', period: '2022–2024', note: 'IA na saúde · Design de Futuros' },
        { degree: 'Bacharelado em Design', school: 'UEA', period: '2015–2020', note: 'Design de Produto & Digital' },
      ]).map(e => (
        <div key={e.school} style={{ background: '#fff', border: `1px solid ${PINK_DIM}`, borderLeft: `3px solid ${PINK}`, borderRadius: '0 12px 12px 0', padding: '12px 14px', marginBottom: 10 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8 }}>
            <span style={{ fontFamily: SANS, fontWeight: 700, fontSize: 13, color: '#1a1a2e' }}>{e.degree} · {e.school}</span>
            <span style={{ fontFamily: MONO, fontSize: 9, color: '#BBB', flexShrink: 0 }}>{e.period}</span>
          </div>
          <div style={{ fontFamily: MONO, fontSize: 10, color: PINK, marginTop: 3 }}>{e.note}</div>
        </div>
      ))}
    </div>
  )
}

// ─── Contact tab ─────────────────────────────────────────────────────────────
function ContactTab({ lang }) {
  const isEn = lang === 'en'
  const [status, setStatus] = useState('idle')
  const [form, setForm]     = useState({ name: '', email: '', message: '' })

  const t = isEn
    ? { heading: 'say hello ✦', sub: "I'd love to hear from you.", namePh: 'your name', emailPh: 'your email', msgPh: 'your message...', btn: 'send message', sending: 'sending...', done: "message sent! I'll get back to you soon ✦", err: 'something went wrong — try again?' }
    : { heading: 'diga olá ✦',  sub: 'Adoraria ouvir de você.',   namePh: 'seu nome',   emailPh: 'seu e-mail',  msgPh: 'sua mensagem...', btn: 'enviar mensagem', sending: 'enviando...', done: 'mensagem enviada! Te respondo em breve ✦', err: 'algo deu errado — tenta de novo?' }

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formspree.io/f/xvzdnyvr', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'done' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = {
    width: '100%', boxSizing: 'border-box',
    border: `1.5px solid rgba(232,96,154,0.25)`, borderRadius: 12, outline: 'none',
    padding: '11px 14px', fontSize: 13, fontFamily: MONO,
    background: '#FFF9FC', color: '#333', transition: 'border-color 0.2s',
  }

  return (
    <div style={{ padding: '20px 16px 100px' }}>
      <div style={{ fontFamily: MONO, fontSize: 9, color: '#AAA', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 16 }}>
        ✉ {isEn ? 'contact' : 'contato'}
      </div>

      <div style={{ background: CHECKER, borderRadius: 18, padding: '24px 20px', marginBottom: 20, border: `1px solid rgba(232,96,154,0.2)` }}>
        <div style={{ background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(12px)', borderRadius: 14, padding: '20px 16px' }}>
          <div style={{ fontFamily: SANS, fontWeight: 800, fontSize: 18, color: '#1a1a2e', marginBottom: 4 }}>{t.heading}</div>
          <div style={{ fontFamily: MONO, fontSize: 11, color: '#888', marginBottom: 0 }}>{t.sub}</div>
        </div>
      </div>

      {status === 'done' ? (
        <div style={{ background: PINK_BG, border: `1px solid rgba(232,96,154,0.3)`, borderRadius: 14, padding: '24px', textAlign: 'center', fontFamily: MONO, fontSize: 13, color: PINK, lineHeight: 1.6 }}>
          {t.done}
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <input name="name" placeholder={t.namePh} value={form.name} onChange={handleChange} required style={inputStyle} />
          <input name="email" type="email" placeholder={t.emailPh} value={form.email} onChange={handleChange} required style={inputStyle} />
          <textarea name="message" placeholder={t.msgPh} value={form.message} onChange={handleChange} required rows={5}
            style={{ ...inputStyle, resize: 'vertical', minHeight: 110 }} />
          {status === 'error' && <div style={{ fontFamily: MONO, fontSize: 11, color: '#C00' }}>{t.err}</div>}
          <button type="submit" disabled={status === 'sending'}
            style={{ background: PINK, color: '#fff', border: 'none', borderRadius: 12, padding: '13px', fontFamily: MONO, fontSize: 13, fontWeight: 700, cursor: status === 'sending' ? 'wait' : 'pointer', opacity: status === 'sending' ? 0.7 : 1, WebkitTapHighlightColor: 'transparent' }}>
            {status === 'sending' ? t.sending : t.btn}
          </button>
        </form>
      )}

      <div style={{ marginTop: 24, paddingTop: 20, borderTop: `1px solid ${PINK_DIM}` }}>
        <div style={{ fontFamily: MONO, fontSize: 9, color: '#BBB', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 }}>
          {isEn ? 'or reach me directly' : 'ou me encontre diretamente'}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <a href="mailto:thaislopesdesign@gmail.com"
            style={{ display: 'block', textDecoration: 'none', background: '#fff', border: `1px solid ${PINK_DIM}`, borderRadius: 12, padding: '12px 16px', fontFamily: MONO, fontSize: 12, color: PINK, fontWeight: 600 }}>
            ✉ thaislopesdesign@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/thaiss-lopes/" target="_blank" rel="noreferrer"
            style={{ display: 'block', textDecoration: 'none', background: '#fff', border: `1px solid ${PINK_DIM}`, borderRadius: 12, padding: '12px 16px', fontFamily: MONO, fontSize: 12, color: PINK, fontWeight: 600 }}>
            ↗ LinkedIn
          </a>
        </div>
      </div>
    </div>
  )
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function MobilePortfolio() {
  const [entered,      setEntered]      = useState(false)
  const [lang,         setLang]         = useState('en')
  const [activeTab,    setActiveTab]    = useState('home')
  const [selectedCase, setSelectedCase] = useState(null)

  const handleEnter = (l) => { setLang(l); setEntered(true) }

  const handleSelectCase = (id) => {
    setSelectedCase(id)
    setActiveTab('work')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    setSelectedCase(null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!entered) return <EnterScreen onEnter={handleEnter} />

  const caseData = selectedCase ? CASES[lang].find(c => c.id === selectedCase) : null

  return (
    <div style={{ minHeight: '100dvh', background: '#FAFAFA', maxWidth: 480, margin: '0 auto' }}>
      <StatusBar lang={lang} onLangChange={setLang} onGoHome={() => handleTabChange('home')} />
      <div style={{ paddingBottom: 80 }}>
        {activeTab === 'home' && <HomeTab lang={lang} onGoWork={() => handleTabChange('work')} onGoAbout={() => handleTabChange('about')} />}
        {activeTab === 'work' && !selectedCase && <WorkTab lang={lang} onSelectCase={handleSelectCase} />}
        {activeTab === 'work' && caseData && <CaseDetail c={caseData} lang={lang} onBack={() => setSelectedCase(null)} />}
        {activeTab === 'about' && <AboutTab lang={lang} />}
        {activeTab === 'cv'      && <CvTab lang={lang} />}
        {activeTab === 'contact' && <ContactTab lang={lang} />}
      </div>
      <TabBar activeTab={activeTab} onTabChange={handleTabChange} lang={lang} />
    </div>
  )
}
