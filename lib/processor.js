/**
 * Copyright (c) 2017 RDUK <tech@rduk.fr>, All rights reserved.
 * 
 * The above copyright notice shall be included in all copies or substantial
 * portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

'use strict';

var util = require('util');
var base = require('@rduk/message-broker/lib/processor/base');
var sms = require('@rduk/sms');

var SmsProcesssor = function SmsProcessor(translator) {
    SmsProcessor.super_.call(this, translator);
};

util.inherits(SmsProcesssor, base);

SmsProcesssor.prototype.run = function(msg) {
    return this.translator.translate(msg.content)
        .then(function(content) {
            return sms.getInstance().send(content.phone, content.body);
        })
        .then(function(result) {
            return result;
        })
        .catch(function(e) {
            console.log(e);
            throw e;
        });
};

module.exports = SmsProcesssor;
