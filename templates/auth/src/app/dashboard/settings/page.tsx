export const metadata = {
  title: 'Settings & API Keys — FrootAuth',
  description: 'Manage API credentials, signing secrets, webhooks, and workspace parameters.',
};

export default function SettingsPage() {
  return (
    <div class="space-y-8 max-w-6xl">
      {/* Page Header */}
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 class="text-2xl font-light text-[#0a2540] tracking-tight">Settings & API Keys</h2>
          <p class="text-sm text-[#425466] mt-1">Manage cryptographic credentials, webhook listeners, and environment access.</p>
        </div>
        <div class="flex items-center gap-2">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0a2540] text-white text-xs font-semibold">
            Cluster: us-east-prod-1
          </span>
        </div>
      </div>

      {/* General Settings Card */}
      <div class="rounded-lg border border-[#e6ebf1] bg-white p-6 shadow-[0_2px_5px_-1px_rgba(50,50,93,0.25),0_1px_3px_-1px_rgba(0,0,0,0.3)]">
        <h3 class="text-base font-medium text-[#0a2540] mb-1">Workspace Identity</h3>
        <p class="text-xs text-[#425466] mb-5">Identify your cluster on public APIs and invoices.</p>

        <form onsubmit="event.preventDefault(); alert('Settings saved successfully!');" class="space-y-4 max-w-xl">
          <div>
            <label class="block text-xs font-medium text-[#0a2540] mb-1.5">Workspace Name</label>
            <input type="text" defaultValue="Orbit Workspace" required class="inp" />
          </div>

          <div>
            <label class="block text-xs font-medium text-[#0a2540] mb-1.5">Organization Slug</label>
            <div class="flex rounded-md border border-[#e6ebf1] overflow-hidden">
              <span class="bg-[#f6f9fc] px-3 py-2 text-xs text-[#425466] border-r border-[#e6ebf1]">
                app.frootauth.com/
              </span>
              <input type="text" defaultValue="orbit-workspace" class="inp border-0 rounded-none flex-1" />
            </div>
          </div>

          <div>
            <label class="block text-xs font-medium text-[#0a2540] mb-1.5">Support Email</label>
            <input type="email" defaultValue="support@frootkit.dev" class="inp" />
          </div>

          <div class="pt-2">
            <button type="submit" class="btn btn-p text-xs py-2 px-4 shadow-sm">
              Save Changes
            </button>
          </div>
        </form>
      </div>

      {/* API Keys & Secrets Card */}
      <div class="rounded-lg border border-[#e6ebf1] bg-white p-6 shadow-[0_2px_5px_-1px_rgba(50,50,93,0.25),0_1px_3px_-1px_rgba(0,0,0,0.3)] space-y-6">
        <div>
          <h3 class="text-base font-medium text-[#0a2540]">API Keys & Authorization</h3>
          <p class="text-xs text-[#425466] mt-0.5">Use publishable keys on the client and secret keys in secure backend functions.</p>
        </div>

        {/* Publishable Key */}
        <div class="space-y-1.5">
          <label class="block text-xs font-medium text-[#0a2540]">Publishable API Key (Client-Safe)</label>
          <div class="flex items-center gap-2">
            <input
              id="pk-key"
              type="text"
              readonly
              value="pk_live_51M0OrbitNorth9827341908234"
              class="inp font-mono text-xs bg-[#f6f9fc] select-all"
            />
            <button
              onclick="navigator.clipboard.writeText(document.getElementById('pk-key').value); alert('Publishable Key copied to clipboard!');"
              class="btn btn-s text-xs py-2 px-3 shrink-0"
            >
              Copy
            </button>
          </div>
        </div>

        {/* Secret Key */}
        <div class="space-y-1.5">
          <label class="block text-xs font-medium text-[#0a2540]">Secret API Key (Never expose on frontend)</label>
          <div class="flex items-center gap-2">
            <input
              id="sk-key"
              type="password"
              readonly
              value="sk_live_9921_SubtleCrypto_PBKDF2_Secret_Key_Token"
              class="inp font-mono text-xs bg-[#f6f9fc] select-all"
            />
            <button
              id="sk-reveal-btn"
              onclick="var inp = document.getElementById('sk-key'); var isP = inp.type === 'password'; inp.type = isP ? 'text' : 'password'; this.textContent = isP ? 'Hide' : 'Reveal';"
              class="btn btn-s text-xs py-2 px-3 shrink-0"
            >
              Reveal
            </button>
            <button
              onclick="navigator.clipboard.writeText('sk_live_9921_SubtleCrypto_PBKDF2_Secret_Key_Token'); alert('Secret Key copied to clipboard!');"
              class="btn btn-s text-xs py-2 px-3 shrink-0"
            >
              Copy
            </button>
          </div>
        </div>
      </div>

      {/* Webhook Endpoints Card */}
      <div class="rounded-lg border border-[#e6ebf1] bg-white p-6 shadow-[0_2px_5px_-1px_rgba(50,50,93,0.25),0_1px_3px_-1px_rgba(0,0,0,0.3)] space-y-5">
        <div>
          <h3 class="text-base font-medium text-[#0a2540]">Webhook Endpoints</h3>
          <p class="text-xs text-[#425466] mt-0.5">Receive real-time signed HTTP POST events on user registration, invoices, and retries.</p>
        </div>

        <div class="space-y-4 max-w-xl">
          <div>
            <label class="block text-xs font-medium text-[#0a2540] mb-1.5">Listener URL</label>
            <input type="url" defaultValue="https://api.domain.com/webhooks/froot" class="inp font-mono text-xs" />
          </div>

          <div>
            <label class="block text-xs font-medium text-[#0a2540] mb-1.5">Subscribed Events</label>
            <div class="flex flex-wrap gap-2 text-xs">
              <span class="px-2.5 py-1 rounded bg-[#635bff]/10 text-[#635bff] font-mono font-medium">user.created</span>
              <span class="px-2.5 py-1 rounded bg-[#635bff]/10 text-[#635bff] font-mono font-medium">payment.succeeded</span>
              <span class="px-2.5 py-1 rounded bg-[#635bff]/10 text-[#635bff] font-mono font-medium">subscription.updated</span>
              <span class="px-2.5 py-1 rounded bg-[#635bff]/10 text-[#635bff] font-mono font-medium">invoice.paid</span>
            </div>
          </div>

          <div class="pt-2 flex items-center gap-2">
            <button
              onclick="alert('Webhook ping event dispatched! Received HTTP 200 OK.');"
              class="btn btn-s text-xs py-2 px-3.5"
            >
              Send Test Ping
            </button>
            <span class="text-xs text-[#425466]">Last ping 14 mins ago (200 OK)</span>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div class="rounded-lg border border-[#cd3d64]/20 bg-[#cd3d64]/5 p-6 space-y-4">
        <div>
          <h3 class="text-base font-medium text-[#cd3d64]">Danger Zone</h3>
          <p class="text-xs text-[#425466] mt-0.5">Destructive actions cannot be undone. Exercise extreme caution.</p>
        </div>

        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-[#cd3d64]/15">
          <div>
            <h4 class="text-xs font-semibold text-[#0a2540]">Delete Workspace</h4>
            <p class="text-xs text-[#425466]">Permanently delete this cluster and all associated sessions, users, and API tokens.</p>
          </div>
          <button
            onclick="confirm('Are you sure you want to permanently delete this cluster?') && alert('Action prevented in demo mode.')"
            class="rounded-md border border-[#cd3d64] bg-white px-3.5 py-1.5 text-xs font-medium text-[#cd3d64] hover:bg-[#cd3d64] hover:text-white transition-colors shrink-0"
          >
            Delete Workspace
          </button>
        </div>
      </div>
    </div>
  );
}

