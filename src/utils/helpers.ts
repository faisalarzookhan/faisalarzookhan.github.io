export const openWhatsApp = (number: string) => {
  const text = encodeURIComponent(`Hello Faishal, I saw your portfolio and would like to discuss a potential collaboration.`);
  window.open(`https://wa.me/${number.replace('+', '')}?text=${text}`, '_blank');
};

export const generateEmailLink = (email: string, subject: string) => {
  const body = encodeURIComponent(`Dear Faishal,\n\nI hope this email finds you well. I was impressed by your work at Limitless Infotech and would like to connect regarding...`);
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${body}`;
};
