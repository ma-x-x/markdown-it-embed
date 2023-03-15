
/*! @maxx/markdown-it-embed 1.0.0 https://github.com/ma-x-x/markdown-it-embed @license ISC */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.markdownitIns = factory());
})(this, (function () { 'use strict';

    var suffixes = [
    	".3dm",
    	".3dmf",
    	".a",
    	".aab",
    	".aam",
    	".aas",
    	".abc",
    	".acgi",
    	".afl",
    	".ai",
    	".aif",
    	".aif",
    	".aifc",
    	".aifc",
    	".aiff",
    	".aiff",
    	".aim",
    	".aip",
    	".ani",
    	".aos",
    	".aps",
    	".arc",
    	".arj",
    	".arj",
    	".art",
    	".asf",
    	".asm",
    	".asp",
    	".asx",
    	".asx",
    	".asx",
    	".au",
    	".au",
    	".avi",
    	".avi",
    	".avi",
    	".avi",
    	".avs",
    	".bcpio",
    	".bin",
    	".bin",
    	".bin",
    	".bin",
    	".bin",
    	".bm",
    	".bmp",
    	".bmp",
    	".boo",
    	".book",
    	".boz",
    	".bsh",
    	".bz",
    	".bz2",
    	".c",
    	".c",
    	".c++",
    	".cat",
    	".cc",
    	".cc",
    	".ccad",
    	".cco",
    	".cdf",
    	".cdf",
    	".cdf",
    	".cer",
    	".cer",
    	".cha",
    	".chat",
    	".class",
    	".class",
    	".class",
    	".com",
    	".com",
    	".conf",
    	".cpio",
    	".cpp",
    	".cpt",
    	".cpt",
    	".cpt",
    	".crl",
    	".crl",
    	".crt",
    	".crt",
    	".crt",
    	".csh",
    	".csh",
    	".css",
    	".css",
    	".cxx",
    	".dcr",
    	".deepv",
    	".def",
    	".der",
    	".dif",
    	".dir",
    	".dl",
    	".dl",
    	".doc",
    	".dot",
    	".dp",
    	".drw",
    	".dump",
    	".dv",
    	".dvi",
    	".dwf",
    	".dwf",
    	".dwg",
    	".dwg",
    	".dwg",
    	".dxf",
    	".dxf",
    	".dxf",
    	".dxr",
    	".el",
    	".elc",
    	".elc",
    	".env",
    	".eps",
    	".es",
    	".etx",
    	".evy",
    	".evy",
    	".exe",
    	".f",
    	".f",
    	".f77",
    	".f90",
    	".f90",
    	".fdf",
    	".fif",
    	".fif",
    	".fli",
    	".fli",
    	".flo",
    	".flx",
    	".fmf",
    	".for",
    	".for",
    	".fpx",
    	".fpx",
    	".frl",
    	".funk",
    	".g",
    	".g3",
    	".gif",
    	".gl",
    	".gl",
    	".gsd",
    	".gsm",
    	".gsp",
    	".gss",
    	".gtar",
    	".gz",
    	".gz",
    	".gzip",
    	".gzip",
    	".h",
    	".h",
    	".hdf",
    	".help",
    	".hgl",
    	".hh",
    	".hh",
    	".hlb",
    	".hlp",
    	".hlp",
    	".hlp",
    	".hpg",
    	".hpgl",
    	".hqx",
    	".hqx",
    	".hqx",
    	".hqx",
    	".hqx",
    	".hqx",
    	".hta",
    	".htc",
    	".htm",
    	".html",
    	".htmls",
    	".htt",
    	".htx",
    	".ice",
    	".ico",
    	".idc",
    	".ief",
    	".iefs",
    	".iges",
    	".iges",
    	".igs",
    	".igs",
    	".ima",
    	".imap",
    	".inf",
    	".ins",
    	".ip",
    	".isu",
    	".it",
    	".iv",
    	".ivr",
    	".ivy",
    	".jam",
    	".jav",
    	".jav",
    	".java",
    	".java",
    	".jcm",
    	".jfif",
    	".jfif",
    	".jfif-tbnl",
    	".jpe",
    	".jpe",
    	".jpeg",
    	".jpeg",
    	".jpg",
    	".jpg",
    	".jps",
    	".js",
    	".js",
    	".js",
    	".js",
    	".js",
    	".jut",
    	".kar",
    	".kar",
    	".ksh",
    	".ksh",
    	".la",
    	".la",
    	".lam",
    	".latex",
    	".lha",
    	".lha",
    	".lha",
    	".lhx",
    	".list",
    	".lma",
    	".lma",
    	".log",
    	".lsp",
    	".lsp",
    	".lst",
    	".lsx",
    	".ltx",
    	".lzh",
    	".lzh",
    	".lzx",
    	".lzx",
    	".lzx",
    	".m",
    	".m",
    	".m1v",
    	".m2a",
    	".m2v",
    	".m3u",
    	".man",
    	".map",
    	".mar",
    	".mbd",
    	".mc$",
    	".mcd",
    	".mcd",
    	".mcf",
    	".mcf",
    	".mcp",
    	".me",
    	".mht",
    	".mhtml",
    	".mid",
    	".mid",
    	".mid",
    	".mid",
    	".mid",
    	".mid",
    	".midi",
    	".midi",
    	".midi",
    	".midi",
    	".midi",
    	".midi",
    	".mif",
    	".mif",
    	".mime",
    	".mime",
    	".mjf",
    	".mjpg",
    	".mm",
    	".mm",
    	".mme",
    	".mod",
    	".mod",
    	".moov",
    	".mov",
    	".movie",
    	".mp2",
    	".mp2",
    	".mp2",
    	".mp2",
    	".mp2",
    	".mp3",
    	".mp3",
    	".mp3",
    	".mp3",
    	".mpa",
    	".mpa",
    	".mpc",
    	".mpe",
    	".mpeg",
    	".mpg",
    	".mpg",
    	".mpga",
    	".mpp",
    	".mpt",
    	".mpv",
    	".mpx",
    	".mrc",
    	".ms",
    	".mv",
    	".my",
    	".mzz",
    	".nap",
    	".naplps",
    	".nc",
    	".ncm",
    	".nif",
    	".niff",
    	".nix",
    	".nsc",
    	".nvd",
    	".o",
    	".oda",
    	".omc",
    	".omcd",
    	".omcr",
    	".p",
    	".p10",
    	".p10",
    	".p12",
    	".p12",
    	".p7a",
    	".p7c",
    	".p7c",
    	".p7m",
    	".p7m",
    	".p7r",
    	".p7s",
    	".part",
    	".pas",
    	".pbm",
    	".pcl",
    	".pcl",
    	".pct",
    	".pcx",
    	".pdb",
    	".pdf",
    	".pfunk",
    	".pfunk",
    	".pgm",
    	".pgm",
    	".pic",
    	".pict",
    	".pkg",
    	".pko",
    	".pl",
    	".pl",
    	".plx",
    	".pm",
    	".pm",
    	".pm4",
    	".pm5",
    	".png",
    	".pnm",
    	".pnm",
    	".pot",
    	".pot",
    	".pov",
    	".ppa",
    	".ppm",
    	".pps",
    	".pps",
    	".ppt",
    	".ppt",
    	".ppt",
    	".ppt",
    	".ppz",
    	".pre",
    	".prt",
    	".ps",
    	".psd",
    	".pvu",
    	".pwz",
    	".py",
    	".pyc",
    	".qcp",
    	".qd3",
    	".qd3d",
    	".qif",
    	".qt",
    	".qtc",
    	".qti",
    	".qtif",
    	".ra",
    	".ra",
    	".ra",
    	".ram",
    	".ras",
    	".ras",
    	".ras",
    	".rast",
    	".rexx",
    	".rf",
    	".rgb",
    	".rm",
    	".rm",
    	".rmi",
    	".rmm",
    	".rmp",
    	".rmp",
    	".rng",
    	".rng",
    	".rnx",
    	".roff",
    	".rp",
    	".rpm",
    	".rt",
    	".rt",
    	".rtf",
    	".rtf",
    	".rtf",
    	".rtx",
    	".rtx",
    	".rv",
    	".s",
    	".s3m",
    	".saveme",
    	".sbk",
    	".scm",
    	".scm",
    	".scm",
    	".scm",
    	".sdml",
    	".sdp",
    	".sdp",
    	".sdr",
    	".sea",
    	".sea",
    	".set",
    	".sgm",
    	".sgm",
    	".sgml",
    	".sgml",
    	".sh",
    	".sh",
    	".sh",
    	".sh",
    	".shar",
    	".shar",
    	".shtml",
    	".shtml",
    	".sid",
    	".sit",
    	".sit",
    	".skd",
    	".skm",
    	".skp",
    	".skt",
    	".sl",
    	".smi",
    	".smil",
    	".snd",
    	".snd",
    	".sol",
    	".spc",
    	".spc",
    	".spl",
    	".spr",
    	".sprite",
    	".src",
    	".ssi",
    	".ssm",
    	".sst",
    	".step",
    	".stl",
    	".stl",
    	".stl",
    	".stp",
    	".sv4cpio",
    	".sv4crc",
    	".svf",
    	".svf",
    	".svr",
    	".svr",
    	".swf",
    	".t",
    	".talk",
    	".tar",
    	".tbk",
    	".tbk",
    	".tcl",
    	".tcl",
    	".tcsh",
    	".tex",
    	".texi",
    	".texinfo",
    	".text",
    	".text",
    	".tgz",
    	".tgz",
    	".tif",
    	".tif",
    	".tiff",
    	".tiff",
    	".tr",
    	".tsi",
    	".tsp",
    	".tsp",
    	".tsv",
    	".turbot",
    	".txt",
    	".uil",
    	".uni",
    	".unis",
    	".unv",
    	".uri",
    	".uris",
    	".ustar",
    	".ustar",
    	".uu",
    	".uu",
    	".uue",
    	".vcd",
    	".vcs",
    	".vda",
    	".vdo",
    	".vew",
    	".viv",
    	".viv",
    	".vivo",
    	".vivo",
    	".vmd",
    	".vmf",
    	".voc",
    	".voc",
    	".vos",
    	".vox",
    	".vqe",
    	".vqf",
    	".vql",
    	".vrml",
    	".vrml",
    	".vrml",
    	".vrt",
    	".vsd",
    	".vst",
    	".vsw",
    	".w60",
    	".w61",
    	".w6w",
    	".wav",
    	".wav",
    	".wb1",
    	".wbmp",
    	".web",
    	".wiz",
    	".wk1",
    	".wmf",
    	".wml",
    	".wmlc",
    	".wmls",
    	".wmlsc",
    	".word",
    	".wp",
    	".wp5",
    	".wp5",
    	".wp6",
    	".wpd",
    	".wpd",
    	".wq1",
    	".wri",
    	".wri",
    	".wrl",
    	".wrl",
    	".wrl",
    	".wrz",
    	".wrz",
    	".wsc",
    	".wsrc",
    	".wtk",
    	".xbm",
    	".xbm",
    	".xbm",
    	".xdr",
    	".xgz",
    	".xif",
    	".xl",
    	".xla",
    	".xla",
    	".xla",
    	".xlb",
    	".xlb",
    	".xlb",
    	".xlc",
    	".xlc",
    	".xlc",
    	".xld",
    	".xld",
    	".xlk",
    	".xlk",
    	".xll",
    	".xll",
    	".xll",
    	".xlm",
    	".xlm",
    	".xlm",
    	".xls",
    	".xls",
    	".xls",
    	".xls",
    	".xlt",
    	".xlt",
    	".xlv",
    	".xlv",
    	".xlw",
    	".xlw",
    	".xlw",
    	".xlw",
    	".xm",
    	".xml",
    	".xml",
    	".xmz",
    	".xpix",
    	".xpm",
    	".xpm",
    	".x-png",
    	".xsr",
    	".xwd",
    	".xwd",
    	".xyz",
    	".z",
    	".z",
    	".zip",
    	".zip",
    	".zip",
    	".zip",
    	".zoo",
    	".zsh"
    ];

    var subtypeMap = {
    	".3dm": "x-world/x-3dmf",
    	".3dmf": "x-world/x-3dmf",
    	".a": "application/octet-stream",
    	".aab": "application/x-authorware-bin",
    	".aam": "application/x-authorware-map",
    	".aas": "application/x-authorware-seg",
    	".abc": "text/vnd.abc",
    	".acgi": "text/html",
    	".afl": "video/animaflex",
    	".ai": "application/postscript",
    	".aif": "audio/x-aiff",
    	".aifc": "audio/x-aiff",
    	".aiff": "audio/x-aiff",
    	".aim": "application/x-aim",
    	".aip": "text/x-audiosoft-intra",
    	".ani": "application/x-navi-animation",
    	".aos": "application/x-nokia-9000-communicator-add-on-software",
    	".aps": "application/mime",
    	".arc": "application/octet-stream",
    	".arj": "application/octet-stream",
    	".art": "image/x-jg",
    	".asf": "video/x-ms-asf",
    	".asm": "text/x-asm",
    	".asp": "text/asp",
    	".asx": "video/x-ms-asf-plugin",
    	".au": "audio/x-au",
    	".avi": "video/x-msvideo",
    	".avs": "video/avs-video",
    	".bcpio": "application/x-bcpio",
    	".bin": "application/x-macbinary",
    	".bm": "image/bmp",
    	".bmp": "image/x-windows-bmp",
    	".boo": "application/book",
    	".book": "application/book",
    	".boz": "application/x-bzip2",
    	".bsh": "application/x-bsh",
    	".bz": "application/x-bzip",
    	".bz2": "application/x-bzip2",
    	".c": "text/x-c",
    	".c++": "text/plain",
    	".cat": "application/vnd.ms-pki.seccat",
    	".cc": "text/x-c",
    	".ccad": "application/clariscad",
    	".cco": "application/x-cocoa",
    	".cdf": "application/x-netcdf",
    	".cer": "application/x-x509-ca-cert",
    	".cha": "application/x-chat",
    	".chat": "application/x-chat",
    	".class": "application/x-java-class",
    	".com": "text/plain",
    	".conf": "text/plain",
    	".cpio": "application/x-cpio",
    	".cpp": "text/x-c",
    	".cpt": "application/x-cpt",
    	".crl": "application/pkix-crl",
    	".crt": "application/x-x509-user-cert",
    	".csh": "text/x-script.csh",
    	".css": "text/css",
    	".cxx": "text/plain",
    	".dcr": "application/x-director",
    	".deepv": "application/x-deepv",
    	".def": "text/plain",
    	".der": "application/x-x509-ca-cert",
    	".dif": "video/x-dv",
    	".dir": "application/x-director",
    	".dl": "video/x-dl",
    	".doc": "application/msword",
    	".dot": "application/msword",
    	".dp": "application/commonground",
    	".drw": "application/drafting",
    	".dump": "application/octet-stream",
    	".dv": "video/x-dv",
    	".dvi": "application/x-dvi",
    	".dwf": "model/vnd.dwf",
    	".dwg": "image/x-dwg",
    	".dxf": "image/x-dwg",
    	".dxr": "application/x-director",
    	".el": "text/x-script.elisp",
    	".elc": "application/x-elc",
    	".env": "application/x-envoy",
    	".eps": "application/postscript",
    	".es": "application/x-esrehber",
    	".etx": "text/x-setext",
    	".evy": "application/x-envoy",
    	".exe": "application/octet-stream",
    	".f": "text/x-fortran",
    	".f77": "text/x-fortran",
    	".f90": "text/x-fortran",
    	".fdf": "application/vnd.fdf",
    	".fif": "image/fif",
    	".fli": "video/x-fli",
    	".flo": "image/florian",
    	".flx": "text/vnd.fmi.flexstor",
    	".fmf": "video/x-atomic3d-feature",
    	".for": "text/x-fortran",
    	".fpx": "image/vnd.net-fpx",
    	".frl": "application/freeloader",
    	".funk": "audio/make",
    	".g": "text/plain",
    	".g3": "image/g3fax",
    	".gif": "image/gif",
    	".gl": "video/x-gl",
    	".gsd": "audio/x-gsm",
    	".gsm": "audio/x-gsm",
    	".gsp": "application/x-gsp",
    	".gss": "application/x-gss",
    	".gtar": "application/x-gtar",
    	".gz": "application/x-gzip",
    	".gzip": "multipart/x-gzip",
    	".h": "text/x-h",
    	".hdf": "application/x-hdf",
    	".help": "application/x-helpfile",
    	".hgl": "application/vnd.hp-hpgl",
    	".hh": "text/x-h",
    	".hlb": "text/x-script",
    	".hlp": "application/x-winhelp",
    	".hpg": "application/vnd.hp-hpgl",
    	".hpgl": "application/vnd.hp-hpgl",
    	".hqx": "application/x-mac-binhex40",
    	".hta": "application/hta",
    	".htc": "text/x-component",
    	".htm": "text/html",
    	".html": "text/html",
    	".htmls": "text/html",
    	".htt": "text/webviewhtml",
    	".htx": "text/html",
    	".ice": "x-conference/x-cooltalk",
    	".ico": "image/x-icon",
    	".idc": "text/plain",
    	".ief": "image/ief",
    	".iefs": "image/ief",
    	".iges": "model/iges",
    	".igs": "model/iges",
    	".ima": "application/x-ima",
    	".imap": "application/x-httpd-imap",
    	".inf": "application/inf",
    	".ins": "application/x-internett-signup",
    	".ip": "application/x-ip2",
    	".isu": "video/x-isvideo",
    	".it": "audio/it",
    	".iv": "application/x-inventor",
    	".ivr": "i-world/i-vrml",
    	".ivy": "application/x-livescreen",
    	".jam": "audio/x-jam",
    	".jav": "text/x-java-source",
    	".java": "text/x-java-source",
    	".jcm": "application/x-java-commerce",
    	".jfif": "image/pjpeg",
    	".jfif-tbnl": "image/jpeg",
    	".jpe": "image/pjpeg",
    	".jpeg": "image/pjpeg",
    	".jpg": "image/pjpeg",
    	".jps": "image/x-jps",
    	".js": "text/ecmascript",
    	".jut": "image/jutvision",
    	".kar": "music/x-karaoke",
    	".ksh": "text/x-script.ksh",
    	".la": "audio/x-nspaudio",
    	".lam": "audio/x-liveaudio",
    	".latex": "application/x-latex",
    	".lha": "application/x-lha",
    	".lhx": "application/octet-stream",
    	".list": "text/plain",
    	".lma": "audio/x-nspaudio",
    	".log": "text/plain",
    	".lsp": "text/x-script.lisp",
    	".lst": "text/plain",
    	".lsx": "text/x-la-asf",
    	".ltx": "application/x-latex",
    	".lzh": "application/x-lzh",
    	".lzx": "application/x-lzx",
    	".m": "text/x-m",
    	".m1v": "video/mpeg",
    	".m2a": "audio/mpeg",
    	".m2v": "video/mpeg",
    	".m3u": "audio/x-mpequrl",
    	".man": "application/x-troff-man",
    	".map": "application/x-navimap",
    	".mar": "text/plain",
    	".mbd": "application/mbedlet",
    	".mc$": "application/x-magic-cap-package-1.0",
    	".mcd": "application/x-mathcad",
    	".mcf": "text/mcf",
    	".mcp": "application/netmc",
    	".me": "application/x-troff-me",
    	".mht": "message/rfc822",
    	".mhtml": "message/rfc822",
    	".mid": "x-music/x-midi",
    	".midi": "x-music/x-midi",
    	".mif": "application/x-mif",
    	".mime": "www/mime",
    	".mjf": "audio/x-vnd.audioexplosion.mjuicemediafile",
    	".mjpg": "video/x-motion-jpeg",
    	".mm": "application/x-meme",
    	".mme": "application/base64",
    	".mod": "audio/x-mod",
    	".moov": "video/quicktime",
    	".mov": "video/quicktime",
    	".movie": "video/x-sgi-movie",
    	".mp2": "video/x-mpeq2a",
    	".mp3": "video/x-mpeg",
    	".mpa": "video/mpeg",
    	".mpc": "application/x-project",
    	".mpe": "video/mpeg",
    	".mpeg": "video/mpeg",
    	".mpg": "video/mpeg",
    	".mpga": "audio/mpeg",
    	".mpp": "application/vnd.ms-project",
    	".mpt": "application/x-project",
    	".mpv": "application/x-project",
    	".mpx": "application/x-project",
    	".mrc": "application/marc",
    	".ms": "application/x-troff-ms",
    	".mv": "video/x-sgi-movie",
    	".my": "audio/make",
    	".mzz": "application/x-vnd.audioexplosion.mzz",
    	".nap": "image/naplps",
    	".naplps": "image/naplps",
    	".nc": "application/x-netcdf",
    	".ncm": "application/vnd.nokia.configuration-message",
    	".nif": "image/x-niff",
    	".niff": "image/x-niff",
    	".nix": "application/x-mix-transfer",
    	".nsc": "application/x-conference",
    	".nvd": "application/x-navidoc",
    	".o": "application/octet-stream",
    	".oda": "application/oda",
    	".omc": "application/x-omc",
    	".omcd": "application/x-omcdatamaker",
    	".omcr": "application/x-omcregerator",
    	".p": "text/x-pascal",
    	".p10": "application/x-pkcs10",
    	".p12": "application/x-pkcs12",
    	".p7a": "application/x-pkcs7-signature",
    	".p7c": "application/x-pkcs7-mime",
    	".p7m": "application/x-pkcs7-mime",
    	".p7r": "application/x-pkcs7-certreqresp",
    	".p7s": "application/pkcs7-signature",
    	".part": "application/pro_eng",
    	".pas": "text/pascal",
    	".pbm": "image/x-portable-bitmap",
    	".pcl": "application/x-pcl",
    	".pct": "image/x-pict",
    	".pcx": "image/x-pcx",
    	".pdb": "chemical/x-pdb",
    	".pdf": "application/pdf",
    	".pfunk": "audio/make.my.funk",
    	".pgm": "image/x-portable-greymap",
    	".pic": "image/pict",
    	".pict": "image/pict",
    	".pkg": "application/x-newton-compatible-pkg",
    	".pko": "application/vnd.ms-pki.pko",
    	".pl": "text/x-script.perl",
    	".plx": "application/x-pixclscript",
    	".pm": "text/x-script.perl-module",
    	".pm4": "application/x-pagemaker",
    	".pm5": "application/x-pagemaker",
    	".png": "image/png",
    	".pnm": "image/x-portable-anymap",
    	".pot": "application/vnd.ms-powerpoint",
    	".pov": "model/x-pov",
    	".ppa": "application/vnd.ms-powerpoint",
    	".ppm": "image/x-portable-pixmap",
    	".pps": "application/vnd.ms-powerpoint",
    	".ppt": "application/x-mspowerpoint",
    	".ppz": "application/mspowerpoint",
    	".pre": "application/x-freelance",
    	".prt": "application/pro_eng",
    	".ps": "application/postscript",
    	".psd": "application/octet-stream",
    	".pvu": "paleovu/x-pv",
    	".pwz": "application/vnd.ms-powerpoint",
    	".py": "text/x-script.phyton",
    	".pyc": "application/x-bytecode.python",
    	".qcp": "audio/vnd.qcelp",
    	".qd3": "x-world/x-3dmf",
    	".qd3d": "x-world/x-3dmf",
    	".qif": "image/x-quicktime",
    	".qt": "video/quicktime",
    	".qtc": "video/x-qtc",
    	".qti": "image/x-quicktime",
    	".qtif": "image/x-quicktime",
    	".ra": "audio/x-realaudio",
    	".ram": "audio/x-pn-realaudio",
    	".ras": "image/x-cmu-raster",
    	".rast": "image/cmu-raster",
    	".rexx": "text/x-script.rexx",
    	".rf": "image/vnd.rn-realflash",
    	".rgb": "image/x-rgb",
    	".rm": "audio/x-pn-realaudio",
    	".rmi": "audio/mid",
    	".rmm": "audio/x-pn-realaudio",
    	".rmp": "audio/x-pn-realaudio-plugin",
    	".rng": "application/vnd.nokia.ringing-tone",
    	".rnx": "application/vnd.rn-realplayer",
    	".roff": "application/x-troff",
    	".rp": "image/vnd.rn-realpix",
    	".rpm": "audio/x-pn-realaudio-plugin",
    	".rt": "text/vnd.rn-realtext",
    	".rtf": "text/richtext",
    	".rtx": "text/richtext",
    	".rv": "video/vnd.rn-realvideo",
    	".s": "text/x-asm",
    	".s3m": "audio/s3m",
    	".saveme": "application/octet-stream",
    	".sbk": "application/x-tbook",
    	".scm": "video/x-scm",
    	".sdml": "text/plain",
    	".sdp": "application/x-sdp",
    	".sdr": "application/sounder",
    	".sea": "application/x-sea",
    	".set": "application/set",
    	".sgm": "text/x-sgml",
    	".sgml": "text/x-sgml",
    	".sh": "text/x-script.sh",
    	".shar": "application/x-shar",
    	".shtml": "text/x-server-parsed-html",
    	".sid": "audio/x-psid",
    	".sit": "application/x-stuffit",
    	".skd": "application/x-koan",
    	".skm": "application/x-koan",
    	".skp": "application/x-koan",
    	".skt": "application/x-koan",
    	".sl": "application/x-seelogo",
    	".smi": "application/smil",
    	".smil": "application/smil",
    	".snd": "audio/x-adpcm",
    	".sol": "application/solids",
    	".spc": "text/x-speech",
    	".spl": "application/futuresplash",
    	".spr": "application/x-sprite",
    	".sprite": "application/x-sprite",
    	".src": "application/x-wais-source",
    	".ssi": "text/x-server-parsed-html",
    	".ssm": "application/streamingmedia",
    	".sst": "application/vnd.ms-pki.certstore",
    	".step": "application/step",
    	".stl": "application/x-navistyle",
    	".stp": "application/step",
    	".sv4cpio": "application/x-sv4cpio",
    	".sv4crc": "application/x-sv4crc",
    	".svf": "image/x-dwg",
    	".svr": "x-world/x-svr",
    	".swf": "application/x-shockwave-flash",
    	".t": "application/x-troff",
    	".talk": "text/x-speech",
    	".tar": "application/x-tar",
    	".tbk": "application/x-tbook",
    	".tcl": "text/x-script.tcl",
    	".tcsh": "text/x-script.tcsh",
    	".tex": "application/x-tex",
    	".texi": "application/x-texinfo",
    	".texinfo": "application/x-texinfo",
    	".text": "text/plain",
    	".tgz": "application/x-compressed",
    	".tif": "image/x-tiff",
    	".tiff": "image/x-tiff",
    	".tr": "application/x-troff",
    	".tsi": "audio/tsp-audio",
    	".tsp": "audio/tsplayer",
    	".tsv": "text/tab-separated-values",
    	".turbot": "image/florian",
    	".txt": "text/plain",
    	".uil": "text/x-uil",
    	".uni": "text/uri-list",
    	".unis": "text/uri-list",
    	".unv": "application/i-deas",
    	".uri": "text/uri-list",
    	".uris": "text/uri-list",
    	".ustar": "multipart/x-ustar",
    	".uu": "text/x-uuencode",
    	".uue": "text/x-uuencode",
    	".vcd": "application/x-cdlink",
    	".vcs": "text/x-vcalendar",
    	".vda": "application/vda",
    	".vdo": "video/vdo",
    	".vew": "application/groupwise",
    	".viv": "video/vnd.vivo",
    	".vivo": "video/vnd.vivo",
    	".vmd": "application/vocaltec-media-desc",
    	".vmf": "application/vocaltec-media-file",
    	".voc": "audio/x-voc",
    	".vos": "video/vosaic",
    	".vox": "audio/voxware",
    	".vqe": "audio/x-twinvq-plugin",
    	".vqf": "audio/x-twinvq",
    	".vql": "audio/x-twinvq-plugin",
    	".vrml": "x-world/x-vrml",
    	".vrt": "x-world/x-vrt",
    	".vsd": "application/x-visio",
    	".vst": "application/x-visio",
    	".vsw": "application/x-visio",
    	".w60": "application/wordperfect6.0",
    	".w61": "application/wordperfect6.1",
    	".w6w": "application/msword",
    	".wav": "audio/x-wav",
    	".wb1": "application/x-qpro",
    	".wbmp": "image/vnd.wap.wbmp",
    	".web": "application/vnd.xara",
    	".wiz": "application/msword",
    	".wk1": "application/x-123",
    	".wmf": "windows/metafile",
    	".wml": "text/vnd.wap.wml",
    	".wmlc": "application/vnd.wap.wmlc",
    	".wmls": "text/vnd.wap.wmlscript",
    	".wmlsc": "application/vnd.wap.wmlscriptc",
    	".word": "application/msword",
    	".wp": "application/wordperfect",
    	".wp5": "application/wordperfect6.0",
    	".wp6": "application/wordperfect",
    	".wpd": "application/x-wpwin",
    	".wq1": "application/x-lotus",
    	".wri": "application/x-wri",
    	".wrl": "x-world/x-vrml",
    	".wrz": "x-world/x-vrml",
    	".wsc": "text/scriplet",
    	".wsrc": "application/x-wais-source",
    	".wtk": "application/x-wintalk",
    	".xbm": "image/xbm",
    	".xdr": "video/x-amt-demorun",
    	".xgz": "xgl/drawing",
    	".xif": "image/vnd.xiff",
    	".xl": "application/excel",
    	".xla": "application/x-msexcel",
    	".xlb": "application/x-excel",
    	".xlc": "application/x-excel",
    	".xld": "application/x-excel",
    	".xlk": "application/x-excel",
    	".xll": "application/x-excel",
    	".xlm": "application/x-excel",
    	".xls": "application/x-msexcel",
    	".xlt": "application/x-excel",
    	".xlv": "application/x-excel",
    	".xlw": "application/x-msexcel",
    	".xm": "audio/xm",
    	".xml": "text/xml",
    	".xmz": "xgl/movie",
    	".xpix": "application/x-vnd.ls-xpix",
    	".xpm": "image/xpm",
    	".x-png": "image/png",
    	".xsr": "video/x-amt-showrun",
    	".xwd": "image/x-xwindowdump",
    	".xyz": "chemical/x-pdb",
    	".z": "application/x-compressed",
    	".zip": "multipart/x-zip",
    	".zoo": "application/octet-stream",
    	".zsh": "text/x-script.zsh"
    };

    /* eslint complexity: "off" */



    /**
     * A minimalist `markdown-it` plugin for parsing video/audio references inside
     * markdown image syntax as `<video>` / `<audio>` tags.
     *
     * @namespace HTML5Media
     */

    // We can only detect video/audio files from the extension in the URL.
    // We ignore MP1 and MP2 (not in active use) and default to video for ambiguous
    // extensions (MPG, MP4)
    const validAudioExtensions = ["aac", "m4a", "mp3", "oga", "ogg", "wav"];
    const validVideoExtensions = ["mp4", "m4v", "ogv", "webm", "mpg", "mpeg"];
    const embedExtensions = suffixes;

    /**
     * @property {Object} messages
     * @property {Object} messages.languageCode
     *  a set of messages identified with a language code, typically an ISO639 code
     * @property {String} messages.languageCode.messageKey
     *  an individual translation of a message to that language, identified with a
     *  message key
     * @typedef {Object} MessagesObj
     */
    let messages = {
      en: {
        "html5 video not supported":
          "Your browser does not support playing HTML5 video.",
        "html5 audio not supported":
          "Your browser does not support playing HTML5 audio.",
        "html5 media fallback link":
          'You can <a href="%s" download>download the file</a> instead.',
        "html5 media description": "Here is a description of the content: %s",
      },
    };

    /**
     * You can override this function using options.translateFn.
     *
     * @param {String} language
     *  a language code, typically an ISO 639-[1-3] code.
     * @param {String} messageKey
     *  an identifier for the message, typically a short descriptive text
     * @param {String[]} messageParams
     *  Strings to be substituted into the message using some pattern, e.g., %s or
     *  %1$s, %2$s. By default we only use a simple %s pattern.
     * @returns {String}
     *  the translation to use
     * @memberof HTML5Media
     */
    let translate = function (language, messageKey, messageParams) {
      // Revert back to English default if no message object, or no translation
      // for this language
      if (!messages[language] || !messages[language][messageKey]) language = "en";

      if (!messages[language]) return "";

      let message = messages[language][messageKey] || "";

      if (messageParams)
        for (let param of messageParams) message = message.replace("%s", param);

      return message;
    };

    /**
     * A fork of the built-in image tokenizer which guesses video/audio files based
     * on their extension, and tokenizes them accordingly.
     *
     * @param {Object} state
     *  Markdown-It state
     * @param {Boolean} silent
     *  if true, only validate, don't tokenize
     * @param {MarkdownIt} md
     *  instance of Markdown-It used for utility functions
     * @returns {Boolean}
     * @memberof HTML5Media
     */
    function tokenizeImagesAndMedia(state, silent, md, sustainExtensions, fileExt) {
      let attrs,
        code,
        content,
        label,
        labelEnd,
        labelStart,
        pos,
        ref,
        res,
        title,
        token,
        tokens,
        start;
      let href = "",
        oldPos = state.pos,
        max = state.posMax;

      // Exclamation mark followed by open square bracket - ![ - otherwise abort
      if (
        state.src.charCodeAt(state.pos) !== 0x21 ||
        state.src.charCodeAt(state.pos + 1) !== 0x5b
      )
        return false;

      labelStart = state.pos + 2;
      labelEnd = state.md.helpers.parseLinkLabel(state, state.pos + 1, false);

      // Parser failed to find ']', so it's not a valid link
      if (labelEnd < 0) return false;

      pos = labelEnd + 1;
      if (pos < max && state.src.charCodeAt(pos) === 0x28) {
        // Parenthesis: (
        //
        // Inline link
        //

        // [link](  <href>  "title"  )
        //        ^^ skipping these spaces
        pos++;
        for (; pos < max; pos++) {
          code = state.src.charCodeAt(pos);
          if (!md.utils.isSpace(code) && code !== 0x0a)
            // LF \n
            break;
        }
        if (pos >= max) return false;

        // [link](  <href>  "title"  )
        //          ^^^^^^ parsing link destination
        start = pos;
        res = state.md.helpers.parseLinkDestination(state.src, pos, state.posMax);
        if (res.ok) {
          href = state.md.normalizeLink(res.str);
          if (state.md.validateLink(href)) {
            pos = res.pos;
          } else {
            href = "";
          }
        }

        // [link](  <href>  "title"  )
        //                ^^ skipping these spaces
        start = pos;
        for (; pos < max; pos++) {
          code = state.src.charCodeAt(pos);
          if (!md.utils.isSpace(code) && code !== 0x0a) break;
        }

        // [link](  <href>  "title"  )
        //                  ^^^^^^^ parsing link title
        res = state.md.helpers.parseLinkTitle(state.src, pos, state.posMax);
        if (pos < max && start !== pos && res.ok) {
          title = res.str;
          pos = res.pos;

          // [link](  <href>  "title"  )
          //                         ^^ skipping these spaces
          for (; pos < max; pos++) {
            code = state.src.charCodeAt(pos);
            if (!md.utils.isSpace(code) && code !== 0x0a) break;
          }
        } else {
          title = "";
        }

        if (pos >= max || state.src.charCodeAt(pos) !== 0x29) {
          // Parenthesis: )
          state.pos = oldPos;
          return false;
        }
        pos++;
      } else {
        //
        // Link reference
        //
        if (typeof state.env.references === "undefined") return false;

        if (pos < max && state.src.charCodeAt(pos) === 0x5b) {
          // Bracket: [
          start = pos + 1;
          pos = state.md.helpers.parseLinkLabel(state, pos);
          if (pos >= 0) {
            label = state.src.slice(start, pos++);
          } else {
            pos = labelEnd + 1;
          }
        } else {
          pos = labelEnd + 1;
        }

        // covers label === '' and label === undefined
        // (collapsed reference link and shortcut reference link respectively)
        if (!label) label = state.src.slice(labelStart, labelEnd);

        ref = state.env.references[md.utils.normalizeReference(label)];
        if (!ref) {
          state.pos = oldPos;
          return false;
        }
        href = ref.href;
        title = ref.title;
      }

      state.pos = pos;
      state.posMax = max;

      if (silent) return true;

      // We found the end of the link, and know for a fact it's a valid link;
      // so all that's left to do is to call tokenizer.
      content = state.src.slice(labelStart, labelEnd);

      state.md.inline.parse(content, state.md, state.env, (tokens = []));
      const extensionMatch = url.match(/\.([^/.]+)$/);
      if (extensionMatch === null) return "image";
      const extension = extensionMatch[1];
      fileExt.url = href;
      fileExt.ext = extension;
      const mediaType = guessMediaType(href, sustainExtensions);
      const tag = mediaType == "image" ? "img" : mediaType;

      token = state.push(mediaType, tag, 0);
      token.attrs = attrs = [["src", href]];
      if (mediaType == "image") attrs.push(["alt", ""]);
      token.children = tokens;
      token.content = content;

      if (title) attrs.push(["title", title]);

      state.pos = pos;
      state.posMax = max;
      return true;
    }

    /**
     * Guess the media type represented by a URL based on the file extension,
     * if any
     *
     * @param {String} url
     *  any valid URL
     * @returns {String}
     *  a type identifier: 'image' (default for all unrecognized URLs), 'audio'
     *  or 'video'
     * @memberof HTML5Media
     */
    function guessMediaType(url, sustainExtensions) {
      const extensionMatch = url.match(/\.([^/.]+)$/);
      if (extensionMatch === null) return "image";
      const extension = extensionMatch[1];
      if (validAudioExtensions.indexOf(extension.toLowerCase()) != -1)
        return "audio";
      else if (validVideoExtensions.indexOf(extension.toLowerCase()) != -1)
        return "video";
      else if (
        sustainExtensions.indexOf(extension.toLowerCase()) != -1 &&
        embedExtensions.includes(extension.toLowerCase()) != -1
      )
        return "embed";
      else return "image";
    }

    /**
     * Render tokens of the video/audio type to HTML5 tags
     *
     * @param {Object} tokens
     *  token stream
     * @param {Number} idx
     *  which token are we rendering
     * @param {Object} options
     *  Markdown-It options, including this plugin's settings
     * @param {Object} env
     *  Markdown-It environment, potentially including language setting
     * @param {MarkdownIt} md
     *  instance used for utilities access
     * @returns {String}
     *  rendered token
     * @memberof HTML5Media
     */
    function renderMedia(tokens, idx, options, env, md, fileExt) {
      const token = tokens[idx];
      const type = token.type;
      if (type !== "video" && type !== "audio") return "";
      let attrs = options.html5Media[`${type}Attrs`].trim();
      if (attrs) attrs = " " + attrs;

      // We'll always have a URL for non-image media: they are detected by URL
      const url = token.attrs[token.attrIndex("src")][1];

      // Title is set like this: ![descriptive text](video.mp4 "title")
      const title =
        token.attrIndex("title") != -1
          ? ` title="${md.utils.escapeHtml(
          token.attrs[token.attrIndex("title")][1]
        )}"`
          : "";

      const fallbackText =
        translate(env.language, `html5 ${type} not supported`) +
        "\n" +
        translate(env.language, "html5 media fallback link", [url]);

      const description = token.content
        ? "\n" +
          translate(env.language, "html5 media description", [
            md.utils.escapeHtml(token.content),
          ])
        : "";

      return (
        `<${type} src="${url}"${title}${attrs} type="${subtypeMap[fileExt]}">\n` +
        `${fallbackText}${description}\n` +
        `</${type}>`
      );
    }

    /**
     * The main plugin function, exported as module.exports
     *
     * @param {MarkdownIt} md
     *  instance, automatically passed by md.use
     * @param {Object} [options]
     *  configuration
     * @param {String} [options.videoAttrs='controls class="html5-video-player"']
     *  attributes to include inside `<video>` tags
     * @param {String} [options.audioAttrs='controls class="html5-audio-player"']
     *  attributes to include inside `<audio>` tags
     * @param {MessagesObj} [options.messages=built-in messages]
     *  human-readable text that is part of the output
     * @memberof HTML5Media
     */
    function html5Media(md, options = {}) {
      if (options.messages) messages = options.messages;
      if (options.translateFn) translate = options.translateFn;

      const videoAttrs =
        options.videoAttrs !== undefined
          ? options.videoAttrs
          : 'controls class="html5-video-player"';
      const audioAttrs =
        options.audioAttrs !== undefined
          ? options.audioAttrs
          : 'controls class="html5-audio-player"';
      const sustainExtensions = options.embedExtensions || ["pdf"];

      let fileExt = { url: "", ext: "" };
      md.inline.ruler.at("image", (tokens, silent) =>
        tokenizeImagesAndMedia(tokens, silent, md, sustainExtensions, fileExt)
      );

      md.renderer.rules.video = md.renderer.rules.audio = (
        tokens,
        idx,
        opt,
        env
      ) => {
        opt.html5Media = {
          videoAttrs,
          audioAttrs,
        };
        return renderMedia(tokens, idx, opt, env, md, fileExt);
      };
    }

    var markdownItEmbed = {
      html5Media,
      messages, // For partial customization of messages
      guessMediaType,
    };

    return markdownItEmbed;

}));
