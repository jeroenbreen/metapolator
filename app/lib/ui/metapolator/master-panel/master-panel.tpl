<mtk-local-menu class="localmenu">
    <div class="lm-head" ng-mousedown="localMenuCtrl.toggleMenu('masters')">
        Masters
    </div>
    <div class="lm-body" ng-if="display.localMenu == 'masters'">
        <div class="lm-button" ng-mouseup="importUfo()">Import ufo…</div>
        <div class="lm-divider"></div>
        <div class="lm-button" ng-mouseup="duplicateMasters()" ng-class="{'inactive': !model.areChildrenSelected()}">Duplicate</div>
        <div class="lm-divider"></div>
        <div class="lm-button" ng-mouseup="deleteMasters()" ng-class="{'inactive': !model.areChildrenSelected()}">Delete…</div>
    </div>
</mtk-local-menu>

<div class="list-container" mtk-view-rubberband="masters">
    <ul class="ul-sequence">
        <li class="li-sequence" ng-repeat="sequence in model.sequences">
            <ul class="ul-master" ui-sortable="sortableOptions" ng-model="sequence.children">
                <li class="li-master" 
                    ng-repeat="master in sequence.children"
                    ng-mouseover="mouseoverMaster(master)"
                    ng-mouseleave="mouseleaveMaster()">
                    <mtk-master class="mtk-master" 
                                mtk-model="master" 
                                ng-class="{'selected': master.edit[0]}"></mtk-master>
                </li>
            </ul>
        </li>
    </ul>
    <div class="list-buttons">
        <div title="Import UFO" ng-click="importUfo();" class="list-button">
            <img src="lib/ui/metapolator/img/importUfo.png">
        </div>
        <div title="Duplicate Master(s)" ng-click="duplicateMasters();" class="list-button">
            <img src="lib/ui/metapolator/img/duplicateMaster.png" ng-class="{'inactive': !model.areChildrenSelected()}">
        </div>
    </div>
</div>