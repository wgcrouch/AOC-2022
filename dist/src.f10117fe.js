// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }
  return bundleURL;
}
function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }
  return '/';
}
function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/styles.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/day7/input.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.input = void 0;
exports.input = "$ cd /\n$ ls\ndir bjrbjh\ndir dppgvlh\ndir fcfqp\ndir mtbt\n95962 mzvb\ndir qtfmf\ndir sfjrs\ndir trtl\n$ cd bjrbjh\n$ ls\n80731 ctprm.bpc\n$ cd ..\n$ cd dppgvlh\n$ ls\n180122 bbjw\n210923 ctprm.bpc\n304465 hhg\ndir rtdnhb\n$ cd rtdnhb\n$ ls\n295880 ctprm.bpc\n$ cd ..\n$ cd ..\n$ cd fcfqp\n$ ls\ndir cts\ndir gjzdf\n61601 hqvhrpnv\n27922 hqvhrpnv.sgf\ndir hvsnr\n191405 mzvb\n263646 nbjp.fdm\ndir qmsllmtw\ndir rpvstz\ndir vbhh\ndir zwllwsq\n$ cd cts\n$ ls\n47983 nhzpb\n$ cd ..\n$ cd gjzdf\n$ ls\ndir fcfqp\n161310 vtrhs.mlh\n$ cd fcfqp\n$ ls\n145412 vcbnl\n$ cd ..\n$ cd ..\n$ cd hvsnr\n$ ls\ndir sftjlqbm\n$ cd sftjlqbm\n$ ls\n96517 qlgp\n$ cd ..\n$ cd ..\n$ cd qmsllmtw\n$ ls\n172998 hhg\n$ cd ..\n$ cd rpvstz\n$ ls\ndir nccm\ndir tsstr\n$ cd nccm\n$ ls\n181998 fcfqp\n$ cd ..\n$ cd tsstr\n$ ls\n258571 tsstr\n$ cd ..\n$ cd ..\n$ cd vbhh\n$ ls\n317169 ctprm.bpc\ndir rpvstz\ndir scsclh\n307868 vcbnl\n118337 zbltwtj\n$ cd rpvstz\n$ ls\ndir fcfqp\ndir nzg\ndir pmhprnbb\ndir szshbn\n$ cd fcfqp\n$ ls\ndir hrhftz\n$ cd hrhftz\n$ ls\n163301 vlrjptvv.fsr\n$ cd ..\n$ cd ..\n$ cd nzg\n$ ls\n230765 hhg\n235220 ptg.dbs\ndir qsbpc\n220737 vtttmhf.dcl\n$ cd qsbpc\n$ ls\n74559 hqvhrpnv.phh\n322306 tqb.wnl\n$ cd ..\n$ cd ..\n$ cd pmhprnbb\n$ ls\n293892 hhg\n$ cd ..\n$ cd szshbn\n$ ls\n303519 tsstr.pml\n$ cd ..\n$ cd ..\n$ cd scsclh\n$ ls\ndir rdznzm\n$ cd rdznzm\n$ ls\ndir hthgb\ndir vgfhz\n270085 zjlcp\n$ cd hthgb\n$ ls\n2762 gjgczrpm.hlw\n$ cd ..\n$ cd vgfhz\n$ ls\n160621 svplfhqh.rfr\n27592 vcbnl\n$ cd ..\n$ cd ..\n$ cd ..\n$ cd ..\n$ cd zwllwsq\n$ ls\ndir bmgpnmbt\ndir fbphbmbb\n217873 hhg\ndir hqvhrpnv\n$ cd bmgpnmbt\n$ ls\ndir fcfqp\n67327 hhg\n175579 qrgrtg.gtn\n185356 rdrtvn\n$ cd fcfqp\n$ ls\n16285 wqtnzw.cvj\n$ cd ..\n$ cd ..\n$ cd fbphbmbb\n$ ls\ndir fpnwjb\ndir hqvhrpnv\ndir jbm\ndir jsfscjd\ndir qmpbb\ndir sjhrg\ndir tsstr\n79487 tsstr.czd\n226172 tvdpb.vss\n$ cd fpnwjb\n$ ls\n78102 pgv.snz\n32886 wqtnzw.szw\n$ cd ..\n$ cd hqvhrpnv\n$ ls\n247435 ctprm.bpc\ndir drpffn\ndir fvqzjjhp\n312573 hqvhrpnv\n103964 swbvbwd\ndir szdbbtw\n129434 trjpn.htm\n33772 vgjnhmbc.hcr\ndir vvrhmrbs\n$ cd drpffn\n$ ls\n204660 wdhl.dgs\n$ cd ..\n$ cd fvqzjjhp\n$ ls\ndir qtc\n$ cd qtc\n$ ls\n74576 wgfffz\n$ cd ..\n$ cd ..\n$ cd szdbbtw\n$ ls\ndir fcfqp\n$ cd fcfqp\n$ ls\n56006 bthq.wlm\n$ cd ..\n$ cd ..\n$ cd vvrhmrbs\n$ ls\ndir sqwfj\n21051 vcbnl\n$ cd sqwfj\n$ ls\ndir chjpwmb\n170226 fcfqp.wrn\n$ cd chjpwmb\n$ ls\n305407 ctprm.bpc\n$ cd ..\n$ cd ..\n$ cd ..\n$ cd ..\n$ cd jbm\n$ ls\n138219 fcfqp\ndir jwbrhmzj\n67905 mbvpfmgs.lbq\n125465 mzvb\ndir tsstr\n211711 vrqpss.qtr\n$ cd jwbrhmzj\n$ ls\n22219 zqmldh.jwc\n$ cd ..\n$ cd tsstr\n$ ls\n141377 ctprm.bpc\n28965 jhwr.tvf\ndir rmbpb\n$ cd rmbpb\n$ ls\n185176 mzvb\n204877 vcbnl\n$ cd ..\n$ cd ..\n$ cd ..\n$ cd jsfscjd\n$ ls\n210670 jqwcrvg\n263796 qcv.crz\n23224 slcgw.hmz\ndir tws\n$ cd tws\n$ ls\n244925 dnrswnh\n307737 vcbnl\n$ cd ..\n$ cd ..\n$ cd qmpbb\n$ ls\n175766 fcfqp.pgc\n155950 nnrgl.qtd\n215226 rjjw\n218856 rpvstz.cls\n$ cd ..\n$ cd sjhrg\n$ ls\ndir dbdc\ndir jprmnvv\ndir wbqrzrcd\n$ cd dbdc\n$ ls\n159323 cqfmgtr.fpp\n$ cd ..\n$ cd jprmnvv\n$ ls\n314162 ctprm.bpc\n$ cd ..\n$ cd wbqrzrcd\n$ ls\n177804 mzvb\n11757 wfmhd.srn\n$ cd ..\n$ cd ..\n$ cd tsstr\n$ ls\n303871 hhg\n311124 mzvb\n$ cd ..\n$ cd ..\n$ cd hqvhrpnv\n$ ls\n75235 mzvb\n$ cd ..\n$ cd ..\n$ cd ..\n$ cd mtbt\n$ ls\n277478 bqvdgj.tdt\ndir gtgdhl\n100015 hnmvhb.dqb\ndir hqvhrpnv\ndir pdhn\ndir ptmpqgj\ndir qfdmhqhm\ndir tsstr\n178843 tsstr.crd\ndir ttjltb\n45660 vbqjdj.znj\n204359 vch.zrz\n$ cd gtgdhl\n$ ls\n305753 hsjc\n$ cd ..\n$ cd hqvhrpnv\n$ ls\n131065 cvt.pwb\ndir dzrlrdc\ndir fcfqp\n175755 hqvhrpnv.gjg\n313719 jjpnjhqz.wtf\n3622 nhr.vtv\ndir spz\n$ cd dzrlrdc\n$ ls\n65797 wqtnzw.tpr\n$ cd ..\n$ cd fcfqp\n$ ls\n141146 hhg\n$ cd ..\n$ cd spz\n$ ls\n292906 gjgczrpm.hlw\n202319 gjn.ptw\n311120 vcbnl\n93748 wqtnzw\n$ cd ..\n$ cd ..\n$ cd pdhn\n$ ls\ndir rjgsq\n$ cd rjgsq\n$ ls\n424 ctprm.bpc\n$ cd ..\n$ cd ..\n$ cd ptmpqgj\n$ ls\n10127 mdnllcs\n178992 npbr\ndir rpvstz\ndir wqtnzw\n$ cd rpvstz\n$ ls\n248549 gjnpwldn.jsh\n31443 nstp.jpj\n$ cd ..\n$ cd wqtnzw\n$ ls\n47276 mzvb\n$ cd ..\n$ cd ..\n$ cd qfdmhqhm\n$ ls\n254322 wqtnzw.qrn\n$ cd ..\n$ cd tsstr\n$ ls\n265555 cqbs.thq\n273707 ggnr\n$ cd ..\n$ cd ttjltb\n$ ls\n82810 cmln.qlj\n23429 mzvb\n$ cd ..\n$ cd ..\n$ cd qtfmf\n$ ls\n108080 hqvhrpnv\ndir hrl\ndir mnb\n85284 qrfjg\ndir rfghjdj\ndir tsstr\ndir wqtnzw\n$ cd hrl\n$ ls\ndir dwgnv\ndir lgn\ndir qhcjcc\ndir rpvstz\ndir zrqf\n$ cd dwgnv\n$ ls\ndir mrhvqqc\n$ cd mrhvqqc\n$ ls\n113150 qbhmdfwg.wrt\n$ cd ..\n$ cd ..\n$ cd lgn\n$ ls\n293311 gzzdwd.wnn\n$ cd ..\n$ cd qhcjcc\n$ ls\n298893 fcfqp\n253573 lvb.brw\n301515 ndbrjbw.ssq\n236001 vmdgmm.gmh\n124715 wqtnzw.cqd\n$ cd ..\n$ cd rpvstz\n$ ls\ndir hqvhrpnv\ndir rpvstz\ndir tbdnjbmr\n$ cd hqvhrpnv\n$ ls\n271956 vrtgr.vdt\n$ cd ..\n$ cd rpvstz\n$ ls\n185836 cjcf.rwc\n289321 vcbnl\n$ cd ..\n$ cd tbdnjbmr\n$ ls\n124297 ctprm.bpc\n323010 hhg\n$ cd ..\n$ cd ..\n$ cd zrqf\n$ ls\ndir fcfqp\ndir vrp\n$ cd fcfqp\n$ ls\n1896 cdfldlv.ptw\n$ cd ..\n$ cd vrp\n$ ls\n5610 fmmvbft.rjq\n$ cd ..\n$ cd ..\n$ cd ..\n$ cd mnb\n$ ls\n64404 ctprm.bpc\ndir tsstr\n$ cd tsstr\n$ ls\n172859 gjgczrpm.hlw\n$ cd ..\n$ cd ..\n$ cd rfghjdj\n$ ls\n78613 cpfclgj.wqh\n$ cd ..\n$ cd tsstr\n$ ls\ndir cjdbwvn\n135418 gjgczrpm.hlw\ndir lsv\n$ cd cjdbwvn\n$ ls\ndir hqvhrpnv\n264636 wqtnzw.gcq\n124125 zvpwlrbr.nnz\n$ cd hqvhrpnv\n$ ls\n43899 tdzsmzw\n$ cd ..\n$ cd ..\n$ cd lsv\n$ ls\n202987 hhg\n251479 vcbnl\ndir vdltrlzg\n$ cd vdltrlzg\n$ ls\ndir nlchndbr\n$ cd nlchndbr\n$ ls\n134010 vcbnl\n$ cd ..\n$ cd ..\n$ cd ..\n$ cd ..\n$ cd wqtnzw\n$ ls\ndir hqvhrpnv\n$ cd hqvhrpnv\n$ ls\n50703 ctprm.bpc\n$ cd ..\n$ cd ..\n$ cd ..\n$ cd sfjrs\n$ ls\ndir cgl\ndir cjjls\n184472 hhg\n241700 pdswzfq.scs\ndir rfwnnr\ndir rpvstz\ndir tsstr\n$ cd cgl\n$ ls\ndir tdwn\n$ cd tdwn\n$ ls\n119119 lzqfb.tgc\n$ cd ..\n$ cd ..\n$ cd cjjls\n$ ls\ndir hgppstcv\n$ cd hgppstcv\n$ ls\n223932 bvt\n85898 hhg\n195499 ppbrb.vtq\n$ cd ..\n$ cd ..\n$ cd rfwnnr\n$ ls\n96712 gmzchms.wst\n271527 mzvb\n$ cd ..\n$ cd rpvstz\n$ ls\n78920 cbj.mlh\n$ cd ..\n$ cd tsstr\n$ ls\n17373 bdlrvwv\n50170 vcbnl\n$ cd ..\n$ cd ..\n$ cd trtl\n$ ls\ndir dflwctzs\ndir gsl\n168166 hhg\ndir jlfrcp\n97874 mzvb\ndir pfnlc\ndir pjj\n186837 qzlwgts\n132833 tnb.mpv\ndir vmjljc\n$ cd dflwctzs\n$ ls\n6196 fcfqp.qcg\n181057 mrjvtvl.hmm\n$ cd ..\n$ cd gsl\n$ ls\ndir gmlp\ndir mjrs\ndir rpvstz\n91777 wqtnzw.hpl\n$ cd gmlp\n$ ls\n167819 qmtmtppc\n254187 sbn.chs\n119156 tbhhgmz.vqs\n31966 tptqzrqr.zgh\n$ cd ..\n$ cd mjrs\n$ ls\n167756 fcfqp.jgz\n221559 tzj.rfb\n$ cd ..\n$ cd rpvstz\n$ ls\n93065 hhg\n$ cd ..\n$ cd ..\n$ cd jlfrcp\n$ ls\ndir fcfqp\ndir hmlmvqc\n256413 mrtwp\n141186 mzvb\n106340 nvwfhv.rvt\ndir pqmfswh\ndir qghq\n274275 qmmgnjh\ndir trhs\ndir tsstr\n55881 wbtf\n$ cd fcfqp\n$ ls\n265006 fcfqp.dtr\ndir tdflqz\ndir thjdsqmw\n136055 vshqb\n$ cd tdflqz\n$ ls\ndir dtvnrl\n$ cd dtvnrl\n$ ls\n277524 mzvb\n$ cd ..\n$ cd ..\n$ cd thjdsqmw\n$ ls\ndir chhf\ndir hsnrrc\n218719 qgt.sdb\ndir tsstr\n134210 twvn\ndir wqtnzw\n$ cd chhf\n$ ls\n6278 ctprm.bpc\n$ cd ..\n$ cd hsnrrc\n$ ls\ndir bphrpw\ndir dmjvnrhz\ndir rpvstz\ndir wqtnzw\n$ cd bphrpw\n$ ls\ndir brj\ndir hqvhrpnv\ndir rpvstz\n$ cd brj\n$ ls\n13067 rpvstz.bqh\n$ cd ..\n$ cd hqvhrpnv\n$ ls\n148840 ctprm.bpc\ndir fsvgbd\n94116 hghq.gqm\n$ cd fsvgbd\n$ ls\n222743 ctprm.bpc\n80460 vwp.nnq\n$ cd ..\n$ cd ..\n$ cd rpvstz\n$ ls\n287030 ctprm.bpc\n145932 rhpt\n$ cd ..\n$ cd ..\n$ cd dmjvnrhz\n$ ls\ndir mlh\n$ cd mlh\n$ ls\n238301 tsstr.vfl\n$ cd ..\n$ cd ..\n$ cd rpvstz\n$ ls\n59172 mcv\n$ cd ..\n$ cd wqtnzw\n$ ls\n50806 tlwnzqgb.dqq\n$ cd ..\n$ cd ..\n$ cd tsstr\n$ ls\ndir rpvstz\n$ cd rpvstz\n$ ls\n109284 mzvb\n$ cd ..\n$ cd ..\n$ cd wqtnzw\n$ ls\ndir hwpdsfg\ndir mrn\n183742 rpvstz.pdq\n$ cd hwpdsfg\n$ ls\n295333 vbbrvhqm.mvj\n$ cd ..\n$ cd mrn\n$ ls\n46589 mzvb\n235773 pppwz\n69304 rsrbq.qdl\n$ cd ..\n$ cd ..\n$ cd ..\n$ cd ..\n$ cd hmlmvqc\n$ ls\n77344 ctprm.bpc\n291828 hhg\n226384 rpvstz.qfl\n10758 tpmdrpg.hcj\n$ cd ..\n$ cd pqmfswh\n$ ls\n127361 bczcpjln.ffs\n208033 ctprm.bpc\n144048 hqvhrpnv.bzm\n88561 pgf.ltz\n149879 twj.drs\n$ cd ..\n$ cd qghq\n$ ls\n165758 hqvhrpnv.mqb\n$ cd ..\n$ cd trhs\n$ ls\ndir bnrqbrv\n177929 rlnln.gcv\n60631 rpvstz\ndir snd\n$ cd bnrqbrv\n$ ls\n150034 ltjjfp\n$ cd ..\n$ cd snd\n$ ls\n21614 hqvhrpnv\n95241 wvtc\n$ cd ..\n$ cd ..\n$ cd tsstr\n$ ls\ndir cdvgvc\ndir mbmn\ndir mprbjtnd\ndir rvwqgn\n8263 tsstr\ndir tvtddch\n$ cd cdvgvc\n$ ls\ndir gvssnh\n121417 hqvhrpnv\n180690 hqvhrpnv.dnl\ndir nhrvzn\n266104 psj.fdv\ndir rpvstz\n278434 rww.nbt\ndir wqtnzw\n$ cd gvssnh\n$ ls\n20979 fpqgb.nbl\n$ cd ..\n$ cd nhrvzn\n$ ls\ndir hqvhrpnv\ndir nlv\n$ cd hqvhrpnv\n$ ls\n202973 hhg\n$ cd ..\n$ cd nlv\n$ ls\n235158 hqvhrpnv\n246378 hqvhrpnv.vmg\n278166 rfzjcbpv.crc\n$ cd ..\n$ cd ..\n$ cd rpvstz\n$ ls\n181642 tsstr.wjh\n$ cd ..\n$ cd wqtnzw\n$ ls\ndir pgnzftwn\n$ cd pgnzftwn\n$ ls\ndir njtgddhw\n217983 sqwmjb\n149152 wqtnzw.pzv\n$ cd njtgddhw\n$ ls\n75203 fvbr\n$ cd ..\n$ cd ..\n$ cd ..\n$ cd ..\n$ cd mbmn\n$ ls\n82237 hhg\n36010 hqvhrpnv.hcf\n$ cd ..\n$ cd mprbjtnd\n$ ls\n23927 gbrvbz.rgc\n20857 hqvhrpnv\n203364 zpbhr.svj\n$ cd ..\n$ cd rvwqgn\n$ ls\n291142 fcfqp.mdf\n124256 gjgczrpm.hlw\n235579 mzvb\n$ cd ..\n$ cd tvtddch\n$ ls\n317689 dshzl.plf\n44518 vphnqd\n$ cd ..\n$ cd ..\n$ cd ..\n$ cd pfnlc\n$ ls\ndir vdsjh\ndir wfvgc\n$ cd vdsjh\n$ ls\n202584 pzs\n$ cd ..\n$ cd wfvgc\n$ ls\n315910 ctmrb.qsq\n$ cd ..\n$ cd ..\n$ cd pjj\n$ ls\n242824 qhngjlvt.pcb\ndir wzv\n$ cd wzv\n$ ls\n221150 clrchzw.vbj\n$ cd ..\n$ cd ..\n$ cd vmjljc\n$ ls\ndir blm\n31640 dbtnn\ndir fcfqp\ndir frjdzh\ndir scjhzc\ndir tmz\ndir vpvh\ndir zcwpb\n$ cd blm\n$ ls\n249527 hjsjqbw.rst\ndir hqvhrpnv\ndir pvnrmvb\ndir pvt\ndir rjpcb\n161576 slp.gbn\ndir srrzgt\n97355 wtps.brr\n$ cd hqvhrpnv\n$ ls\ndir tsstr\ndir wqtnzw\ndir zphvcch\n$ cd tsstr\n$ ls\ndir fzrpgcn\n$ cd fzrpgcn\n$ ls\n10603 hhg\n$ cd ..\n$ cd ..\n$ cd wqtnzw\n$ ls\n56612 ctprm.bpc\n22521 fljtffmz.rcl\n$ cd ..\n$ cd zphvcch\n$ ls\ndir fcfqp\n$ cd fcfqp\n$ ls\n171787 ctprm.bpc\n134010 mzvb\n$ cd ..\n$ cd ..\n$ cd ..\n$ cd pvnrmvb\n$ ls\n100624 fcfqp.nzt\n120945 mzvb\n$ cd ..\n$ cd pvt\n$ ls\ndir lslcvfv\n8511 mzvb\n81176 srnqlrn.lvg\n315976 ttzwwnn.fmz\ndir wvhrf\n$ cd lslcvfv\n$ ls\ndir gmj\n13666 tcbf\n$ cd gmj\n$ ls\n174220 drpztfvs.shg\n$ cd ..\n$ cd ..\n$ cd wvhrf\n$ ls\n19033 gqggsrc\n270841 hhg\ndir nvvpbmgm\n$ cd nvvpbmgm\n$ ls\n241543 pzht\n72906 rmhrd\ndir tllpvrdv\n$ cd tllpvrdv\n$ ls\n309970 lmqcbbz\n$ cd ..\n$ cd ..\n$ cd ..\n$ cd ..\n$ cd rjpcb\n$ ls\n215654 fcfqp.gjw\n241891 gjgczrpm.hlw\ndir gqql\n101620 sqjtc\n$ cd gqql\n$ ls\n214991 wctr.qnb\n$ cd ..\n$ cd ..\n$ cd srrzgt\n$ ls\ndir bwfnrbs\n147738 hhg\ndir qdctrw\ndir svpm\ndir tsstr\n$ cd bwfnrbs\n$ ls\n133922 gpsmlzbp.ghd\n$ cd ..\n$ cd qdctrw\n$ ls\n56213 ppp\n$ cd ..\n$ cd svpm\n$ ls\n205352 hhg\n$ cd ..\n$ cd tsstr\n$ ls\n248839 fcfqp.hlg\n299835 lfdlfrhs.vjz\n$ cd ..\n$ cd ..\n$ cd ..\n$ cd fcfqp\n$ ls\ndir ctbbgw\ndir rpvstz\n265076 wqtnzw.cts\n$ cd ctbbgw\n$ ls\n306172 vcbnl\n$ cd ..\n$ cd rpvstz\n$ ls\n40277 hhg\n225110 mllhtfm.jwd\n$ cd ..\n$ cd ..\n$ cd frjdzh\n$ ls\n69285 jlscvz.lsw\n$ cd ..\n$ cd scjhzc\n$ ls\n221073 gjgczrpm.hlw\n$ cd ..\n$ cd tmz\n$ ls\n35287 fcfqp\n146224 mnz.zwd\n189997 mzvb\ndir tsn\n31655 ttwjfbl.jbb\ndir wjszmnp\n170705 wqtnzw.slq\n$ cd tsn\n$ ls\n196121 mzvb\n$ cd ..\n$ cd wjszmnp\n$ ls\ndir pbtmjghf\ndir smbbnl\n$ cd pbtmjghf\n$ ls\n151036 vcbnl\n$ cd ..\n$ cd smbbnl\n$ ls\n299800 mbt\ndir wqtnzw\n$ cd wqtnzw\n$ ls\n203547 hhg\n220352 wqtnzw.dgs\n$ cd ..\n$ cd ..\n$ cd ..\n$ cd ..\n$ cd vpvh\n$ ls\n69506 vbgrhzjs.tdb\n$ cd ..\n$ cd zcwpb\n$ ls\n73403 fcfqp.hpq";
},{}],"src/day7/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.day7Part2 = exports.day7Part1 = void 0;
var input_1 = require("./input");
function createDir(id, parent) {
  return {
    id: id,
    dirs: [],
    files: [],
    parent: parent,
    size: 0
  };
}
function createFile(id, size) {
  return {
    id: id,
    size: size
  };
}
var buildTree = function buildTree() {
  var stack = [];
  var root = createDir("/");
  var commands = input_1.input.split("$ ").map(function (lines) {
    return lines.split("\n");
  });
  var currentDir = function currentDir() {
    return stack[stack.length - 1];
  };
  var getOrAddDir = function getOrAddDir(id) {
    var current = currentDir();
    var existing = current.dirs.find(function (child) {
      return child.id === id;
    });
    if (existing) {
      return existing;
    }
    var newDir = createDir(id, current);
    current.dirs.push(newDir);
    return newDir;
  };
  var getOrAddFile = function getOrAddFile(id, size) {
    var current = currentDir();
    var existing = current.files.find(function (child) {
      return child.id === id;
    });
    if (existing) {
      return existing;
    }
    var newFile = createFile(id, size);
    current.files.push(newFile);
    current.size = current.size ? current.size + size : size;
    // Add the size to the current dir and its parents
    var p = current.parent;
    while (p) {
      p.size = p.size ? p.size + size : size;
      p = p.parent;
    }
    return newFile;
  };
  for (var _i = 0, commands_1 = commands; _i < commands_1.length; _i++) {
    var _a = commands_1[_i],
      command = _a[0],
      output = _a.slice(1);
    if (command) {
      if (command.startsWith("cd ")) {
        var path = command.split(" ")[1];
        if (path === "..") {
          stack.pop();
        } else if (path === "/") {
          stack = [root];
        } else {
          var dir = getOrAddDir(path);
          stack.push(dir);
        }
      } else if (command === "ls") {
        for (var _b = 0, output_1 = output; _b < output_1.length; _b++) {
          var item = output_1[_b];
          var _c = item.split(" "),
            typeOrSize = _c[0],
            name = _c[1];
          if (typeOrSize === "dir") {
            getOrAddDir(name);
          } else if (typeOrSize) {
            getOrAddFile(name, Number(typeOrSize));
          }
        }
      }
    }
  }
  return root;
};
function day7Part1() {
  var _a, _b;
  var root = buildTree();
  var smallDirs = [];
  var s = [root];
  while (s.length) {
    var current = s.pop();
    if (!current) {
      break;
    }
    if (((_a = current.size) !== null && _a !== void 0 ? _a : Infinity) <= 100000) {
      smallDirs.push(current);
    }
    s.push.apply(s, (_b = current === null || current === void 0 ? void 0 : current.dirs) !== null && _b !== void 0 ? _b : []);
  }
  return smallDirs.reduce(function (o, d) {
    var _a;
    return o + ((_a = d.size) !== null && _a !== void 0 ? _a : 0);
  }, 0);
}
exports.day7Part1 = day7Part1;
function day7Part2() {
  var _a;
  var root = buildTree();
  var freeSpace = 70000000 - root.size;
  var sizeToDelete = 30000000 - freeSpace;
  console.log(sizeToDelete);
  var minMatchingDir = Infinity;
  var s = [root];
  while (s.length) {
    var current = s.pop();
    if (!current) {
      break;
    }
    if (current.size >= sizeToDelete && current.size < minMatchingDir) {
      minMatchingDir = current.size;
    }
    s.push.apply(s, (_a = current === null || current === void 0 ? void 0 : current.dirs) !== null && _a !== void 0 ? _a : []);
  }
  return minMatchingDir;
}
exports.day7Part2 = day7Part2;
},{"./input":"src/day7/input.ts"}],"src/index.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
require("./styles.css");
var day7_1 = require("./day7");
// console.log("Day 1 Part 1: ", day1Part1());
// console.log("Day 1 Part 2: ", day1Part2());
// console.log("Day 2 Part 1: ", day2Part1());
// console.log("Day 2 Part 2: ", day2Part2());
// console.log("Day 3 Part 1: ", day3Part1());
// console.log("Day 3 Part 2: ", day3Part2());
// console.log("Day 4 Part 1: ", day4Part1());
// console.log("Day 4 Part 2: ", day4Part2());
// console.log("Day 5 Part 1: ", day5Part1());
// console.log("Day 5 Part 2: ", day5Part2());
// console.log("Day 6 Part 1: ", day6Part1());
// console.log("Day 6 Part 2: ", day6Part2());
// console.log("Day 7 Part 1: ", day7Part1());
console.log("Day 7 Part 2: ", (0, day7_1.day7Part2)());
document.getElementById("app").innerHTML = "\n<h1>Hello</h1>\n";
},{"./styles.css":"src/styles.css","./day7":"src/day7/index.ts"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "38151" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.ts"], null)
//# sourceMappingURL=/src.f10117fe.js.map