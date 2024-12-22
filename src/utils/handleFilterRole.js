/**
 *
 * @param {Array} members
 * @param {string} role
 * @returns {Array} all filter members
 */
export const handleFilterRole = (members, role) => {
  if (role) {
    return members.filter((member) => member.role === role);
  }
  return members;
};
