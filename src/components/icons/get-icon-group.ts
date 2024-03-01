const iconMap = {
  Essential: [
    'academic_cap',
    'achievement',
    'ai',
    'all_questions',
    'answer_bubble',
    'answer',
    'answers',
    'archive_checked',
    'archive',
    'ask_bubble',
    'block',
    'bulb_checked',
    'bulb_filled',
    'bulb',
    'calendar',
    'chapter',
    'chapter',
    'clipboard',
    'clipboard_outlined',
    'counter',
    'credit_card',
    'cursor_select',
    'document',
    'dot',
    'envelope',
    'exclamation_mark',
    'funnel',
    'gift',
    'ginny',
    'globe',
    'hand_move',
    'home',
    'how_to_scan',
    'info_outlined',
    'info',
    'link',
    'lock_with_play',
    'math_scan',
    'money_transfer',
    'multiselect_checked',
    'multiselect_unchecked',
    'padlock_open',
    'padlock',
    'printer',
    'question_alt',
    'question',
    'recent_questions_alt',
    'recent_questions',
    'seen',
    'send',
    'settings',
    'shield',
    'smartphone',
    'sms',
    'spark',
    'sparks',
    'textbook',
    'toughest_questions_alt',
    'toughest_questions',
    'unseen',
    'view_checked',
    'warning',
  ],
  Social: [
    'ask_parent_to_pay',
    'bell_checked',
    'bell_outlined',
    'best_answer',
    'bookmark_checked',
    'bookmark_outlined',
    'bookmark',
    'check',
    'check_circle',
    'comment_outlined',
    'comment',
    'crown_outlined',
    'crown',
    'cup',
    'friend_add',
    'friend_checked',
    'friend_pending',
    'friend_remove',
    'friends',
    'heart_outlined',
    'heart_outlined',
    'heart',
    'influence',
    'megaphone',
    'message_new',
    'messages',
    'notifications',
    'points',
    'profile_settings',
    'profile_view',
    'profile',
    'report_flag_outlined',
    'report_flag',
    'share_on_ios',
    'share',
    'star_half_outlined',
    'star_half',
    'star_outlined',
    'star',
    'thumb_down_outlined',
    'thumb_down',
    'thumb_up_outlined',
    'thumb_up',
    'unbookmark',
    'user_block',
    'verified',
  ],
  'Editor and Media': [
    'arrow_top_right',
    'attachment',
    'backward_5s',
    'backward_end',
    'barcode_scanner',
    'bold',
    'bring_front',
    'bulleted_list',
    'camera',
    'circle_fill',
    'circle',
    'crop',
    'cyrillic',
    'dashed_line',
    'draw',
    'drawing_mode',
    'equation',
    'eraser',
    'european',
    'flashlight_off',
    'flashlight_on',
    'forward_5s',
    'forward',
    'graph',
    'greek',
    'heading',
    'hexagon',
    'highlight',
    'image_library',
    'image',
    'italic',
    'keyboard',
    'line',
    'mic',
    'mic_muted',
    'numbered_list',
    'pause',
    'pdf',
    'pencil',
    'pi',
    'play',
    'quote',
    'rectangle',
    'replay',
    'rotate_90',
    'rotate',
    'send_back',
    'subtitle',
    'sup_sub',
    'symbols',
    'text',
    'time_speed',
    'title',
    'trash',
    'triangle',
    'underlined',
    'upload',
  ],
  Navigation: [
    'add_more',
    'arrow_double_down',
    'arrow_double_left',
    'arrow_double_right',
    'arrow_double_up',
    'arrow_down',
    'arrow_left',
    'arrow_right',
    'arrow_up',
    'caret_down',
    'caret_up',
    'chevron_double_down',
    'chevron_double_right',
    'chevron_down',
    'chevron_left',
    'chevron_right',
    'chevron_up',
    'chevrons_horizontal',
    'clear',
    'close',
    'collapse',
    'expand',
    'filters',
    'fullscreen',
    'less',
    'logout',
    'minus_in_circle_outlined',
    'menu',
    'more',
    'open_in_new_tab',
    'options',
    'plus',
    'reload',
    'search',
    'search_add',
    'sidebar_left',
    'sidebar_right',
  ],
  'Social Media': [
    'apple',
    'brainly_oval',
    'brainly_parallelogram',
    'facebook',
    'google',
    'instagram',
    'linkedin',
    'medium',
    'twitter',
    'youtube',
  ],
};
const groups = Object.keys(iconMap);

export function getIconGroup(iconName: string): string {
  return groups.find(group => iconMap[group].includes(iconName)) || 'Misc';
}
