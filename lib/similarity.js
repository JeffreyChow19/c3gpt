/**
 * get levenshtein distance between two strings
 * 
 * @param {*} str1 (string) : first string
 * @param {*} str2 (string) : second string
 * @returns   (int)         : levenshtein distance
 */
function levenshteinDist(str1, str2) {
   let len1 = str1.length
   let len2 = str2.length

   // create matrix len2+1 x len1+1
   let mat = Array(len2 + 1).fill(null).map(() =>
   Array(len1 + 1).fill(null));

   // fill side value for str1
   for (let i = 0; i <= len1; i++) {
      mat[0][i] = i;
   }

   // fill side value for str2
   for (let i = 1; i <= len2; i++) {
      mat[i][0] = i;
   }

   // fill matrix
   for (let i = 1; i <= len2; i++) {
      for (let j = 1; j <= len1; j++) {
         mat[i][j] = Math.min(
            mat[i][j - 1] + 1,
            mat[i - 1][j] + 1,
            mat[i - 1][j - 1] + (str1[j - 1] === str2[i - 1] ? 0 : 1),
         );
      }
   }

   // distance is the bottom-right-corner of the matrix
   return mat[len2][len1];
};

/**
 * calculate similarity between two strings using levenshtein distance algorithm
 * 
 * @param {*} str1 (string) : first string
 * @param {*} str2 (string) : second string
 * @returns   (number)      : similarity percentage
 */
function similarityPercentage(str1, str2) {
   return 1 - levenshteinDist(str1, str2) / Math.max(str1.length, str2.length);
}