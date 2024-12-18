export const singleMember = (allMember) => {
  if (Array.isArray(allMember)) {
    return allMember.map((member) => {
      return member;
    });
  }
};
