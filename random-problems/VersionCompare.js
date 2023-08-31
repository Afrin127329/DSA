/**
 * 
 * @param {*} version1 
 * @param {*} version2 
 * @returns 0 || 1 || -1
 * 
 * Note: This is an online coding interview challenge
 */

function versionCompare(version1, version2) {
    let versionNum1 = 0, versionNum2 = 0;
 
    for (let i = 0, j = 0; (i < version1.length || j < version2.length);) {
        while (i < version1.length && version1[i] != '.') {
            versionNum1 = versionNum1 * 10 + (version1[i] - '0');
            i++;
        }
        while (j < version2.length && version2[j] != '.') {
            versionNum2 = versionNum2 * 10 + (version2[j] - '0');
            j++;
        }
 
        if (versionNum1 > versionNum2)
            return 1;
        if (versionNum2 > versionNum1)
            return -1;
        versionNum1 = versionNum2 = 0;
        i++;
        j++;
    }
    return 0;
}

console.log(versionCompare('2.0.1', '1.2000.1'));