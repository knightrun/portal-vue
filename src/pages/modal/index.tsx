import {CreateElement, VNode} from 'vue'
import {Component, Vue} from 'nuxt-property-decorator'

@Component
export default class Modal extends Vue {
  private show: boolean = false

  onClick() {
    this.show = !this.show
  }

  render(h: CreateElement): VNode {
    return (
        <div id="portalWrap" class="portal_wrap">
          <button type="button" style="width:100px;line-height:50px;background:#222;color:#fff;cursor:pointer" onClick={ this.onClick }>{this.show ? "모달 닫기" : "모달 열기"}</button>

          <portal to="modal">
            <div class={["modal",{show:this.show}]}>
              <div class="modal_title">
                <h1>modal title</h1>
              </div>
              <div class="modal_content">
                modal content
              </div>
            </div>
          </portal>
        </div>
    )
  }
}
